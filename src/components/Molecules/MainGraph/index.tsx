import Image from "next/image"
import styles from "@/components/Molecules/MainGraph/MainGraph.module.scss"

export const MainPhoto = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/images/main_graph.png"
                alt="main_graph"
                width={540}
                height={312}
                priority
            />
        </div>
    )
}

export default MainPhoto
