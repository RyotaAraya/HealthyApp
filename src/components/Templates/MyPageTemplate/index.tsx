import Progress from "@/components/Organisms/Progress"
import MealFilter from "@/components/Organisms/MealFilter"
import MealRecord from "@/components/Organisms/MealRecord"
import { INIT_MEAL_LIST as mealList } from "@/constants/tmpData"
import { useMyPageTemplate } from "@/components/Templates/MyPageTemplate/useMyPageTemplate"

const MyPageTemplate = () => {
    //新しい順に並び替え
    //TODO:データ取得時に新しい順で取得する
    if (mealList.length) mealList.sort((a, b) => (a.date > b.date ? -1 : 1))

    const [{ originMealList, displayCount }, { handleFilter, handleShowMore }] =
        useMyPageTemplate({
            mealList,
        })

    return (
        <>
            <Progress />
            <MealFilter handleFilter={handleFilter} />
            <MealRecord
                mealList={originMealList}
                displayCount={displayCount}
                handleShowMore={handleShowMore}
            />
        </>
    )
}

export default MyPageTemplate
