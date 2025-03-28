export const config = {
  contractAddress: "0x18f98DeeC72FA4EEa424a1E9F32dfFc83e4E0641",
  chainId: 324, // zkSync Era mainnet
  network: "zksync-era",
  thirdweb: {
    engine: {
      url: process.env.THIRDWEB_ENGINE_URL,
      wallet: process.env.THIRDWEB_ENGINE_WALLET,
      accessToken: process.env.THIRDWEB_ACCESS_TOKEN,
    },
  },
}; 