import BodyRecord from "@/components/Organisms/BodyRecord"
import MyDiary from "@/components/Organisms/MyDiary"
import MyExercise from "@/components/Organisms/MyExercise"
import TransitionMenu from "@/components/Organisms/TransitionMenu"
import { useRecordTemplate } from "@/components/Templates/RecordTemplate/useRecordTemplate"

const RecordTemplate = () => {
    const [
        {
            loading,
            errors,
            originDiaryList,
            displayCount,
            ContainerRef,
            newDiaryContent,
        },
        { handleShowMore, handleSmoothScroll, handleAddSubmit, handleSetValue },
    ] = useRecordTemplate()
    //Smooth Scroll用
    const [BodyRecordRef, MyExerciseRef, MyDiaryRef] = ContainerRef

    if (errors.error) throw new Error("Diary取得エラー")
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
                    loading={loading}
                    errors={errors}
                    newDiaryContent={newDiaryContent}
                    handleAddSubmit={handleAddSubmit}
                    handleSetValue={handleSetValue}
                    originDiaryList={originDiaryList}
                    displayCount={displayCount}
                    handleShowMore={handleShowMore}
                />
            </div>
        </>
    )
}

export default RecordTemplate
