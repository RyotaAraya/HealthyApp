import Head from "next/head"
import MyRecordTemplate from "@/components/Templates/MyRecordTemplate"

export default function Record() {
    return (
        <>
            <Head>
                <title>Record</title>
            </Head>
            <main>
                <MyRecordTemplate />
            </main>
        </>
    )
}
