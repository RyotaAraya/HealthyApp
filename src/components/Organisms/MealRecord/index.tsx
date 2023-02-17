import Button from "@/components/Atoms/Button"
import MealItem from "@/components/Molecules/MealItem"
import styles from "@/components/Organisms/MealRecord/MealRecord.module.scss"

export const MealRecord = () => {
    //ベタ書きのためデータ取得して表示するようにする
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
                <MealItem imageUrl="/images/meal_01.png" date="05.21.Morning" />
            </div>
            <div>
                <Button title="記録をもっと見る" />
            </div>
        </div>
    )
}

export default MealRecord
