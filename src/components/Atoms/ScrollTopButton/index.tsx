import Image from "next/image"
import Link from "next/link"

import styles from "@/components/Atoms/ScrollTopButton/ScrollTopButton.module.scss"

export const ScrollTopButton = () => {
    return (
        <Link href="#" className={styles.container}>
            <Image
                src="/icons/icon_scrollTopButton.svg"
                width={48}
                height={48}
                alt="ScrollTop"
            />
        </Link>
    )
}

export default ScrollTopButton
