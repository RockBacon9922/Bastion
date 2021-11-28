import Image from "next/image";

export default () => {

  return (
    <main className="flex flex-col">
        <Image quality={5} loading="eager" layout="intrinsic" width={3487} height={2621} src="/Logo.svg" alt="Bastion logo" className="slide-in-and-rotate" />
    </main>
  )
}