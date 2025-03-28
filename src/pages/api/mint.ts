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

    // Get the button that was clicked (1 = LIKE, 2 = RECAST, 3 = MINT)
    const buttonIndex = req.body?.untrustedData?.buttonIndex;

    let nextImage = "https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy";
    let nextText = "Like and recast to mint NFT";

    if (buttonIndex === 1) {
      // LIKE was clicked
      nextText = "Thanks for the LIKE! Just Recast and then mint your Satoshe Slugger";
      nextImage = "https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy";
    } else if (buttonIndex === 2) {
      // RECAST was clicked
      nextText = "Thanks for the RECAST! Ready to MINT?";
      nextImage = "https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy";
    } else if (buttonIndex === 3) {
      // MINT was clicked
      nextText = "Starting mint process... (coming soon)";
      nextImage = "https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreiepqz6d3f5oqbhcpqwkrg3k5n5kovvyhfnrqzxvyqfbsln4vqpzdy";
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
          <meta property="fc:frame:button:1" content="LIKE" />
          <meta property="fc:frame:button:2" content="RECAST" />
          <meta property="fc:frame:button:3" content="MINT (0.00777 ETH)" />
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