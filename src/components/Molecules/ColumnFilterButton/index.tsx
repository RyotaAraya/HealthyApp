import styles from "@/components/Molecules/ColumnFilterButton/ColumnFilterButton.module.scss"
import { FC } from "react"

interface Props {
    recommend_title: string
    name: string
}

export const ColumnFilterButton: FC<Props> = ({ recommend_title, name }) => {
    return (
        <button className={styles.container}>
            <h3>{recommend_title}</h3>
            <p>{name}</p>
        </button>
    )
}

export default ColumnFilterButton
