import styles from "@/components/Organisms/BodyRecord/BodyRecord.module.scss"

export const BodyRecord = () => {
    // TODO:画像からグラフ表示にする
    return (
        <section className={styles.container}>
            <h1>体重推移のグラフを作成予定</h1>
            <p>縦軸：体重</p>
            <p>横軸：年月</p>
            <p>その他：日時選択ボタンがありクリックするとグラフ切り替え</p>
        </section>
    )
}

export default BodyRecord
