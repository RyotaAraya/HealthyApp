import Image from "next/image"
import type { FC } from "react"

import styles from "@/components/Molecules/ColumnItem/ColumnItem.module.scss"
import type { Column } from "@/types/"
import { FormatDate } from "@/utils"

export const ColumnItem: FC<Omit<Column, "id" | "content">> = ({
    title,
    image,
    tag,
    createdAt,
}) => {
    const date = FormatDate(new Date(createdAt), "yyyy.MM.dd")
    const time = FormatDate(new Date(createdAt), "HH:mm")

    return (
        <button className={styles.container}>
            <Image
                className={styles.img}
                src={image.url}
                width={234}
                height={144}
                alt="column"
            />
            <div className={styles.date}>
                <span>{date}</span>
                <span>{time}</span>
            </div>
            <h3>{title}</h3>
            <div className={styles.hashTag}>
                {tag.map((item, index) => (
                    <span key={index}>{`#${item}`}</span>
                ))}
            </div>
        </button>
    )
}

export default ColumnItem
