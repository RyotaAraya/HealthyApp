import Head from "next/head"
import RecordTemplate from "@/components/Templates/RecordTemplate"

export default function Record() {
    return (
        <>
            <Head>
                <title>Record</title>
            </Head>
            <main>
                <RecordTemplate />
            </main>
        </>
    )
}
