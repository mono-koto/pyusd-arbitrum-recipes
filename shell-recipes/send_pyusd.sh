#!/bin/bash

# Simple script to send PYUSD
# TODO: Add proper error handling, validation, and amount conversion

# Load .env from root directory
if [ -f ".env" ]; then
    source .env
elif [ -f "../.env" ]; then
    source ../.env
else
    echo "Error: .env file not found"
    exit 1
fi

# Use PYUSD_ADDRESS from .env file
if [ -z "$PYUSD_ADDRESS" ]; then
    echo "Error: PYUSD_ADDRESS not set in .env file"
    exit 1
fi

# Check arguments
if [ $# -ne 2 ]; then
    echo "Usage: $0 <recipient_address> <amount_in_pyusd>"
    exit 1
fi

RECIPIENT=$1
AMOUNT_PYUSD=$2

echo "Sending $AMOUNT_PYUSD PYUSD to $RECIPIENT"

# Convert to raw units (multiply by 1,000,000 for 6 decimals)
# This is a little bit of a hack because we get a decimal from bc
RAW_AMOUNT=$(echo "$AMOUNT_PYUSD * 1000000" | bc | cut -d. -f1)

echo "Raw amount: $RAW_AMOUNT"

# Send the transaction
cast send $PYUSD_ADDRESS "transfer(address,uint256)" $RECIPIENT $RAW_AMOUNT \
    --private-key $PRIVATE_KEY \
    --rpc-url $ETH_RPC_URL

echo "Transaction sent!"