import type { Principal } from '@dfinity/principal';
export interface NFT {
  'geCanisterId' : () => Promise<Principal>,
  'getAsset' : () => Promise<Array<number>>,
  'getName' : () => Promise<string>,
  'getOwner' : () => Promise<Principal>,
}
export interface _SERVICE extends NFT {}
