import { useRouter } from "next/dist/client/router"

export default () => {

    const router = useRouter()
    function togithub() {
    router.push("https://github.com/rockbacon9922")
    }

    return   <footer className="flex items-center justify-center w-full h-24 border-t flex-col text-center">
    <p onClick={togithub} onKeyPress={togithub}className="hover:text-gray-500">
      A RockBacon Website
    </p>
    <p>
    A Young Enterprise Company
    </p>
  </footer>
}