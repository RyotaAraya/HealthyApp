import Image from "next/image"

import styles from "@/components/Organisms/MyExercise/MyExercise.module.scss"

export const MyExercise = () => {
    // TODO:画像からエクササイズ履歴を表示
    // TODO:スクロールできるようにする
    return (
        <section className={styles.container}>
            <h1>運動の記録を作成予定</h1>
            <p>項目：運動内容と時間、消費カロリー</p>
            <p>
                その他：デフォルトは本日分を表示、選択した日時のものも表示する
            </p>
        </section>
    )
}

export default MyExercise
