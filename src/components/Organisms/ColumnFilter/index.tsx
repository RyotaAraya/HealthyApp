import ColumnFilterButton from "@/components/Molecules/ColumnFilterButton"
import styles from "@/components/Organisms/ColumnFilter/ColumnFilter.module.scss"

const ColumnFilter = () => {
    //TODO:定数から取得してmapで表示
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ColumnFilterButton
                    recommend_title="RECOMMENDED COLUMN"
                    name="オススメ"
                />
                <ColumnFilterButton
                    recommend_title="RECOMMENDED DIET"
                    name="ダイエット"
                />
                <ColumnFilterButton
                    recommend_title="RECOMMENDED BEAUTY"
                    name="美容"
                />
                <ColumnFilterButton
                    recommend_title="RECOMMENDED HEALTH"
                    name="健康"
                />
            </div>
        </div>
    )
}

export default ColumnFilter
