import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import type { FC, ReactNode } from "react"
import { useEffect } from "react"

type Props = {
    children: ReactNode
}
export const AuthGuard: FC<Props> = ({ children }) => {
    const { data: session } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (!session) router.push("/column")
    }, [session, router])

    if (!session) return null

    return <>{children}</>
}
