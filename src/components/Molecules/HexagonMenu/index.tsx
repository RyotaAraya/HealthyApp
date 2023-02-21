import { FC } from "react"
import Image from "next/image"
import styles from "@/components/Molecules/HexagonMenu/HexagonMenu.module.scss"
import IconKnife from "@/components/Atoms/IconKnife"
import IconCup from "@/components/Atoms/IconCup"
import type { Hexagon } from "@/types"

type Props = Hexagon & {
    handleFilter: (title: string) => void
}

export const HexagonMenu: FC<Props> = ({ title, icon, handleFilter }) => {
    return (
        <button
            className={styles.container}
            onClick={() => handleFilter(title)}
        >
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
