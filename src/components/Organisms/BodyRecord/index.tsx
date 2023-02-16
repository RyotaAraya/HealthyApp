import Image from "next/image"
import styles from "@/components/Organisms/BodyRecord/BodyRecord.module.scss"

export const BodyRecord = () => {
    // TODO:画像からグラフ表示にする
    return (
        <section className={styles.container}>
            <Image
                src="/images/BODY RECORD.png"
                alt="Body Record"
                width={960}
                height={304}
            />
        </section>
    )
}

export default BodyRecord
