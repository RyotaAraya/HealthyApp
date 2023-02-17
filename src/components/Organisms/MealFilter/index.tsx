import HexagonMenu from "@/components/Molecules/HexagonMenu"
import styles from "@/components/Organisms/MealFilter/MealFilter.module.scss"
import { Hexagon_LIST } from "@/constants"

const MealFilter = () => {
    const list = Hexagon_LIST
    return (
        <div className={styles.container}>
            {list.map((item, index) => (
                <HexagonMenu key={index} title={item.title} icon={item.icon} />
            ))}
        </div>
    )
}

export default MealFilter
