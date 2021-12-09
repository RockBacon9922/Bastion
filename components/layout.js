import Navbar from './navbar'
import Footer from './footer'
import Head from './head'

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      {/* Below gives a gap so that the footer doesn't end up moshed into the navbar👍 */}
      <div className="h-14"/>
      <main>{children}</main>
      <Footer />
    </>
  )
}