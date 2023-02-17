import Header from "@/components/Organisms/Header"
import Footer from "@/components/Organisms/Footer"
import styles from "@/components/Templates/LayoutTemplate/LayoutTemplate.module.scss"
import ScrollTopButton from "@/components/Atoms/ScrollTopButton"

const Layout = (props: any) => {
    return (
        <>
            <Header />
            <main className={styles.container}>
                {props.children}
                <ScrollTopButton />
            </main>
            <Footer />
        </>
    )
}

export default Layout
