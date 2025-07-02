import { createWalletClient, http, parseUnits } from 'viem';
import { arbitrumSepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
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
    name: 'transfer',
    type: 'function',
    stateMutability: 'nonpayable',
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    outputs: [{ name: '', type: 'bool' }],
  },
] as const;

program
  .argument('<recipient>', 'Recipient address')
  .argument('<amount>', 'Amount in PYUSD')
  .parse();

const [recipient, amount] = program.args;

async function sendPYUSD() {
  const account = privateKeyToAccount(process.env.PRIVATE_KEY as `0x${string}`);

  const walletClient = createWalletClient({
    account,
    chain: arbitrumSepolia,
    transport: http(process.env.ETH_RPC_URL),
  });

  console.log(`Sending ${amount} PYUSD from ${account.address} to ${recipient}`);

  const hash = await walletClient.writeContract({
    address: PYUSD_ADDRESS,
    abi: ERC20_ABI,
    functionName: 'transfer',
    args: [recipient as `0x${string}`, parseUnits(amount, 6)],
  });

  console.log(`Transaction hash: ${hash}`);
}

sendPYUSD().catch(console.error);