import { Router } from "next/dist/client/router";
import Head from "next/head";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter()
  function togithub() {
    router.push("https://github.com/rockbacon9922")
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Bastion</title>
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <img src="/Logo.png" alt="Bastion logo" layout="fixed"></img>
        <h1 className="text-6xl md:text-9xl lg:text-{900px}">BASTION</h1>
        <br/>
        <br/>

      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div
          className="flex flex-col items-center justify-center text-center"
        >
          <p onClick={togithub} onKeyPress={togithub}className="hover:text-gray-500">A RockBacon Website</p>
        <p>
        A Young Enterprise Company
        </p>
        </div>
      </footer>
    </div>
  )
}
