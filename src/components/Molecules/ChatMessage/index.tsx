import type { FC } from "react"

import Icon from "@/components/Atoms/Icon"
import styles from "@/components/Molecules/ChatMessage/ChatMessage.module.scss"

enum Creator {
    Me = 0,
    Bot = 1,
}

interface MessageProps {
    text: string
    from: Creator
    key: number
}

const ChatMessage: FC<MessageProps> = ({ text, from }) => {
    const me = "/icons/icon_me.svg"
    const bot = "/icons/icon_bot.svg"
    return (
        <div className={styles.container}>
            {from == Creator.Me && (
                <div className={`${styles.chat} ${styles.me}`}>
                    <Icon url={me} width={40} height={40} alt="icon_me" />
                    <p>{text}</p>
                </div>
            )}
            {from == Creator.Bot && (
                <div className={`${styles.chat} ${styles.bot}`}>
                    <Icon url={bot} width={40} height={40} alt="icon_bot" />
                    <p>{text}</p>
                </div>
            )}
        </div>
    )
}

export default ChatMessage
