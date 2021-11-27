import Navbar from './navbar'
import Footer from './footer'
import Head from './Head'

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      <div className="h-14"/>
      <main>{children}</main>
      <Footer />
    </>
  )
}