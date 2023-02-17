import Button from "@/components/Atoms/Button"
import MyDiaryItem from "@/components/Molecules/MyDiaryItem"
import styles from "@/components/Organisms/MyDiary/MyDiary.module.scss"

export const MyDiary = () => {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>MY DIARY</h3>
            <div className={styles.container}>
                <MyDiaryItem />
                <MyDiaryItem />
                <MyDiaryItem />
                <MyDiaryItem />
                <MyDiaryItem />
                <MyDiaryItem />
                <MyDiaryItem />
                <MyDiaryItem />
            </div>
            <div>
                <Button title="記録をもっと見る" />
            </div>
        </div>
    )
}

export default MyDiary
