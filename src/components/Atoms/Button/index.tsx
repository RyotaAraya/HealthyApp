import type { FC } from "react"

import styles from "@/components/Atoms/Button/Button.module.scss"

type Props = {
    title: string
    handlePushButton: () => void
}

export const Button: FC<Props> = ({ title, handlePushButton }) => {
    return (
        <button className={styles.container} onClick={() => handlePushButton()}>
            <span>{title}</span>
        </button>
    )
}

export default Button
