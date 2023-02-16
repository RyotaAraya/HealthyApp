import Image from "next/image"
import styles from "@/components/Organisms/MyExercise/MyExercise.module.scss"

export const MyExercise = () => {
    // TODO:画像からエクササイズ履歴を表示
    // TODO:スクロールできるようにする
    return (
        <section className={styles.container}>
            <Image
                src="/images/MY EXERCISE.png"
                alt="Body Record"
                width={960}
                height={304}
            />
        </section>
    )
}

export default MyExercise
