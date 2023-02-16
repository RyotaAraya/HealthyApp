import Button from "@/components/Atoms/Button"
import MealItem from "@/components/Molecules/MealItem"
import styles from "@/components/Organisms/MealRecord/MealRecord.module.scss"

export const MealRecord = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
                <MealItem />
            </div>
            <div>
                <Button title="記録をもっと見る" />
            </div>
        </div>
    )
}

export default MealRecord
