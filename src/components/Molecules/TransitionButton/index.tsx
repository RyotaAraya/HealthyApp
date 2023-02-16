import styles from "@/components/Molecules/TransitionButton/TransitionButton.module.scss"
import { FC } from "react"
import Image from "next/image"

interface Props {
    imageUrl: string
    title: string
    description: string
}

export const TransitionButton: FC<Props> = ({
    imageUrl,
    title,
    description,
}) => {
    return (
        <button className={styles.container}>
            <Image src={imageUrl} alt={title} fill />
            <p className={styles.title}>{title}</p>
            <div className={styles.wrapp}>
                <p>{description}</p>
            </div>
        </button>
    )
}

export default TransitionButton
