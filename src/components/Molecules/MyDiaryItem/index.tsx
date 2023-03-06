import type { FC } from "react"

import styles from "@/components/Molecules/MyDiaryItem/MyDiaryItem.module.scss"
import type { Diary } from "@/generated/request"
import { FormatDate } from "@/utils"

type OmitDiary = Omit<Diary, "id" | "user" | "userId" | "updatedAt">

export const MyDiaryItem: FC<OmitDiary> = ({ content, createdAt }) => {
    const newDate = new Date(Number(createdAt))

    //データ整形を行い表示する
    const date = FormatDate(new Date(newDate), "yyyy.MM.dd")
    const time = FormatDate(new Date(newDate), "HH:mm")

    return (
        <div className={styles.container}>
            <p className={styles.date}>{date}</p>
            <p className={styles.time}>{time}</p>
            <p className={styles.description}>{content}</p>
        </div>
    )
}

export default MyDiaryItem
