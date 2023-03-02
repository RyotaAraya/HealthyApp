import Button from "@/components/Atoms/Button"
import MyDiaryItem from "@/components/Molecules/MyDiaryItem"
import styles from "@/components/Organisms/MyDiary/MyDiary.module.scss"
import type { Diary } from "@/types"

type Props = {
    originDiaryList: Diary[]
    displayCount: number
    handleShowMore: () => void
}

export const MyDiary = ({
    originDiaryList,
    displayCount,
    handleShowMore,
}: Props) => {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>日記</h3>
            <div className={styles.container}>
                {originDiaryList.slice(0, displayCount).map((item) => (
                    <MyDiaryItem
                        key={item.id}
                        content={item.content}
                        createdAt={item.createdAt}
                    />
                ))}
            </div>
            <div>
                <Button
                    title="記録をもっと見る"
                    handlePushButton={handleShowMore}
                />
            </div>
        </div>
    )
}

export default MyDiary
