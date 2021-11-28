import { useRouter } from "next/dist/client/router"

export default () => {

    const router = useRouter()
    function togithub() {
    router.push("https://github.com/rockbacon9922")
    }
    function mailToUs() {
      window.open("mailto:Bastion@bethanyschool.org.uk")
    }

    return   <footer className="flex items-center justify-center w-full h-24 border-t flex-col text-center">
    <p>
    A Young Enterprise Company
    </p>
    <p onClick={mailToUs} onKeyPress={mailToUs}>
      Bastion@bethanyschool.org.uk
    </p>
  </footer>
}