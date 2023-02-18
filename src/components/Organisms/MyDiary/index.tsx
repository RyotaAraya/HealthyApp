import Button from "@/components/Atoms/Button"
import MyDiaryItem from "@/components/Molecules/MyDiaryItem"
import styles from "@/components/Organisms/MyDiary/MyDiary.module.scss"
import { INIT_DIARY_LIST } from "@/constants/tmpData"

export const MyDiary = () => {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>MY DIARY</h3>
            <div className={styles.container}>
                {INIT_DIARY_LIST.map((item) => (
                    <MyDiaryItem
                        key={item.id}
                        content={item.content}
                        created_at={item.created_at}
                    />
                ))}
            </div>
            <div>
                <Button title="記録をもっと見る" />
            </div>
        </div>
    )
}

export default MyDiary
