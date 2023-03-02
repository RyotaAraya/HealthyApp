"use client"
import { useEffect, useRef } from "react"
import useState from "react-usestateref"

import ChatMessage from "@/components/Molecules/ChatMessage"
import InputForm from "@/components/Molecules/InputForm"
import BodyRecord from "@/components/Organisms/BodyRecord"
import styles from "@/components/Templates/DiagnosisTemplate/DiagnosisTemplate.module.scss"
import { useDiagnosisTemplate } from "@/components/Templates/DiagnosisTemplate/useDiagnosisTemplate"
import { INIT_USER_DATA } from "@/constants/tmpData"

enum Creator {
    Me = 0,
    Bot = 1,
}

interface MessageProps {
    text: string
    from: Creator
    key: number
}

export const DiagnosisTemplae = () => {
    const USER_DATA = INIT_USER_DATA
    const InitialInput = `健康アドバイスをお願いします。\nデータ\n年齢: ${USER_DATA.age}\n性別: ${USER_DATA.sex}\n身長: ${USER_DATA.height}\n体重: ${USER_DATA.weight}\n運動頻度: ${USER_DATA.exercise}\n喫煙頻度: ${USER_DATA.smoking}\n飲酒頻度: ${USER_DATA.drinking}`

    const [input, setInput] = useState(InitialInput)
    const [robRes, setRobRes, setRobRef] = useState("")
    const [message, setMessages, messagesRef] = useState<MessageProps[]>([])
    const [loading, setLoading] = useState(false)
    const firstRef = useRef(true)

    const callApi = async () => {
        setLoading(true)

        const myMessage: MessageProps = {
            text: input,
            from: Creator.Me,
            key: new Date().getTime(),
        }

        setMessages([myMessage, ...messagesRef.current])

        try {
            const response = await fetch("/api/generate-answer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    prompt: input,
                }),
            })

            if (!response.ok) {
                throw new Error(response.statusText)
            }

            const data = response.body
            if (!data) {
                return
            }
            const reader = data.getReader()
            const decoder = new TextDecoder()
            let done = false

            let tmp = ""
            while (!done) {
                const { value, done: doneReading } = await reader.read()
                done = doneReading
                const chunkValue = decoder.decode(value)
                tmp = tmp + chunkValue
            }
            setRobRes(tmp)

            const botMessage: MessageProps = {
                text: setRobRef.current,
                from: Creator.Bot,
                key: new Date().getTime(),
            }
            setLoading(false)
            setMessages([botMessage, ...messagesRef.current])
        } catch (e) {
            alert(e)
        }
    }
    const handleSubmit = () => {
        if (input === "") return
        callApi()
        setInput("")
    }
    useEffect(() => {
        if (input === "") return
        if (process.env.NODE_ENV === "development") {
            if (firstRef.current) {
                firstRef.current = false
                return
            }
        }
        callApi()
        setInput("")
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <InputForm
                    message={message}
                    value={input}
                    loading={loading}
                    handleInputChange={setInput}
                    placeholder={"質問をどうぞ"}
                    title="ASK"
                    handlePushButton={handleSubmit}
                />
                {loading && (
                    <p className={styles.load}>
                        時間がかかる場合があります。1分ほど待っても取得できない場合は再度お試しください。
                    </p>
                )}
                {loading && <p className={styles.load}>Loading...</p>}
            </div>

            <div className={styles.container}>
                {message.map((msg: MessageProps) => (
                    <ChatMessage
                        key={msg.key}
                        text={msg.text}
                        from={msg.from}
                    />
                ))}
                <div>
                    {message.length === 0 && <p>1回質問できます。</p>}
                    {message.length >= 4 && <p>終了です。</p>}
                </div>
            </div>
        </div>
    )
}

export default DiagnosisTemplae
