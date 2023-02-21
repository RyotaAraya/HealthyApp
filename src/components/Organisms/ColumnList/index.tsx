import Button from "@/components/Atoms/Button"
import ColumnItem from "@/components/Molecules/ColumnItem"
import styles from "@/components/Organisms/ColumnList/ColumnList.module.scss"
import { FC } from "react"
import { Column } from "@/types"

type Props = {
    columnList: Column[]
}

export const ColumnList: FC<Props> = ({ columnList }) => {
    //TODO:ベタ書きなのでデータ取得した値をmapで表示する
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {columnList.map((item) => (
                    <ColumnItem
                        key={item.id}
                        content={item.content}
                        url={item.url}
                        tag={item.tag}
                        created_at={item.created_at}
                    />
                ))}
            </div>
            <div>
                <Button title="コラムをもっと見る" />
            </div>
        </div>
    )
}

export default ColumnList
