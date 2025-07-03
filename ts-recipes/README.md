# TypeScript Recipes for Arbitrum

TypeScript scripts using the `viem` library for PYUSD interactions on Arbitrum.

> **Note:** These scripts currently target Arbitrum Sepolia testnet. See the [main README](../README.md) for contract addresses.

## Prerequisites

If you haven't already, make sure to set up according to the [main README](../README.md).

## Install dependencies

```bash
npm install
```
We're only using a few libraries of note:
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