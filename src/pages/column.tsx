import Head from "next/head"
import ColumnTemplate from "@/components/Templates/ColumnTemplate"

export default function Column() {
    return (
        <>
            <Head>
                <title>Column</title>
            </Head>
            <main>
                <ColumnTemplate />
            </main>
        </>
    )
}
