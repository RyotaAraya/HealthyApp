import TransitionButton from "@/components/Molecules/TransitionButton"
import styles from "@/components/Organisms/TransitionMenu/Transition.module.scss"
import { TRANSITION_MENU_LIST } from "@/constants"

type Props = {
    handleSmoothScroll: (container: any) => void
    ContainerRef: any
}

export const TransitionMenu = ({ handleSmoothScroll, ContainerRef }: Props) => {
    return (
        <div className={styles.container}>
            {TRANSITION_MENU_LIST.map((item, index) => (
                <TransitionButton
                    key={index}
                    title={item.title}
                    url={item.url}
                    description={item.description}
                    handleSmoothScroll={handleSmoothScroll}
                    ContainerRefItem={ContainerRef[Number(index)]}
                />
            ))}
        </div>
    )
}

export default TransitionMenu
