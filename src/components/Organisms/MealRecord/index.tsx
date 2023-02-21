import Button from "@/components/Atoms/Button"
import MealItem from "@/components/Molecules/MealItem"
import styles from "@/components/Organisms/MealRecord/MealRecord.module.scss"
import { FC } from "react"
import { Meal } from "@/types"

type Props = {
    mealList: Meal[]
}

export const MealRecord: FC<Props> = ({ mealList }) => {
    //TODO:データ取得して表示するようにする

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {mealList.map((item) => (
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
