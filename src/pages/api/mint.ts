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

  const frameResponse = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Like and recast to mint NFT</title>
        <meta property="og:title" content="Like and recast to mint NFT" />
        <meta property="og:image" content="https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy" />
        <meta property="fc:frame:post_url" content="https://requirementframe-git-main-retinal-delights.vercel.app/api/mint" />
        <meta property="fc:frame:button:1" content="LIKE" />
        <meta property="fc:frame:button:2" content="RECAST" />
        <meta property="fc:frame:button:3" content="MINT (0.00777 ETH)" />
      </head>
      <body>
        <p>Like and recast to mint NFT</p>
      </body>
    </html>
  `;

  try {
    return res.status(200).send(frameResponse);
  } catch (err) {
    return res.status(500).send({ error: "Something went wrong" });
  }
} 