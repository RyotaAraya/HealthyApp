import NavBar from "@/components/Molecules/NavBar"
import styles from "@/components/Organisms/Header/header.module.scss"

export const Header = () => {
    return (
        <header className={styles.header}>
            <NavBar />
        </header>
    )
}

export default Header
