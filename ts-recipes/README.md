# TypeScript Recipes for Arbitrum

TypeScript scripts using the `viem` library for PYUSD interactions on Arbitrum.

> **Note:** These scripts currently target Arbitrum Sepolia testnet. See the [main README](../README.md) for contract addresses.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- Dependencies installed: `npm install` (from project root)
- A `.env` file in the project root with:
  ```
  PRIVATE_KEY=your_testnet_private_key
  ETH_RPC_URL=https://sepolia.arbitrum.io/rpc
  WALLET_ADDRESS=your_wallet_address
  ```
## Dependencies

- `viem` - Modern Ethereum library
- `dotenv` - Environment variable loading
- `@commander-js/extra-typings` - CLI argument parsing with TypeScript support

## Scripts

### [`checkBalance.ts`](./checkBalance.ts)

Creates a read-only client connection to Arbitrum Sepolia and calls the PYUSD contract's `balanceOf` function to retrieve token balance.

```bash
npx tsx ts-recipes/checkBalance.ts [address-here]
```


### [`sendToPaypal.ts`](./sendToPaypal.ts)

Uses your private key from `.env` to sign a PYUSD transfer transaction and submits it to Arbitrum Sepolia via the configured RPC endpoint.

```bash
npx tsx ts-recipes/sendToPaypal.ts <recipient_address> <amount_in_pyusd>
```



