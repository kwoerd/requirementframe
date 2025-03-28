import { config } from "@/config/config";

export class ThirdWebEngine {
  public static async mint(receiver: string) {
    try {
      const response = await fetch(
        `${config.thirdweb.engine.url}/contract/${config.chainId}/${config.contractAddress}/erc721/claim-to`,
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
          }),
        }
      );

      if (!response.ok) {
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