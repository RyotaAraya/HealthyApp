import Head from "next/head"

import RecordTemplate from "@/components/Templates/RecordTemplate"
import { client } from "@/libs/client"

export default function Record({ diaryList }: any) {
    return (
        <>
            <Head>
                <title>Record</title>
            </Head>
            <main>
                <RecordTemplate diaryList={diaryList} />
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    const { contents } = await client.get({
        endpoint: "diaries",
    })

    return {
        props: {
            diaryList: contents,
        },
    }
}
