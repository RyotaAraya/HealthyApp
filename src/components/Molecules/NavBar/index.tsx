import Logo from "@/components/Atoms/Logo"
import IconChallenge from "@/components/Atoms/IconChallenge"
import IconInfo from "@/components/Atoms/IconInfo"
import IconMemo from "@/components/Atoms/IconMemo"
import IconMenu from "@/components/Atoms/IconMenu"
import Link from "next/link"
import styles from "@/components/Molecules/NavBar/navbar.module.scss"
import { useState } from "react"
import { HAMBURGER_MENU } from "@/constants"

export const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)
    }
    console.log("open", openMenu)
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
                {/* TODO:MENUクリック時に展開 */}
                <button onClick={handleOpenMenu}>
                    <IconMenu url={"/icons/icon_menu.svg"} />
                </button>
                <div
                    className={`${styles.hamburgerMenu} ${
                        openMenu ? styles.isOpen : undefined
                    }`}
                >
                    <ul>
                        <button onClick={handleOpenMenu}>
                            <IconMenu url={"/icons/icon_close.svg"} />
                        </button>
                        {HAMBURGER_MENU.map((item, index) => (
                            <Link key={index} href={item.link}>
                                <li>{item.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavBar
