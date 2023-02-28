import Link from "next/link"

import Icon from "@/components/Atoms/Icon"
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
                    <Icon url={"/icons/icon_memo.svg"} />
                    <p>記録</p>
                </Link>
                <Link className={styles.navItem} href="/column">
                    <Icon url={"/icons/icon_column.svg"} />
                    <p>コラム</p>
                </Link>
                <Link className={styles.navItem} href="/diagnosis">
                    <Icon url={"/icons/icon_robo.svg"} />
                    <p>AI診断</p>
                </Link>
                <DrawerMenu />
            </div>
        </>
    )
}

export default NavBar
