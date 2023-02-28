import type { FC } from "react"

import Button from "@/components/Atoms/Button"
import ColumnItem from "@/components/Molecules/ColumnItem"
import styles from "@/components/Organisms/ColumnList/ColumnList.module.scss"
import type { Column } from "@/types"

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
                        title={item.title}
                        image={item.image}
                        tag={item.tag}
                        createdAt={item.createdAt}
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
