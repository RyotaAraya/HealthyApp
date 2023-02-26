import TransitionMenu from "@/components/Organisms/TransitionMenu"
import BodyRecord from "@/components/Organisms/BodyRecord"
import MyExercise from "@/components/Organisms/MyExercise"
import MyDiary from "@/components/Organisms/MyDiary"
import { useMyRecordTemplate } from "@/components/Templates/MyRecordTemplate/useMyRecordTemplate"
import { INIT_DIARY_LIST as diaryList } from "@/constants/tmpData"

const MyRecordTemplate = () => {
    const [
        { originDiaryList, displayCount, ContainerRef },
        { handleShowMore, handleSmoothScroll },
    ] = useMyRecordTemplate({
        diaryList,
    })
    //Smooth Scroll用
    const [BodyRecordRef, MyExerciseRef, MyDiaryRef] = ContainerRef

    return (
        <>
            <TransitionMenu
                handleSmoothScroll={handleSmoothScroll}
                ContainerRef={ContainerRef}
            />
            <div ref={BodyRecordRef}>
                <BodyRecord />
            </div>
            <div ref={MyExerciseRef}>
                <MyExercise />
            </div>
            <div ref={MyDiaryRef}>
                <MyDiary
                    originDiaryList={originDiaryList}
                    displayCount={displayCount}
                    handleShowMore={handleShowMore}
                />
            </div>
        </>
    )
}

export default MyRecordTemplate
