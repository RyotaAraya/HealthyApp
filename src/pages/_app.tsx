import "@/styles/globals.scss"

import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"

import Layout from "@/components/Templates/LayoutTemplate"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </SessionProvider>
    )
}
