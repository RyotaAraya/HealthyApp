import Head from "next/head"

import RecordTemplate from "@/components/Templates/RecordTemplate"
import { AuthGuard } from "@/features/auth"

export default function Record() {
    return (
        <>
            <Head>
                <title>Record</title>
            </Head>
            <main>
                <AuthGuard>
                    <RecordTemplate />
                </AuthGuard>
            </main>
        </>
    )
}
