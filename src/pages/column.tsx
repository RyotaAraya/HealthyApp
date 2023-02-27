import Head from "next/head"
import ColumnTemplate from "@/components/Templates/ColumnTemplate"
import { client } from "@/libs/client"

export default function Column({ columnList }: any) {
    return (
        <>
            <Head>
                <title>Column</title>
            </Head>
            <main>
                <ColumnTemplate columnList={columnList} />
            </main>
        </>
    )
}

// コラム一覧を取得
// TODO:型定義したい
export const getStaticProps = async () => {
    const { contents } = await client.get({
        endpoint: "columns",
    })

    return {
        props: {
            columnList: contents,
        },
    }
}
