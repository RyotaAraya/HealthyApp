import MainPhoto from "@/components/Molecules/MainPhoto"
import MainGraph from "@/components/Molecules/MainGraph"
import styles from "@/components/Organisms/Progress/Progress.module.scss"

const Progress = () => {
    return (
        <div className={styles.container}>
            <MainPhoto />
            <MainGraph />
        </div>
    )
}

export default Progress
