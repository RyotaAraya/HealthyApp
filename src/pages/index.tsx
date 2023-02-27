import Head from "next/head"
import MyPageTemplate from "@/components/Templates/MyPageTemplate"
import { client } from "@/libs/client"
import { Meal } from "@/types"

export default function Home({ mealList }: any) {
    console.log("mealList", mealList)
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

// ブログ一覧を取得
export const getStaticProps = async () => {
    const { contents } = await client.get({
        endpoint: "meals",
    })
    console.log("meal", contents)
    return {
        props: {
            mealList: contents,
        },
    }
}
