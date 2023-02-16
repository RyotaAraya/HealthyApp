import "@/styles/globals.scss"
import type { AppProps } from "next/app"
import Layout from "@/components/Templates/LayoutTemplate"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
