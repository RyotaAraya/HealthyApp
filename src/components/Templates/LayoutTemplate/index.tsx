import ScrollTopButton from "@/components/Atoms/ScrollTopButton"
import Footer from "@/components/Organisms/Footer"
import Header from "@/components/Organisms/Header"
import styles from "@/components/Templates/LayoutTemplate/LayoutTemplate.module.scss"

const Layout = (props: any) => {
    return (
        <>
            <Header />
            <section className={styles.container}>
                {props.children}
                <ScrollTopButton />
            </section>
            <Footer />
        </>
    )
}

export default Layout
