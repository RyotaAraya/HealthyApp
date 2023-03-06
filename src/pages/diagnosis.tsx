import Head from "next/head"

import DiagnosisTemplate from "@/components/Templates/DiagnosisTemplate"
import { AuthGuard } from "@/features/auth"

export default function Record() {
    return (
        <>
            <Head>
                <title>Diagnosis</title>
            </Head>
            <main>
                <AuthGuard>
                    <DiagnosisTemplate />
                </AuthGuard>
            </main>
        </>
    )
}
