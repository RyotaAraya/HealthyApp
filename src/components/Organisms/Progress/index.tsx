import MainPhoto from "@/components/Molecules/MainPhoto"
import MainGraph from "@/components/Molecules/MainGraph"
import styles from "@/components/Organisms/Progress/Progress.module.scss"

type Props = {
    mainPhoto: string
}

const Progress = ({ mainPhoto }: Props) => {
    return (
        <div className={styles.container}>
            <MainPhoto mainPhoto={mainPhoto} />
            <MainGraph />
        </div>
    )
}

export default Progress
