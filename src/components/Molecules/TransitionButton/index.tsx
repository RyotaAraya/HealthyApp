import styles from "@/components/Molecules/TransitionButton/TransitionButton.module.scss"
import { FC } from "react"
import Image from "next/image"
import type { Transition } from "@/types"

export const TransitionButton: FC<Transition> = ({
    title,
    url,
    description,
}) => {
    return (
        <button className={styles.container}>
            <Image src={url} alt={title} fill />
            <p className={styles.title}>{title}</p>
            <div className={styles.wrapp}>
                <p>{description}</p>
            </div>
        </button>
    )
}

export default TransitionButton
