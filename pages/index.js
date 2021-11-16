import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bastion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img src="/Logo.png" layout="fixed"></img>
        <h1 className="text-6xl md:text-9xl lg:text-{900px}">Bastion</h1>
        <br/>
        <br />

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
        >
          Under Construction by RockBacon
        </a>
      </footer>
    </div>
  )
}
