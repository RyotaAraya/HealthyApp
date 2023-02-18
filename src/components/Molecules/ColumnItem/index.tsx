import Image from "next/image"
import styles from "@/components/Molecules/ColumnItem/ColumnItem.module.scss"
import { FC } from "react"
import { Column } from "@/types/"
import { FormatDate } from "@/utils"

export const ColumnItem: FC<Omit<Column, "id" | "title">> = ({
    content,
    url,
    tag,
    created_at,
}) => {
    const date = FormatDate(created_at, "yyyy.MM.dd")
    const time = FormatDate(created_at, "HH:mm")

    return (
        <button className={styles.container}>
            <Image src={url} width={234} height={144} alt="column" />
            <div className={styles.date}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <h3>{content}</h3>
            <div className={styles.hashTag}>
                {tag.map((item, index) => (
                    <span key={index}>{`#${item.name}`}</span>
                ))}
            </div>
        </button>
    )
}

export default ColumnItem
