import Head from "next/head"

import DiagnosisTemplate from "@/components/Templates/DiagnosisTemplate"

export default function Record() {
    return (
        <>
            <Head>
                <title>Diagnosis</title>
            </Head>
            <main>
                <DiagnosisTemplate />
            </main>
        </>
    )
}
