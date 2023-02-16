import TransitionButton from "@/components/Molecules/TransitionButton"
import styles from "@/components/Organisms/TransitionMenu/Transition.module.scss"

export const TransitionMenu = () => {
    return (
        <div className={styles.container}>
            <TransitionButton
                imageUrl="/images/MyRecommend-1.svg"
                title="BODY RECORD"
                description="自分のカラダの記録"
            />
            <TransitionButton
                imageUrl="/images/MyRecommend-2.svg"
                title="MY EXERCISE"
                description="自分の運動の記録"
            />
            <TransitionButton
                imageUrl="/images/MyRecommend-3.svg"
                title="MY DIARY"
                description="自分の日記"
            />
        </div>
    )
}

export default TransitionMenu
