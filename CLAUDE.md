# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Scaffold-Lisk is a fork of Scaffold-ETH2 with minimal differences, providing additional dApp examples, native support for Superchain testnets, and Lisk-specific configurations. It's a full-stack toolkit for building decentralized applications on Ethereum/Lisk using NextJS, RainbowKit, Hardhat, Wagmi, Viem, and TypeScript.

## Architecture

This is a monorepo with yarn workspaces containing two main packages:

- **packages/hardhat**: Smart contract development environment with Hardhat, deployment scripts, and tests
- **packages/nextjs**: Frontend React application with Web3 integration

## Common Development Commands

### Initial Setup
```bash
yarn install          # Install all dependencies
```

### Local Development
```bash
yarn chain            # Start local Hardhat network (terminal 1)
yarn deploy           # Deploy contracts to local network (terminal 2)
yarn start            # Start NextJS development server (terminal 2)
```

### Smart Contract Development
```bash
yarn compile          # Compile smart contracts
yarn hardhat:test     # Run smart contract tests
yarn test             # Alias for hardhat:test
yarn generate         # Generate new account
yarn account          # List accounts
```

### Frontend Development
```bash
yarn next:build       # Build NextJS application
yarn next:check-types # TypeScript type checking
yarn next:lint        # Lint NextJS code
yarn next:format      # Format NextJS code
```

### Code Quality
```bash
yarn format           # Format all code (both packages)
yarn hardhat:lint     # Lint Hardhat package
yarn next:lint        # Lint NextJS package
```

### Deployment
```bash
yarn deploy --network-options    # Interactive network selection for deployment
yarn deploy --network <name>     # Deploy to specific network
yarn verify                      # Verify contracts on Etherscan
```

## Key Configuration Files

- `packages/nextjs/scaffold.config.ts`: Frontend configuration including target networks, API keys, and wallet settings
- `packages/hardhat/hardhat.config.ts`: Hardhat configuration with network settings
- `packages/hardhat/deploy/`: Contract deployment scripts
- `packages/hardhat/contracts/`: Smart contract source files

## Network Configuration

The project supports both local development and Superchain testnet deployments. Target networks are configured in `scaffold.config.ts` and include Hardhat local network and Lisk Sepolia by default.

## Testing

Smart contract tests are located in `packages/hardhat/test/` and use Mocha/Chai with Hardhat testing utilities. Use `yarn hardhat:test` to run all tests.

## Environment Variables

For testnet deployment, copy `packages/hardhat/.env.example` to `packages/hardhat/.env` and set:
- `DEPLOYER_PRIVATE_KEY`: Private key with testnet ETH for contract deployment