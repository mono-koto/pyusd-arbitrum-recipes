# PYUSD Recipes

Quick, runnable examples for working with PYUSD on Arbitrum Sepolia using Foundry and TypeScript.

These scripts are meant to help developers test basic PYUSD flows like checking balances and sending tokens. Each script is standalone and assumes you're working with a dev wallet and testnet funds.

---

## Requirements

### System prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Foundry](https://book.getfoundry.sh/getting-started/installation) (`forge` and `cast`)

---

## Create a Dev Wallet

If you don’t already have one, you can generate a new private key using Foundry:

```
cast wallet new
```

This gives you a private key and public address. Fund it with ETH on Arbitrum Sepolia for gas, and send it PYUSD from an existing wallet if you have testnet tokens.

> These examples assume you're using a testnet wallet. **Do not** use real funds or production keys.

---

## Setup

### 1. Clone this repo

```
git clone https://github.com/your-org/pyusd-recipes.git
cd pyusd-recipes
```

### 2. Create a `.env` file

Create a file called `.env` in the root of the repo with the following content:

```
PRIVATE_KEY=your_testnet_private_key
RPC_URL=https://sepolia.arbitrum.io/rpc
```

> On mainnet or for more secure usage, consider using [hardware wallets](https://book.getfoundry.sh/cli/cheatcodes#using-a-hardware-wallet) or Foundry’s built-in wallet support via `--ledger`, `--keystore`, or encrypted key files.

---

## PYUSD Address (Arbitrum Sepolia)

Contract address: `0xdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef`

> Confirm the token address and decimal settings if you’re adapting these scripts for mainnet.

---

## Using the Recipes

### Foundry / `cast` Scripts

These use `cast` to interact with the PYUSD contract directly from the command line.

```
cd foundry
```

- `check_balance.sh`  
  Get the PYUSD balance of any address.

- `send_pyusd.sh`  
  Send PYUSD from your wallet to another address.

> Scripts pull config from `.env` and use `cast send` and `cast call`.

---

### TypeScript + `viem` Scripts

These scripts use `viem` for a more programmatic interface, runnable with `npx tsx`.

```
cd typescript
```

- `checkBalance.ts`  
  Logs the PYUSD balance of your wallet.

- `sendToPaypal.ts`  
  Sends a test transfer to a known PayPal-owned address.

Run with:

```
npx tsx checkBalance.ts
npx tsx sendToPaypal.ts
```

---

## Notes

- These scripts are for demo and testing purposes only.
- You can copy, modify, and use them freely in your own workflows.
- No warranties, use at your own risk.

---

## License

MIT
