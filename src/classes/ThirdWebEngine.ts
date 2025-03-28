import { config } from "@/config/config";

export class ThirdWebEngine {
  public static async mint(receiver: string) {
    try {
      // Ensure we're using zkSync Era mainnet
      const chainId = 324; // zkSync Era mainnet
      const contractAddress = "0x18f98DeeC72FA4EEa424a1E9F32dfFc83e4E0641";

      const response = await fetch(
        `${config.thirdweb.engine.url}/contract/${chainId}/${contractAddress}/erc721/claim-to`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${config.thirdweb.engine.accessToken}`,
            "x-backend-wallet-address": config.thirdweb.engine.wallet!,
          },
          body: JSON.stringify({
            receiver: receiver.toLowerCase(),
            quantity: "1",
            chainId: chainId,
            network: "zksync-era",
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Minting error response:', errorText);
        throw new Error(`Minting failed: ${response.statusText}`);
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Minting error:", error);
      throw error;
    }
  }
} 