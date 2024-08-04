import * as _raydium_io_raydium_sdk from '@raydium-io/raydium-sdk';
import { GetStructureSchema, LiquidityPoolKeys, LiquidityStateV4 } from '@raydium-io/raydium-sdk';
import { PublicKey, KeyedAccountInfo } from '@solana/web3.js';

type MinimalMarketStateLayoutV3 = typeof MINIMAL_MARKET_STATE_LAYOUT_V3;
type MinimalMarketLayoutV3 = GetStructureSchema<MinimalMarketStateLayoutV3>;
declare const MINIMAL_MARKET_STATE_LAYOUT_V3: _raydium_io_raydium_sdk.Structure<PublicKey, "", {
    eventQueue: PublicKey;
    bids: PublicKey;
    asks: PublicKey;
}>;

type MinimalTokenAccountData = {
    mint: PublicKey;
    address: PublicKey;
    buyValue?: number;
    poolKeys?: LiquidityPoolKeys;
    market?: MinimalMarketLayoutV3;
};
declare function processRaydiumPool(id: PublicKey, poolState: LiquidityStateV4): Promise<void>;
declare function checkMintable(vault: PublicKey): Promise<boolean | undefined>;
declare function processOpenBookMarket(updatedAccountInfo: KeyedAccountInfo): Promise<void>;

export { type MinimalTokenAccountData, checkMintable, processOpenBookMarket, processRaydiumPool };
