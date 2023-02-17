import styles from "@/components/Molecules/MyDiaryItem/MyDiaryItem.module.scss"

export const MyDiaryItem = () => {
    //TODO:ベタ書き、取得したデータをもとに表示する
    return (
        <div className={styles.container}>
            <p className={styles.date}>2021.05.21</p>
            <p className={styles.time}>23:25</p>
            <p className={styles.description}>
                私の日記の記録が一部表示されます。
                <br />
                テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…
            </p>
        </div>
    )
}

export default MyDiaryItem
