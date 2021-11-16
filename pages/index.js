import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bastion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img src="/Logo.png" alt="Bastion logo" layout="fixed"></img>
        <h1 className="text-6xl md:text-9xl lg:text-{900px}">BASTION</h1>
        <br/>
        <br />

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p
          className="flex items-center justify-center text-center"
        >
          Under Construction by RockBacon <br /> A Young Enterprise Company
        </p>
        <br />
      </footer>
    </div>
  )
}
