# PYUSD Arbitrum Recipes

Quick, runnable examples for working with [PYUSD](https://www.paypal.com/us/digital-wallet/manage-money/crypto/pyusd) on [Arbitrum](https://arbitrum.io/) using [Foundry](https://book.getfoundry.sh/) and [TypeScript](https://www.typescriptlang.org/).

These scripts are meant to help developers test basic PYUSD flows like checking balances and sending tokens on Arbitrum. Each script is standalone and assumes you're working with a dev wallet and testnet funds.

## PYUSD Contract Addresses

| Network | Contract Address | Status |
|---------|------------------|---------|
| Arbitrum One (Mainnet) | `0x46850aD61C2B7d64d08c9C754F45254596696984` | Coming Soon |
| Arbitrum Sepolia (Testnet) | `0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B` | Coming Soon |

## Recipes

We've put together a few simple scripts to show interaction with the PYUSD ERC-20 contract on Arbitrum. You can run these scripts directly in your terminal. 

### 🔧 [Shell Recipes](./shell-recipes/)

Shell scripts using Foundry's `cast` command-line tool for Arbitrum interactions.

- [`check_balance.sh`](./shell-recipes/check_balance.sh) - Check Arbitrum PYUSD balance
- [`send_pyusd.sh`](./shell-recipes/send_pyusd.sh) - Send Arbitrum PYUSD tokens

### 📝 [TypeScript Recipes](./ts-recipes/)

TypeScript scripts using the `viem` library for Arbitrum interactions. 

- [`checkBalance.ts`](./ts-recipes/checkBalance.ts) - Check Arbitrum PYUSD balance
- [`sendToPaypal.ts`](./ts-recipes/sendToPaypal.ts) - Send Arbitrum PYUSD


## Quick Start

### 0. Install tooling

- [Node.js](https://nodejs.org/) (v18+) for TypeScript recipes
- [Foundry](https://book.getfoundry.sh/getting-started/installation) for cast recipes

### 1. Clone and Setup

```bash
git clone https://github.com/mono-koto/pyusd-recipes.git
cd pyusd-recipes
```

### 2. Create a dev wallet

Generate a new testnet wallet with Foundry:

```bash
cast wallet new
```

Or create a vanity address:

```bash
cast wallet vanity --starts-with f00
```

> 🧐 **Security Note:** These examples are for testing purposes only. We recommend using a wallet generated and stored in a more secure manner for production use.

### 3. Set up environment variables

Copy the template and fill in your values:

```bash
cp .env.template .env
# Edit .env with your actual values
```

Or create a `.env` file manually with:

```bash
PRIVATE_KEY=your_testnet_private_key
ETH_RPC_URL=https://sepolia.arbitrum.io/rpc
WALLET_ADDRESS=your_wallet_address
PYUSD_ADDRESS=<contract-address-when-available>
```

> 🧐 **Another Security Note:** See how we put the private key in a `.env` file like that? Don't do that in production or with mainnet. Use a more secure approach like a [keystore with secret](https://getfoundry.sh/cast/reference/cast-wallet-import/), [hardware wallet](https://getfoundry.sh/reference/common/multi-wallet-options-hardware), or a secrets manager.

### 4. Get Arbitrum testnet ETH + PYUSD

- Arbitrum Sepolia ETH: 
    - https://arbitrum.faucet.dev/ArbSepolia

- PYUSD on Arbitrum Sepolia:
    - https://faucet.paxos.com/
    - https://cloud.google.com/application/web3/faucet


