import Head from "next/head"
export default () => {

  return (
    <main className="flex flex-col">
      <Head>
      <link rel="preload" as="image" href="/AllProducts.jpg"/>
      </Head>
      {/* <img loading="eager" src="/AllProducts.jpg" className="md:w-full h-full fade-in mb-1" alt="Wooden products by Bastion"/> */}
      <div className="bg-AllProducts bg-cover w-full min-h-screen flex flex-col z-10 text-center">
        <div className="fade-in flex flex-col justify-center self-center w-2/3 border-2 bg-white border-black m-20 pb-10">
          <img loading="eager" src="/Logo.svg" alt="Bastion logo" className="z-40"/>
          <h1 className="font-GreatVibes text-6xl h-[2.25rem] md:text-5xl md:h-[7rem] lg:text-[10rem] lg:h-[10rem]">BASTION</h1>
        </div>
      </div>
    </main>
  )
}