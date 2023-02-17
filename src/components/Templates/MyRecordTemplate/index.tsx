import TransitionMenu from "@/components/Organisms/TransitionMenu"
import BodyRecord from "@/components/Organisms/BodyRecord"
import MyExercise from "@/components/Organisms/MyExercise"
import MyDiary from "@/components/Organisms/MyDiary"

const MyPageTemplate = () => {
    return (
        <>
            <TransitionMenu />
            <BodyRecord />
            <MyExercise />
            <MyDiary />
        </>
    )
}

export default MyPageTemplate
