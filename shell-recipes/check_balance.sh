#!/bin/bash

# Simple script to check PYUSD balance
# TODO: Add proper error handling and validation

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

# Require address argument
if [ $# -ne 1 ]; then
    echo "Usage: $0 <address>"
    exit 1
fi

ADDRESS=$1

echo "Checking PYUSD balance for: $ADDRESS"

# Get raw balance
RAW_BALANCE=$(cast call $PYUSD_ADDRESS "balanceOf(address)(uint256)" $ADDRESS --rpc-url $ETH_RPC_URL)

echo "Raw balance: $RAW_BALANCE"

# Extract just the numeric part (remove scientific notation if present)
NUMERIC_BALANCE=$(echo $RAW_BALANCE | cut -d' ' -f1)

# Format with 6 decimal places
FORMATTED_BALANCE=$(cast format-units "$NUMERIC_BALANCE" 6)
echo "Formatted balance: $FORMATTED_BALANCE PYUSD"