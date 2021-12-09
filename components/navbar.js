import { useRouter } from "next/router"
import { useEffect } from "react"

export default () => {
    const routeTo = useRouter().push
    const router = useRouter()
    useEffect(() => {
        router.prefetch("/")
    })

    return <navbar className="h-14 flex gap-7 shadow-md fixed w-full z-50 text-xl bg-white">
        <img quality={5} layout="responsive" src="/Logo.svg" alt="Bastion logo" className="hover:bg-gray-100" onClick={() => routeTo("/")} onKeyPress={() => routeTo("/")}/>
        <ROCK txt="Coasters" route="/Coasters"/>
        <ROCK txt="Tea Lights" route="/TeaLights"/>
    </navbar>
}

const ROCK = function(props){
    function routeTo() {
        router.push(props.route)
        }
    const router = useRouter()
    useEffect(() => {
        router.prefetch(props.route)
    })
    return <div className="flex p-4 hover:bg-gray-100">
        <button onClick={routeTo} onKeyPress={routeTo} className="text-center self-center navButton" alt={props.txt}>{props.txt}</button>
    </div>
}