import TransitionMenu from "@/components/Organisms/TransitionMenu"
import BodyRecord from "@/components/Organisms/BodyRecord"
import MyExercise from "@/components/Organisms/MyExercise"
import MyDiary from "@/components/Organisms/MyDiary"
import { useMyRecordTemplate } from "@/components/Templates/MyRecordTemplate/useMyRecordTemplate"
import { INIT_DIARY_LIST as diaryList } from "@/constants/tmpData"

const MyRecordTemplate = () => {
    const [{ originDiaryList, displayCount }, { handleShowMore }] =
        useMyRecordTemplate({
            diaryList,
        })
    return (
        <>
            <TransitionMenu />
            <BodyRecord />
            <MyExercise />
            <MyDiary
                originDiaryList={originDiaryList}
                displayCount={displayCount}
                handleShowMore={handleShowMore}
            />
        </>
    )
}

export default MyRecordTemplate
