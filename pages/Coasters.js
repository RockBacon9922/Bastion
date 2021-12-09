export default () => {

    return <main>
        <link rel="preload" as="image" href="/coasters.jpg"/>
        <div className="flex flex-col m-4">
            <div className="flex flex-col md:flex-row justify-center pt-4 gap-10">
                <img src="/coasters.jpg" alt="Coasters made from natural materials" loading="eager" className="object-contain w-full h-1/2 md:h-auto md:w-2/4 fade-in"/>
                <article className="w-full md:w-1/3 text-center self-center">
                    <h1 className="text-3xl">Coasters</h1>
                    <br/>
                    <h2>
                    Made out of Ash or Birch.
                    Come in singles or Deluxe edition which comprises of 2 tea lights with scented candles.
                    Finished with tung which is obtained by pressing the seed from the nut of the tung tree.
                    Natural so is not flammable.
                    Water resistant. hand made. High quality.
                    </h2>
                </article>
            </div>
        </div>
    </main>
}