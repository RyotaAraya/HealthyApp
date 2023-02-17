import Image from "next/image"
import styles from "@/components/Molecules/HexagonMenu/HexagonMenu.module.scss"
import IconKnife from "@/components/Atoms/IconKnife"
import IconCup from "@/components/Atoms/IconCup"
import { Hexagon } from "@/types"

export const HexagonMenu: React.FC<Hexagon> = ({ title, icon }) => {
    return (
        <button className={styles.container}>
            <Image
                src="/hexagon.svg"
                alt="hexagonMenu"
                height={136}
                width={136}
            />
            <div className={styles.content}>
                {icon === "IconKnife" ? <IconKnife /> : <IconCup />}
                <span className={styles.title}>{title}</span>
            </div>
        </button>
    )
}

export default HexagonMenu
