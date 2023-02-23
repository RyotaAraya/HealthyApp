import Button from "@/components/Atoms/Button"
import ColumnItem from "@/components/Molecules/ColumnItem"
import styles from "@/components/Organisms/ColumnList/ColumnList.module.scss"
import { FC } from "react"
import { Column } from "@/types"

type Props = {
    columnList: Column[]
    displayCount: number
    handleShowMore: () => void
}

export const ColumnList: FC<Props> = ({
    columnList,
    displayCount,
    handleShowMore,
}) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                {columnList.slice(0, displayCount).map((item) => (
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
                <Button
                    title="コラムをもっと見る"
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    )
}

export default ColumnList
