export const candyMachineAddress = "0x050fcb7dca749c4f695b2b5a270c2f8b0bcdd15a4039b9e5dfa0802d02edc4eb";
export const collectionName = "Aptos-MummyApe"; // Case sensitive!
export const collectionCoverUrl = "https://cloudflare-ipfs.com/ipfs/QmdVACsmYfhGXQAfkv9CT5kewsLgssSvKhs1LfYFcg8VNe";
export const mode = "dev"; // "dev" or "test" or "mainnet"

export let NODE_URL;
export const CONTRACT_ADDRESS = "0xf7b81362cb099f5f48df721dd2db9bd2c1832b31394540101acdb91e1d7b4d4a";
export const COLLECTION_SIZE = 100
let FAUCET_URL;
if (mode == "dev") {
    NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.devnet.aptoslabs.com";
} else if (mode === "test") {
    NODE_URL = "https://fullnode.testnet.aptoslabs.com/v1";
    FAUCET_URL = "https://faucet.testnet.aptoslabs.com";
} else {
    NODE_URL = "https://fullnode.mainnet.aptoslabs.com/v1";
    FAUCET_URL = null;
}
