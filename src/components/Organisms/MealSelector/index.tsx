import HexagonMenu from "@/components/Molecules/HexagonMenu"
import IconKnife from "@/components/Atoms/IconKnife"
import IconCup from "@/components/Atoms/IconCup"
import styles from "@/components/Organisms/MealSelector/MealSelector.module.scss"

const MealSelector = () => {
    return (
        <div className={styles.container}>
            <HexagonMenu title="Morning" icon={IconKnife} />
            <HexagonMenu title="Lunch" icon={IconKnife} />
            <HexagonMenu title="Dinner" icon={IconKnife} />
            <HexagonMenu title="Snack" icon={IconCup} />
        </div>
    )
}

export default MealSelector
