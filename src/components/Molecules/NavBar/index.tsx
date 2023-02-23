import Logo from "@/components/Atoms/Logo"
import IconChallenge from "@/components/Atoms/IconChallenge"
import IconInfo from "@/components/Atoms/IconInfo"
import IconMemo from "@/components/Atoms/IconMemo"
import DrawerMenu from "@/components/Molecules/DrawerMenu"
import Link from "next/link"
import styles from "@/components/Molecules/NavBar/navbar.module.scss"

export const NavBar = () => {
    return (
        <>
            <Link href="/">
                <Logo />
            </Link>
            <div className={styles.nav}>
                <Link className={styles.navItem} href="/my-record">
                    <IconMemo />
                    <p>自分の記録</p>
                </Link>
                <Link className={styles.navItem} href="#">
                    <IconChallenge />
                    <p>チャレンジ</p>
                </Link>
                <Link className={styles.navItem} href="/news">
                    {/* TODO:お知らせの数に応じてアイコン表示 */}
                    <IconInfo />
                    <p>お知らせ</p>
                </Link>
                <DrawerMenu />
            </div>
        </>
    )
}

export default NavBar
