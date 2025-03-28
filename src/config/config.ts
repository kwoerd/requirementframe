export const config = {
  contractAddress: process.env.NEXT_PUBLIC_SMART_CONTRACT || "0x18f98DeeC72FA4EEa424a1E9F32dfFc83e4E0641",
  chainId: Number(process.env.NEXT_PUBLIC_CHAIN_ID) || 324, // zkSync Era mainnet
  thirdweb: {
    engine: {
      url: process.env.THIRDWEB_ENGINE_URL,
      wallet: process.env.THIRDWEB_ENGINE_WALLET,
      accessToken: process.env.THIRDWEB_ACCESS_TOKEN,
    },
  },
}; 