import styles from "@/components/Atoms/Button/Button.module.scss"
import { FC } from "react"

interface Props {
    title: string
}

export const Button: FC<Props> = ({ title }) => {
    return (
        <button className={styles.container}>
            <span>{title}</span>
        </button>
    )
}

export default Button
