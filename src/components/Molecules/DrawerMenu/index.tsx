import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Link from "next/link"
import { useSession } from "next-auth/react"

import styles from "@/components/Molecules/DrawerMenu/drawerMenu.module.scss"
import { useDrawer } from "@/components/Molecules/DrawerMenu/useDrawerMenu"
import { DRAWER_MENU } from "@/constants"

export const DrawerMenu = () => {
    const [{ isShow }, { handleIsShow }] = useDrawer()
    const { data: session } = useSession()

    // 未ログインの場合DrawerMenuをフィルタリング
    let MENU = [...DRAWER_MENU]
    if (!session) {
        MENU = MENU.filter((item) => item.isLogin === false)
    }

    return (
        <>
            <button onClick={handleIsShow}>
                <Bars3Icon className={styles.icon} />
            </button>
            <div
                className={`${styles.container} ${
                    isShow ? styles.isOpen : undefined
                }`}
            >
                <ul>
                    <button onClick={handleIsShow}>
                        <XMarkIcon className={styles.icon} />
                    </button>
                    {MENU.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <li onClick={handleIsShow}>{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default DrawerMenu
