import Button from "@/components/Atoms/Button"
import MealItem from "@/components/Molecules/MealItem"
import styles from "@/components/Organisms/MealRecord/MealRecord.module.scss"
import { INIT_MEAL_LIST } from "@/constants/data"

export const MealRecord = () => {
    //TODO:データ取得して表示するようにする
    const MEAL_LIST = INIT_MEAL_LIST

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {MEAL_LIST.map((item) => (
                    <MealItem key={item.id} url={item.url} date={item.date} />
                ))}
            </div>
            <div>
                <Button title="記録をもっと見る" />
            </div>
        </div>
    )
}

export default MealRecord
