import Icon from "@/components/Atoms/Icon"
import Link from "next/link"
import styles from "@/components/Molecules/DrawerMenu/drawerMenu.module.scss"
import { DRAWER_MENU } from "@/constants"
import { useDrawer } from "@/components/Molecules/DrawerMenu/useDrawerMenu"

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
                        <Icon url={"/icons/icon_close.svg"} />
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
