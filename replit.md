# StratoFi - DeFi Platform

## Overview

StratoFi is a decentralized finance (DeFi) platform built on a modern full-stack architecture. It provides high-yield passive income opportunities through multi-chain lending and borrowing of cryptocurrencies including SOL, ETH, BTC, and USDC. The platform offers a sleek, dark-themed interface with real-time data integration and cross-chain compatibility.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds
- **Animations**: Framer Motion for smooth UI transitions

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon Database)
- **API Design**: RESTful API with JSON responses

### Project Structure
The application follows a monorepo structure with clearly separated concerns:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Common TypeScript schemas and types
- `migrations/` - Database migration files

## Key Components

### Database Schema
The platform uses three main database tables:
- **Users**: Stores wallet addresses, networks, and balances
- **Vaults**: Contains vault information including APY rates, TVL, and liquidity
- **Transactions**: Records all lending/borrowing transactions with status tracking

### API Endpoints
- `GET /api/vaults` - Fetch vault data with real-time APY rates
- `GET /api/stats` - Platform statistics and metrics
- `GET /api/health` - Health check endpoint

### UI Components
- **Navigation**: Responsive header with wallet connection
- **Hero Section**: Main landing area with platform statistics
- **Vault Yields**: Real-time APY display for different cryptocurrencies
- **How It Works**: Step-by-step process explanation
- **CTA Section**: Call-to-action for user engagement

## Data Flow

1. **Client Request**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js server handles requests and processes business logic
3. **External APIs**: Server fetches real-time data from blockchain APIs (Alchemy, Etherscan)
4. **Database Operations**: Drizzle ORM manages database interactions
5. **Response**: JSON data sent back to client and cached by TanStack Query

## External Dependencies

### Blockchain Integration
- **Alchemy API**: Multi-chain blockchain data provider
- **Etherscan API**: Ethereum network analytics
- **OpenSea API**: NFT and token metadata
- **CoinGecko API**: Cryptocurrency pricing data

### UI/UX Libraries
- **Radix UI**: Accessible component primitives
- **Lucide Icons**: Modern icon library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

### Development Tools
- **Vite**: Fast build tool with HMR
- **TypeScript**: Type safety and developer experience
- **ESLint**: Code linting and formatting
- **PostCSS**: CSS processing

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20
- **Database**: PostgreSQL 16
- **Development Server**: Vite dev server with HMR
- **Port Configuration**: Frontend on port 5000, backend integrated

### Production Build
- **Frontend**: Vite builds static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations handle schema updates
- **Deployment**: Configured for Replit autoscale deployment

### Environment Variables
- Database connection via `DATABASE_URL`
- API keys for external services (Alchemy, Etherscan, OpenSea)
- Network-specific RPC endpoints

## Changelog

Changelog:
- June 26, 2025. Initial setup
- June 26, 2025. Mainnet-ready deployment with production API keys
  - Fixed critical "Failed to fetch" errors by implementing server-side API proxy
  - Resolved logo visibility issues with proper branding
  - Added comprehensive documentation page for deployment safety
  - Integrated authentic crypto icons throughout platform
  - Implemented wallet connection auto-detection for MetaMask and Phantom
  - Added TypeScript declarations for wallet extensions
  - Configured rate limiting and fallback mechanisms for all APIs
  - Added current market prices for all supported cryptocurrencies
- June 26, 2025. Major StratoFi DApp Enhancement Implementation
  - Enhanced documentation page with detailed DeFi explanations (lending, borrowing, LPs, vaults, security, performance)
  - Removed cookie policies, privacy policy, and terms and conditions from footer
  - Implemented real wallet integration with specified addresses:
    - Ethereum: 0x942c3bC5B0ee8d5843D3394500291f7B4b4679e8
    - Solana: 7cLkstoxV1YmfNVN8KJQgYYT7bBL7QH8d4zFKa1kBwHs
  - Added real funding functionality to liquidity pools and vault pages
  - Enhanced homepage with animated token background (SOL, ETH, BTC, USDC, etc.)
  - Integrated user's StratoFi logo throughout the application
  - Added comprehensive funding modal system with wallet address display
  - Implemented "Add Funds" buttons across all pools and vaults
  - Enhanced animations and visual effects on homepage
  - Updated documentation with performance metrics and speed information
  - Added detailed borrowing/lending features and risk management details

## User Preferences

Preferred communication style: Simple, everyday language.