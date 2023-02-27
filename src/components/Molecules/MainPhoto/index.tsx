import Image from "next/image"
import styles from "@/components/Molecules/MainPhoto/MainPhoto.module.scss"

type Props = {
    mainPhoto: string
}

export const MainPhoto = ({ mainPhoto }: Props) => {
    return (
        <div className={styles.container}>
            <Image
                src={mainPhoto}
                alt="main_photo"
                width={540}
                height={304}
                priority
            />
        </div>
    )
}

export default MainPhoto
