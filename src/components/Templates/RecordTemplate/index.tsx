import TransitionMenu from "@/components/Organisms/TransitionMenu"
import BodyRecord from "@/components/Organisms/BodyRecord"
import MyExercise from "@/components/Organisms/MyExercise"
import MyDiary from "@/components/Organisms/MyDiary"
import { useRecordTemplate } from "@/components/Templates/RecordTemplate/useRecordTemplate"
import { INIT_DIARY_LIST as diaryList } from "@/constants/tmpData"

const RecordTemplate = () => {
    const [
        { originDiaryList, displayCount, ContainerRef },
        { handleShowMore, handleSmoothScroll },
    ] = useRecordTemplate({
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

export default RecordTemplate
