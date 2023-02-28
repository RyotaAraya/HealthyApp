import Link from "next/link"

import Icon from "@/components/Atoms/Icon"
import styles from "@/components/Molecules/DrawerMenu/drawerMenu.module.scss"
import { useDrawer } from "@/components/Molecules/DrawerMenu/useDrawerMenu"
import { DRAWER_MENU } from "@/constants"

export const DrawerMenu = () => {
    const [{ isShow }, { handleIsShow }] = useDrawer()
    return (
        <>
            <button onClick={handleIsShow}>
                <Icon url={"/icons/icon_menu.svg"} />
            </button>
            <div
                className={`${styles.container} ${
                    isShow ? styles.isOpen : undefined
                }`}
            >
                <ul>
                    <button onClick={handleIsShow}>
                        <Icon
                            url={"/icons/icon_close.svg"}
                            width={20}
                            height={20}
                        />
                    </button>
                    {DRAWER_MENU.map((item, index) => (
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
