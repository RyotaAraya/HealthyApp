import Image from "next/image"

import styles from "@/components/Molecules/TransitionButton/TransitionButton.module.scss"
import type { Transition } from "@/types"

type Props = Transition & {
    handleSmoothScroll: (title: any) => void
    ContainerRefItem: any
}

export const TransitionButton = ({
    title,
    url,
    description,
    handleSmoothScroll,
    ContainerRefItem,
}: Props) => {
    return (
        <button
            className={styles.container}
            onClick={() => handleSmoothScroll(ContainerRefItem)}
        >
            <Image src={url} alt={title} fill />
            <p className={styles.title}>{title}</p>
            <div className={styles.wrapp}>
                <p>{description}</p>
            </div>
        </button>
    )
}

export default TransitionButton
