import Navbar from './navbar'
import Footer from './footer'
import Head from './Head'

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}