import HexagonMenu from "@/components/Molecules/HexagonMenu"
import styles from "@/components/Organisms/MealFilter/MealFilter.module.scss"
import { HEXAGON_MENU_LIST } from "@/constants"

const MealFilter = () => {
    return (
        <div className={styles.container}>
            {HEXAGON_MENU_LIST.map((item, index) => (
                <HexagonMenu key={index} title={item.title} icon={item.icon} />
            ))}
        </div>
    )
}

export default MealFilter
