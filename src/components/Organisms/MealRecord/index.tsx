import Button from "@/components/Atoms/Button"
import MealItem from "@/components/Molecules/MealItem"
import styles from "@/components/Organisms/MealRecord/MealRecord.module.scss"
import { INIT_MEAL_LIST } from "@/constants/tmpData"

export const MealRecord = () => {
    //TODO:データ取得して表示するようにする

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {INIT_MEAL_LIST.map((item) => (
                    <MealItem
                        key={item.id}
                        url={item.url}
                        category={item.category}
                        date={item.date}
                    />
                ))}
            </div>
            <div>
                <Button title="記録をもっと見る" />
            </div>
        </div>
    )
}

export default MealRecord
