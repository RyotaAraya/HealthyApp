import TransitionButton from "@/components/Molecules/TransitionButton"
import styles from "@/components/Organisms/TransitionMenu/Transition.module.scss"
import { TRANSITION_MENU_LIST } from "@/constants"

export const TransitionMenu = () => {
    return (
        <div className={styles.container}>
            {TRANSITION_MENU_LIST.map((item, index) => (
                <TransitionButton
                    key={index}
                    title={item.title}
                    url={item.url}
                    description={item.description}
                />
            ))}
        </div>
    )
}

export default TransitionMenu
