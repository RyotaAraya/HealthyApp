import Link from "next/link"

import styles from "@/components/Organisms/Footer/Footer.module.scss"

export const Footer = () => {
    return (
        <footer className={styles.container}>
            <ul className={styles.list}>
                <li>
                    <Link className={styles.link} href={"/"}>
                        運営会社
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/"}>
                        利用規約
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/"}>
                        個人情報の取扱について
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/"}>
                        特定商取引法に基づく表記
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/"}>
                        お問い合わせ
                    </Link>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
