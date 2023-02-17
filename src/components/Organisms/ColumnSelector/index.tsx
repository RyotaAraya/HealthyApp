import ColumnSelectButton from "@/components/Molecules/ColumnSelectButton"
import styles from "@/components/Organisms/ColumnSelector/ColumnSelector.module.scss"

const ColumnSelector = () => {
    //TODO:定数から取得してmapで表示
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <ColumnSelectButton
                    recommend_title="RECOMMENDED COLUMN"
                    name="オススメ"
                />
                <ColumnSelectButton
                    recommend_title="RECOMMENDED DIET"
                    name="ダイエット"
                />
                <ColumnSelectButton
                    recommend_title="RECOMMENDED BEAUTY"
                    name="美容"
                />
                <ColumnSelectButton
                    recommend_title="RECOMMENDED HEALTH"
                    name="健康"
                />
            </div>
        </div>
    )
}

export default ColumnSelector
