import Image from "next/image"
import styles from "@/components/Molecules/MealItem/MealItem.module.scss"
import { FC } from "react"
import { Meal } from "@/types"

export const MealItem: FC<Omit<Meal, "id" | "created_at">> = ({
    category,
    url,
    date,
}) => {
    const day = `${date}.${category}`
    return (
        <button className={styles.container}>
            <Image src={url} width={234} height={234} alt="Meal" />
            <div>
                <span>{day}</span>
            </div>
        </button>
    )
}

export default MealItem
