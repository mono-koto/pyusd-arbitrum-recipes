# PYUSD Arbitrum Recipes

Quick, runnable examples for working with PYUSD on Arbitrum using Foundry and TypeScript.

These scripts are meant to help developers test basic PYUSD flows like checking balances and sending tokens on Arbitrum. Each script is standalone and assumes you're working with a dev wallet and testnet funds.

## PYUSD Contract Addresses

| Network | Contract Address | Status |
|---------|------------------|---------|
| Arbitrum One (Mainnet) | `0x46850aD61C2B7d64d08c9C754F45254596696984` | Coming Soon |
| Arbitrum Sepolia (Testnet) | `0x637A1259C6afd7E3AdF63993cA7E58BB438aB1B` | Coming Soon |

> **Note:** These recipes currently target Arbitrum Sepolia testnet. Mainnet support will be added when PYUSD is deployed to Arbitrum One.

## Quick Start

### 1. Clone and Setup

```bash
git clone https://github.com/mono-koto/pyusd-recipes.git
cd pyusd-recipes
npm install
```

### 2. Create Environment File

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

### 3. Get Arbitrum Testnet Funds

- **Arbitrum Sepolia ETH:** https://arbitrum.faucet.dev/ArbSepolia

- **PYUSD on Arbitrum Sepolia:** 
    - https://faucet.paxos.com/
    - https://cloud.google.com/application/web3/faucet


## Recipe Collections

### 🔧 [Shell Recipes](./shell-recipes/)
Shell scripts using Foundry's `cast` command-line tool for Arbitrum interactions. Perfect for quick command-line interactions and shell scripting.

- [`check_balance.sh`](./shell-recipes/check_balance.sh) - Check PYUSD balance on Arbitrum
- [`send_pyusd.sh`](./shell-recipes/send_pyusd.sh) - Send PYUSD tokens on Arbitrum

### 📝 [TypeScript Recipes](./ts-recipes/)
TypeScript scripts using the modern `viem` library for Arbitrum interactions. Ideal for programmatic integration and type-safe development.

- [`checkBalance.ts`](./ts-recipes/checkBalance.ts) - Check PYUSD balance on Arbitrum with TypeScript
- [`sendToPaypal.ts`](./ts-recipes/sendToPaypal.ts) - Send PYUSD on Arbitrum with full type safety

## Current Configuration

- **Network:** Arbitrum Sepolia Testnet
- **PYUSD Address:** `<testnet-address-here>`
- **Decimals:** 6 (1 PYUSD = 1,000,000 raw units)
- **RPC URL:** `https://sepolia.arbitrum.io/rpc`

## Prerequisites

- [Node.js](https://nodejs.org/) (v18+) for TypeScript recipes
- [Foundry](https://book.getfoundry.sh/getting-started/installation) for cast recipes

## Creating a Dev Wallet

Generate a new testnet wallet with Foundry:

```bash
cast wallet new
```

Or create a vanity address:

```bash
cast wallet vanity --starts-with f00
```

> **Security Note:** These examples are for testnet only. Never use real funds or production keys.

## Notes

- All scripts automatically load configuration from the root `.env` file
- Amounts are specified in PYUSD (human-readable format)
- Scripts handle decimal conversion automatically
- For production use, consider hardware wallets or encrypted keystores

## License

MIT
