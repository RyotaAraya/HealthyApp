import type { FC } from "react"

import Button from "@/components/Atoms/Button"
import MealItem from "@/components/Molecules/MealItem"
import styles from "@/components/Organisms/MealRecord/MealRecord.module.scss"
import type { Meal } from "@/types"

type Props = {
    mealList: Meal[]
    displayCount: number
    handleShowMore: () => void
}

export const MealRecord: FC<Props> = ({
    mealList,
    displayCount,
    handleShowMore,
}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {mealList.slice(0, displayCount).map((item) => (
                    <MealItem
                        key={item.id}
                        image={item.image}
                        category={item.category}
                        date={item.date}
                    />
                ))}
            </div>
            <div>
                <Button
                    title="記録をもっと見る"
                    handlePushButton={handleShowMore}
                />
            </div>
        </div>
    )
}

export default MealRecord
