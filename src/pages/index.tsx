import Head from "next/head"
import MyPageTemplate from "@/components/Templates/MyPageTemplate"

export default function Home() {
    return (
        <>
            <Head>
                <title>Top</title>
            </Head>
            <main>
                <MyPageTemplate />
            </main>
        </>
    )
}
