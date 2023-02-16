import Image from "next/image"
import { ReactNode } from "react"
import styles from "@/components/Molecules/HexagonMenu/HexagonMenu.module.scss"

interface Props {
    title: string
    icon: () => ReactNode
}

export const HexagonMenu: React.FC<Props> = ({ title, icon }) => {
    return (
        <button className={styles.container}>
            <Image
                src="/hexagon.svg"
                alt="hexagonMenu"
                height={136}
                width={136}
            />
            <div className={styles.content}>
                {icon()}
                <span className={styles.title}>{title}</span>
            </div>
        </button>
    )
}

export default HexagonMenu
