import { createPublicClient, http, formatUnits } from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import { config } from 'dotenv';
import { resolve } from 'path';
import { program } from '@commander-js/extra-typings';

// TODO: Add proper error handling and validation

config({ path: resolve('.env') });

const PYUSD_ADDRESS = process.env.PYUSD_ADDRESS as `0x${string}`;

if (!PYUSD_ADDRESS) {
  console.error('Error: PYUSD_ADDRESS not set in .env file');
  process.exit(1);
}

const ERC20_ABI = [
  {
    name: 'balanceOf',
    type: 'function',
    stateMutability: 'view',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
  },
] as const;

program
  .argument('[address]', 'Address to check balance for (defaults to WALLET_ADDRESS from .env)')
  .parse();

const [address] = program.args;
const targetAddress = address || process.env.WALLET_ADDRESS;

async function checkBalance() {
  const client = createPublicClient({
    chain: arbitrumSepolia,
    transport: http(process.env.ETH_RPC_URL),
  });

  console.log(`Checking PYUSD balance for: ${targetAddress}`);

  const balance = await client.readContract({
    address: PYUSD_ADDRESS,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [targetAddress as `0x${string}`],
  });

  console.log(`Raw balance: ${balance.toString()}`);
  console.log(`Formatted balance: ${formatUnits(balance, 6)} PYUSD`);
}

checkBalance().catch(console.error);