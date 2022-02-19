import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 px-20 w-full">
        <Image quality={5} layout="intrinsic" width={3487} height={2621} src="/Logo.jpg" alt="Bastion logo" />
        <h1 className="text-6xl md:text-9xl lg:text-{900px}">BASTION</h1>
        <br/>
        <br/>
    </div>
  )
}