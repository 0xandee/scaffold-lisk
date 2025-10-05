import { defineChain } from "thirdweb";
import { Chain } from "viem";

/**
 * Lisk Sepolia chain definition for wagmi/viem
 */
export const liskSepolia: Chain = {
  id: 4202,
  name: "Lisk Sepolia",
  network: "lisk-sepolia",
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
    public: {
      http: ["https://rpc.sepolia-api.lisk.com"],
    },
  },
  blockExplorers: {
    default: {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
  },
  // Explicitly set contracts to empty object to prevent ENS resolution attempts
  // Lisk Sepolia does not have ENS infrastructure deployed
  contracts: {},
  testnet: true,
};

/**
 * Lisk Sepolia chain definition for thirdweb (used in gasless transactions)
 */
export const liskSepoliaThirdweb = defineChain({
  id: 4202,
  name: "Lisk Sepolia",
  nativeCurrency: {
    name: "Sepolia Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpc: "https://rpc.sepolia-api.lisk.com",
  blockExplorers: [
    {
      name: "Blockscout",
      url: "https://sepolia-blockscout.lisk.com",
    },
  ],
  testnet: true,
});
