import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import "../components/index.css"

function MyApp({ Component, pageProps }) {

  return (<>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </>)
}

export default MyApp
