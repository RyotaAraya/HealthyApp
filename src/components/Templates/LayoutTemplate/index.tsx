import Header from "@/components/Organisms/Header"
import Footer from "@/components/Organisms/Footer"

const Layout = (props: any) => {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout
