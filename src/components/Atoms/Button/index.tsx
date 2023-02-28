import type { FC } from "react"

import styles from "@/components/Atoms/Button/Button.module.scss"

type Props = {
    title: string
    handleShowMore: () => void
}

export const Button: FC<Props> = ({ title, handleShowMore }) => {
    return (
        <button className={styles.container} onClick={() => handleShowMore()}>
            <span>{title}</span>
        </button>
    )
}

export default Button
