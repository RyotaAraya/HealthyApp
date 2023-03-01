import { ChevronUpIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

import styles from "@/components/Atoms/ScrollTopButton/ScrollTopButton.module.scss"

export const ScrollTopButton = () => {
    return (
        <Link href="#" className={styles.container}>
            <ChevronUpIcon className={styles.icon} />
        </Link>
    )
}

export default ScrollTopButton
