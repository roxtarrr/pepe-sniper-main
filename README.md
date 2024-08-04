# Pepe Sniper v1.0.0

Pepe Sniper is a trading bot developed by @roxtar_xbt. It automatically snipes new liquidity pools and performs trading actions based on the specified configuration.

## Features

- Connects to the Solana blockchain.
- Snipes new liquidity pools.
- Automatically buys and sells tokens based on predefined conditions.
- Supports authentication with unique keys.
- Configurable via environment variables.

## Wallet 
1. Create a new Solana wallet
2. Transfer some SOL to this new wallet
3. Convert some SOL to USDC or WSOL (you need USDC or WSOL depending on the configuration in .env file)

## Prerequisites

- Node.js
- npm

## Installation

1. Clone the repository:
   
 - ```git clone https://github.com/your-repo/pepe-sniper.git```
 - ```cd pepe-sniper```
  
2. Install the dependencies:

- ```npm install```

3. Build the project:

- ```npm run build```

## Configuration

Edit the .env file with your preferred text editor and set the required environment variables. Here is an example configuration:

1. Authentication Key
AUTH_KEY=your_auth_key_here  (write @roxtar_xbt for a key)

2. Wallet Private Key (Base58 encoded)
MY_PRIVATE_KEY=your_private_key_here

3. Solana RPC Endpoint
RPC_ENDPOINT=https://mainnet.helius-rpc.com/?api-key=your_rpc_api_key_here

4. Solana WebSocket Endpoint
RPC_WEBSOCKET=wss://mainnet.helius-rpc.com/?api-key=your_rpc_api_key_here

5. Token Symbol to Trade
TOKEN_SYMB=WSOL

6. Pool Size Constraints
MIN_POOL_SIZE=2
MAX_POOL_SIZE=100

7. Buy Amount
BUY_AMOUNT=0.0012

8. Commitment Level
COMMITMENT_LEVEL=finalized

9. Snipe List Configuration
USE_SNIPEDLIST=false
SNIPE_LIST_REFRESH_INTERVAL=30000

10. Mint Renouncement Check
MINT_IS_RENOUNCED=true

11. Auto Sell Configuration
AUTO_SELL=true
AUTO_SELL_DELAY=20000
MAX_SELL_RETRIES=5

12. Profit and Loss Settings
TAKE_PROFIT=80
STOP_LOSS=30

13. BirdEye API Key
BIRDEYE_APIKEY=your_birdeye_apikey_here

14. Log Level
LOG_LEVEL=debug

15. Enable Buy
ENABLE_BUY=true

## Running the Bot

```npm run ssb```

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Disclaimer
Use this software at your own risk. The developers are not responsible for any losses or damages incurred as a result of using this software.

Created by @roxtar_xbt