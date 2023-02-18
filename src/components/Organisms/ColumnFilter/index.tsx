import ColumnFilterButton from "@/components/Molecules/ColumnFilterButton"
import styles from "@/components/Organisms/ColumnFilter/ColumnFilter.module.scss"
import { COLUMN_FILTER_LIST } from "@/constants"

const ColumnFilter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {COLUMN_FILTER_LIST.map((item, index) => (
                    <ColumnFilterButton
                        key={index}
                        title={item.title}
                        name={item.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default ColumnFilter
