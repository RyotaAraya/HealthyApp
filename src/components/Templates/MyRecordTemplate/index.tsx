import TransitionMenu from "@/components/Organisms/TransitionMenu"
import BodyRecord from "@/components/Organisms/BodyRecord"
import MyExercise from "@/components/Organisms/MyExercise"
import MealRecord from "@/components/Organisms/MealRecord"

const MyPageTemplate = () => {
    return (
        <>
            <TransitionMenu />
            <BodyRecord />
            <MyExercise />
            <MealRecord />
        </>
    )
}

export default MyPageTemplate
