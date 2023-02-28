import Head from "next/head"

import Login from "@/components/Molecules/Login/Login"
import MyPageTemplate from "@/components/Templates/MyPageTemplate"
import { client } from "@/libs/client"

export default function Home({ mealList }: any) {
    return (
        <>
            <Head>
                <title>Top</title>
            </Head>
            <main>
                <Login />
                <MyPageTemplate mealList={mealList} />
            </main>
        </>
    )
}

// ブログ一覧を取得
// TODO:型定義したい
export const getStaticProps = async () => {
    const { contents } = await client.get({
        endpoint: "meals",
    })

    return {
        props: {
            mealList: contents,
        },
    }
}
