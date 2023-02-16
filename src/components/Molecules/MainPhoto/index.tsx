import Image from "next/image"
import styles from "@/components/Molecules/MainPhoto/MainPhoto.module.scss"

export const MainPhoto = () => {
    return (
        <div className={styles.container}>
            <Image
                src="/images/main_photo.png"
                alt="main_photo"
                width={540}
                height={312}
                priority
            />
        </div>
    )
}

export default MainPhoto
