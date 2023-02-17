import Image from "next/image"
import styles from "@/components/Molecules/ColumnItem/ColumnItem.module.scss"
import { FC } from "react"

interface Props {
    imageUrl: string
    date: string
    title: string
    tag: string
}

export const ColumnItem: FC<Props> = ({ imageUrl, date, title, tag }) => {
    return (
        <button className={styles.container}>
            <Image src={imageUrl} width={234} height={144} alt="column" />
            <div className={styles.date}>
                <span>{date}</span>
            </div>
            <h3>{title}</h3>
            <p>{tag}</p>
        </button>
    )
}

export default ColumnItem
