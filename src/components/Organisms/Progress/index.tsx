import MainPhoto from "@/components/Molecules/MainPhoto"
import BodyRecord from "@/components/Organisms/BodyRecord"
import styles from "@/components/Organisms/Progress/Progress.module.scss"

type Props = {
    mainPhoto: string
}

const Progress = ({ mainPhoto }: Props) => {
    return (
        <div className={styles.container}>
            <MainPhoto mainPhoto={mainPhoto} />
            <BodyRecord />
        </div>
    )
}

export default Progress
