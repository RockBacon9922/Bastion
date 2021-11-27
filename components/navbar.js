import { useRouter } from "next/dist/client/router"

export default () => {
    const routeTo = useRouter().push

    return <navbar className="h-14 flex gap-7 shadow-md fixed w-full z-50 bg-white">
        <img quality={5} layout="responsive" src="/Logo.svg" alt="Bastion logo" onClick={() => routeTo("/")} onKeyPress={() => routeTo("/")}/>
        <ROCK txt="Coasters" route="/Coasters"/>
        <ROCK txt="Tea Lights" route="/TeaLights"/>
    </navbar>
}

const ROCK = function(props){
    function toRoute() {
        router.push(props.route)
        }
    const router = useRouter()
    return <div className="flex p-4">
        <div role="button" onClick={toRoute} onKeyPress={toRoute} className="text-center self-center" alt={props.txt}>{props.txt}</div>
    </div>
}