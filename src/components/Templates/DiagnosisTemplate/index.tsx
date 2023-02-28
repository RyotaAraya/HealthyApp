import TransitionMenu from "@/components/Organisms/TransitionMenu"
import BodyRecord from "@/components/Organisms/BodyRecord"
import MyExercise from "@/components/Organisms/MyExercise"
import MyDiary from "@/components/Organisms/MyDiary"
import { useDiagnosisTemplate } from "@/components/Templates/DiagnosisTemplate/useDiagnosisTemplate"
import styles from "@/components/Templates/DiagnosisTemplate/DiagnosisTemplate.module.scss"
import Link from "next/link"

const RecordTemplate = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>準備中</h1>
                <p>
                    体重と身長、持病情報などを用いてChatGPTにアドバイスを求める。
                </p>
                <p>以前作成したAIbotを応用予定</p>
                <Link href={"https://phone-ten.vercel.app/auth/chat-gpt"}>
                    https://phone-ten.vercel.app/auth/chat-gpt
                </Link>
            </div>
        </>
    )
}

export default RecordTemplate
