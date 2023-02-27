import { FC } from "react"
import styles from "@/components/Molecules/MyDiaryItem/MyDiaryItem.module.scss"
import { Diary } from "@/types"
import { FormatDate } from "@/utils"

export const MyDiaryItem: FC<Omit<Diary, "id">> = ({ content, createdAt }) => {
    //TODO:ベタ書き、取得したデータをもとに表示する

    //データ整形を行い表示する
    const date = FormatDate(new Date(createdAt), "yyyy.MM.dd")
    const time = FormatDate(new Date(createdAt), "HH:mm")

    return (
        <div className={styles.container}>
            <p className={styles.date}>{date}</p>
            <p className={styles.time}>{time}</p>
            <p className={styles.description}>{content}</p>
        </div>
    )
}

export default MyDiaryItem
