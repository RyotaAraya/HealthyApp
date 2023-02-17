import Head from "next/head"
import MyRecordTemplate from "@/components/Templates/MyRecordTemplate"

export default function MyRecord() {
    return (
        <>
            <Head>
                <title>My Record</title>
            </Head>
            <main>
                <MyRecordTemplate />
            </main>
        </>
    )
}
