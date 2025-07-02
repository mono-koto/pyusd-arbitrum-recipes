# Shell Recipes for Arbitrum

Shell scripts using Foundry's `cast` command-line tool for PYUSD interactions on Arbitrum.

> **Note:** These scripts currently target Arbitrum Sepolia testnet. See the [main README](../README.md) for contract addresses.

## Prerequisites

- [Foundry](https://book.getfoundry.sh/getting-started/installation) (`cast` command)
- A `.env` file in the project root with:
  ```
  PRIVATE_KEY=your_testnet_private_key
  ETH_RPC_URL=https://sepolia.arbitrum.io/rpc
  WALLET_ADDRESS=your_wallet_address
  ```

## Scripts

### [`check_balance.sh`](./check_balance.sh)

Check the PYUSD balance of an address on Arbitrum.

```bash
./shell-recipes/check_balance.sh <address>
```

What it's doing:
- Uses `cast call` to connect to the configured RPC endpoint and read the results of the `balanceOf` function on the PYUSD contract
- Returns both raw balance (in smallest units) and formatted balance (in PYUSD)
- PYUSD uses 6 decimal places, so 1,000,000 raw units = 1 PYUSD

### [`send_pyusd.sh`](./send_pyusd.sh)

Send PYUSD from your wallet on Arbitrum to another address on Arbitrum.

```bash
./shell-recipes/send_pyusd.sh <recipient_address> <amount_in_pyusd>
```

What it's doing:
- Uses `bc` (basic calculator) to convert PYUSD amount to raw units (multiply by 1,000,000 for 6 decimals)
- Uses `cast send` to call the `transfer(address,uint256)` function on the PYUSD contract
- Signs the transaction using the private key from your `.env` file
- Submits the transaction to the Arbitrum Sepolia network via the specified RPC URL

