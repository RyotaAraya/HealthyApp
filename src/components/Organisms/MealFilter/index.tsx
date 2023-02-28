import type { FC } from "react"

import HexagonMenu from "@/components/Molecules/HexagonMenu"
import styles from "@/components/Organisms/MealFilter/MealFilter.module.scss"
import { HEXAGON_MENU_LIST } from "@/constants"

type Props = {
    handleFilter: (title: string) => void
}

const MealFilter: FC<Props> = ({ handleFilter }) => {
    return (
        <div className={styles.container}>
            {HEXAGON_MENU_LIST.map((item, index) => (
                <HexagonMenu
                    key={index}
                    title={item.title}
                    icon={item.icon}
                    handleFilter={handleFilter}
                />
            ))}
        </div>
    )
}

export default MealFilter
