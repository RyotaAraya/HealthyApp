import styles from "@/components/Molecules/ColumnFilterButton/ColumnFilterButton.module.scss"
import { FC } from "react"
import { ColumnFilter } from "@/types"

export const ColumnFilterButton: FC<ColumnFilter> = ({
    title: recommend_title,
    name,
}) => {
    return (
        <button className={styles.container}>
            <h3>{recommend_title}</h3>
            <p>{name}</p>
        </button>
    )
}

export default ColumnFilterButton
