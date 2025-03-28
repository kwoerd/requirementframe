import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Like and recast to mint NFT</title>
        <meta name="description" content="Like and recast to mint NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/baseball_icon_32x32.png" />
        <meta property="og:title" content="Like and recast to mint NFT" />
        <meta property="og:image" content="https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="https://coffee-occasional-ermine-151.mypinata.cloud/ipfs/bafkreia3fjjd5t24fllbrruu3dxc6n4pwjcjzg45oyv7jboyhleufrzksy" />
        <meta property="fc:frame:post_url" content="https://requirementframe-9yqt0d824-retinal-delights.vercel.app/api/mint" />
        <meta property="fc:frame:button:1" content="LIKE" />
        <meta property="fc:frame:button:2" content="RECAST" />
        <meta property="fc:frame:button:3" content="MINT (0.00777 ETH)" />
      </Head>
      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h1>Like and recast to mint NFT</h1>
        <p>View this page on Farcaster to interact with the frame</p>
      </main>
    </>
  );
}
