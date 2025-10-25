# b402 Bullish Hub

A Base Mini App for the b402 token community featuring sentiment frames, in-frame token swaps, leaderboards, and exclusive holder content.

## Features

- **Bullish Sentiment Frames**: Create and share customizable Farcaster Frames
- **In-Frame Token Swap**: Seamlessly swap tokens for b402 within Farcaster
- **Token Holder Leaderboard**: Track top holders and community contributors
- **Holder-Gated Content**: Exclusive features for verified b402 token holders

## Tech Stack

- Next.js 15 with App Router
- React 19
- TypeScript
- Tailwind CSS
- OnchainKit (Coinbase)
- Farcaster MiniKit
- Base (L2)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.local.example .env.local
```

3. Add your API keys to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Deployment

Deploy to Vercel:

```bash
vercel
```

## Manifest

The Farcaster manifest is located at `public/.well-known/farcaster.json`

## License

MIT
