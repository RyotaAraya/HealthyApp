import "@/styles/globals.scss"

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import type { AppProps } from "next/app"
import { SessionProvider } from "next-auth/react"

import Layout from "@/components/Templates/LayoutTemplate"

const NEXT_PUBLIC_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
if (!NEXT_PUBLIC_GRAPHQL_ENDPOINT) {
    throw new Error("NEXT_PUBLIC_GRAPHQL_ENDPOINT not found.")
}

export const client = new ApolloClient({
    uri: NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
            <ApolloProvider client={client}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ApolloProvider>
        </SessionProvider>
    )
}
