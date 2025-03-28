import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // Log the request data for debugging
    console.log('Request body:', req.body);
    console.log('Button index:', req.body?.untrustedData?.buttonIndex);

    // Get the button that was clicked (1 = LIKE, 2 = MINT)
    const buttonIndex = req.body?.untrustedData?.buttonIndex;

    // Use ipfs.io gateway for better reliability
    const initialImage = "https://ipfs.io/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy";
    const mintedImage = "https://ipfs.io/ipfs/bafkreiepqz6d3f5oqbhcpqwkrg3k5n5kovvyhfnrqzxvyqfbsln4vqpzdy";
    
    let nextImage = initialImage;
    let nextText = "Like and recast to mint NFT";
    let showMintButton = true;
    let hasLiked = false;

    if (buttonIndex === 1) {
      // LIKE was clicked
      nextText = "Thanks for the LIKE! Now you can mint your Satoshe Slugger";
      nextImage = initialImage;
      hasLiked = true;
    } else if (buttonIndex === 2) {
      // MINT was clicked - Show confirmation with actual NFT image
      nextText = "🎉 Congratulations! Your Satoshe Slugger has been minted! View on OpenSea";
      nextImage = mintedImage;
      showMintButton = false; // Hide mint button after successful mint
    }

    const frameResponse = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>${nextText}</title>
          <meta property="og:title" content="${nextText}" />
          <meta property="og:image" content="${nextImage}" />
          <meta property="fc:frame" content="vNext" />
          <meta property="fc:frame:image" content="${nextImage}" />
          <meta property="fc:frame:post_url" content="https://requirementframe-git-main-retinal-delights.vercel.app/api/mint" />
          ${showMintButton ? `
          <meta property="fc:frame:button:1" content="${hasLiked ? '❤️' : 'LIKE'}" />
          <meta property="fc:frame:button:2" content="MINT (0.00777 ETH)" />
          ` : `
          <meta property="fc:frame:button:1" content="View on OpenSea" />
          <meta property="fc:frame:button:1:action" content="link" />
          <meta property="fc:frame:button:1:target" content="https://opensea.io/collection/satoshe-slugger-zksync" />
          `}
        </head>
        <body>
          <p>${nextText}</p>
        </body>
      </html>
    `;

    return res.status(200).send(frameResponse);
  } catch (err) {
    console.error('Error:', err);
    return res.status(500).send({ error: "Something went wrong" });
  }
} 