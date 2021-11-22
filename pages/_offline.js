import Head from "next/head"

export default function offline() {

    return (<>
    <Head>
        <title>Bastion: You are offline</title>
    </Head>
    <div className="flex flex-col min-h-screen items-center justify-center text-center">
        <h1 className="text-6xl md:text-9xl lg:text-{900px}">You Are Offline</h1>
        <h2 className="text-4xl md:text-6xl lg:text-{750px}">Please Reconnect</h2>
    </div>
    </>)


}