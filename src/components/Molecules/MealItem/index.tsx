import Image from "next/image"
import styles from "@/components/Molecules/MealItem/MealItem.module.scss"
import { FC } from "react"
import { Meal } from "@/types"
import { FormatDate } from "@/utils"

export const MealItem: FC<Omit<Meal, "id" | "created_at">> = ({
    category,
    url,
    date,
}) => {
    const dayConvert = () => {
        const Month = FormatDate(new Date(date), "MM")
        const day = FormatDate(new Date(date), "dd")
        return `${Month}.${day}.${category}`
    }

    return (
        <button className={styles.container}>
            <Image src={url} width={234} height={234} alt="Meal" />
            <div>
                <span>{dayConvert()}</span>
            </div>
        </button>
    )
}

export default MealItem
