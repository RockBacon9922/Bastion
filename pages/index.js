import Head from "next/head";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bastion</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <Image layout="intrinsic" width={3487} height={2621} src="/Logo.png" alt="Bastion logo"/>
        <h1 className="text-6xl md:text-9xl lg:text-{900px}">BASTION</h1>
        <br/>
        <br/>

      </main>
    </div>
  )
}
