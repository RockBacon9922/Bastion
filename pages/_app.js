import 'tailwindcss/tailwind.css'
import Head from "next/head"
import { useRouter } from 'next/dist/client/router'


function MyApp({ Component, pageProps }) {
  const router = useRouter()
  function togithub() {
    router.push("https://github.com/rockbacon9922")
  }

  return (<>
    <Head>

      <title>Bastion A Young Enterprise Company</title>
      <link rel="icon" href="/Logo.ico" />

    </Head>
  <Component {...pageProps} />
  <footer className="flex items-center justify-center w-full h-24 border-t flex-col text-center">
        <p onClick={togithub} onKeyPress={togithub}className="hover:text-gray-500">
          A RockBacon Website
        </p>
        <p>
        A Young Enterprise Company
        </p>
      </footer>
    </>)
}

export default MyApp
