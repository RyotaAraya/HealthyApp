import { FC } from "react"
import styles from "@/components/Molecules/HexagonMenu/HexagonMenu.module.scss"
import Icon from "@/components/Atoms/Icon"
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
            <div className={styles.content}>
                {icon === "IconKnife" ? (
                    <Icon
                        url={"/icons/icon_knife.svg"}
                        width={56}
                        height={56}
                    />
                ) : (
                    <Icon
                        url={"/icons/icon_snack.svg"}
                        width={56}
                        height={56}
                    />
                )}
                <span className={styles.title}>{title}</span>
            </div>
        </button>
    )
}

export default HexagonMenu
