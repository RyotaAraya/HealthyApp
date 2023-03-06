import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import type { FC, ReactNode } from "react"
import { useEffect } from "react"

type Props = {
    children: ReactNode
}
export const AuthGuard: FC<Props> = ({ children }) => {
    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") router.push("/column")
    }, [status, router])

    if (!session) return null

    return <>{children}</>
}
