import router from "next/router"
import { useEffect } from "react"
export default () => {
    useEffect(() => {
        router.prefetch("/teaLights.png")
    })
    return <main>

        <div className="flex flex-col m-4">
            <div className="flex flex-col md:flex-row justify-center pt-4 gap-10">
                <img src="/teaLights.png" alt="Tea Lights made from natural materials" loading="eager" className="object-contain w-full h-1/2 md:h-auto md:w-2/4 fade-in"/>
                <article className="w-1/3 text-center self-center">
                    <h1 className="text-3xl">Tea Lights</h1>
                    <br/>
                    <h2>Our Tea lights at bastion are made out of the finest materials</h2>
                </article>
            </div>
        </div>
    </main>
}