"use client"
import Image from "next/image"
import useState from "react-usestateref"

import ChatMessage from "@/components/Molecules/ChatMessage"
import InputForm from "@/components/Molecules/InputForm"
import BodyRecord from "@/components/Organisms/BodyRecord"
import styles from "@/components/Templates/DiagnosisTemplate/DiagnosisTemplate.module.scss"
import { useDiagnosisTemplate } from "@/components/Templates/DiagnosisTemplate/useDiagnosisTemplate"

enum Creator {
    Me = 0,
    Bot = 1,
}

interface MessageProps {
    text: string
    from: Creator
    key: number
}

interface InputProps {
    onSend: (input: string) => void
    disabled: boolean
}

export const DiagnosisTemplae = () => {
    const [input, setInput] = useState("")
    const [robRes, setRobRes, setRobRef] = useState("")
    const [message, setMessages, messagesRef] = useState<MessageProps[]>([])
    const [loading, setLoading] = useState(false)

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

    return (
        <main className="relative max-w-2x mx-auto">
            <div className="sticky top-0 w-full pt-10 px-4">
                <InputForm
                    message={message}
                    value={input}
                    loading={loading}
                    handleInputChange={setInput}
                    placeholder={"質問をどうぞ"}
                    title="ASK"
                    handlePushButton={handleSubmit}
                />
                <div className="top-4">
                    {loading && (
                        <p className="text-gray-500 flex justify-center">
                            時間がかかる場合があります。1分ほど待っても取得できない場合は再度お試しください。
                        </p>
                    )}
                    {loading && <p>Loading...</p>}
                </div>
            </div>

            <div className="mt-10 px-4">
                {message.map((msg: MessageProps) => (
                    <ChatMessage
                        key={msg.key}
                        text={msg.text}
                        from={msg.from}
                    />
                ))}
                {message.length === 0 && (
                    <p className="text-center text-gray-400">
                        2回質問できます。
                    </p>
                )}
                {message.length >= 4 && (
                    <p className="text-center text-red-400">終了です。</p>
                )}
            </div>
        </main>
    )
}

export default DiagnosisTemplae
