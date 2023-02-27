import Progress from "@/components/Organisms/Progress"
import MealFilter from "@/components/Organisms/MealFilter"
import MealRecord from "@/components/Organisms/MealRecord"
import { useMyPageTemplate } from "@/components/Templates/MyPageTemplate/useMyPageTemplate"

const MyPageTemplate = ({ mealList }: any) => {
    if (mealList.length)
        mealList.sort((a: any, b: any) => (a.date > b.date ? -1 : 1))

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
