export default () => {

    function ToProduct() {
        window.open("https://www.ye-tradingstation.org.uk/product/singular-coaster?v=1174")
    }

    return <main>
        <link rel="preload" as="image" href="/Coasters.jpg"/>
        <div className="flex flex-col m-4">
            <div className="flex flex-col md:flex-row justify-center pt-4 gap-10">
                <img src="/Coasters.jpg" alt="Coasters made from natural materials" loading="eager" className="object-contain w-full h-1/2 md:h-auto md:w-2/4 fade-in"/>
                <article className="w-full md:w-1/3 text-center self-center">
                    <h1 className="text-3xl">Coasters</h1>
                    <br/>
                    <h2>
                    Hand made out of high quality Ash or Birch.
                    Beautifully finished with tung oil (sometimes known as china wood oil)
                    which is obtained by pressing the seed from the nut of the tung tree.
                    The natural finish gives it inflammable and water resistant properties.
                    </h2>
                    <br />
                    <button className="border-2 border-black pl-2 pr-2 p-2" onClick={ToProduct}>Purchase Here!</button>
                </article>
            </div>
        </div>
    </main>
}