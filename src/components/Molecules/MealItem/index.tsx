import Image from "next/image"
import styles from "@/components/Molecules/MealItem/MealItem.module.scss"
import { FC } from "react"
import { Meal } from "@/types"

export const MealItem: FC<Omit<Meal, "id" | "createdAt">> = ({
    category,
    image,
    date,
}) => {
    const dayConvert = () => {
        return `${date}-${category}`
    }

    return (
        <button className={styles.container}>
            <Image src={image.url} width={234} height={234} alt="Meal" />
            <div>
                <span>{dayConvert()}</span>
            </div>
        </button>
    )
}

export default MealItem
