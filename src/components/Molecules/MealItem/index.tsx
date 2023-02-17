import Image from "next/image"
import styles from "@/components/Molecules/MealItem/MealItem.module.scss"

export const MealItem = () => {
    return (
        <button className={styles.container}>
            <Image
                src="/images/meal_01.png"
                width={234}
                height={234}
                alt="Meal"
            />
            <div>
                <span>05.21.Morning</span>
            </div>
        </button>
    )
}

export default MealItem
