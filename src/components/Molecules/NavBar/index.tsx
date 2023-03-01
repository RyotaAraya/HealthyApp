import {
    ArrowLeftOnRectangleIcon,
    ArrowRightOnRectangleIcon,
    BookOpenIcon,
    ChatBubbleLeftRightIcon,
    PencilIcon,
} from "@heroicons/react/24/solid"
import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"

import Logo from "@/components/Atoms/Logo"
import DrawerMenu from "@/components/Molecules/DrawerMenu"
import styles from "@/components/Molecules/NavBar/navbar.module.scss"

export const NavBar = () => {
    return (
        <>
            <Link href="/">
                <Logo />
            </Link>
            <div className={styles.nav}>
                <Link className={styles.navItem} href="/record">
                    <PencilIcon className={styles.icon} />
                    <p>記録</p>
                </Link>
                <Link className={styles.navItem} href="/column">
                    <BookOpenIcon className={styles.icon} />
                    <p>コラム</p>
                </Link>
                <Link className={styles.navItem} href="/diagnosis">
                    <ChatBubbleLeftRightIcon className={styles.icon} />
                    <p>AI診断</p>
                </Link>
                <Login />
                <DrawerMenu />
            </div>
        </>
    )
}

export default NavBar

const Login = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <button className={styles.navItem} onClick={() => signOut()}>
                <ArrowRightOnRectangleIcon className={styles.icon} />
            </button>
        )
    } else {
        return (
            <button className={styles.navItem} onClick={() => signIn()}>
                <ArrowLeftOnRectangleIcon className={styles.icon} />
            </button>
        )
    }
}
