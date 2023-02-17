import Image from "next/image"
import styles from "@/components/Molecules/MealItem/MealItem.module.scss"
import { FC } from "react"

interface Props {
    url: string
    date: string
}

export const MealItem: FC<Props> = ({ url, date }) => {
    return (
        <button className={styles.container}>
            <Image
                src={url}
                width={234}
                height={234}
                alt="Meal"
            />
            <div>
                <span>{date}</span>
            </div>
        </button>
    )
}

export default MealItem
