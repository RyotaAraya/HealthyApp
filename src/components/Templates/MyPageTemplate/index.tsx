import MealFilter from "@/components/Organisms/MealFilter"
import MealRecord from "@/components/Organisms/MealRecord"
import Progress from "@/components/Organisms/Progress"
import { useMyPageTemplate } from "@/components/Templates/MyPageTemplate/useMyPageTemplate"

const MyPageTemplate = ({ mealList }: any) => {
    if (mealList.length)
        mealList.sort((a: any, b: any) => (a.date > b.date ? -1 : 1))

    const [{ originMealList, displayCount }, { handleFilter, handleShowMore }] =
        useMyPageTemplate({
            mealList,
        })

    //最新の画像をTOPに表示する
    const mainPhoto = mealList[0]?.image?.url || "/images/no-image.png"

    return (
        <>
            <Progress mainPhoto={mainPhoto} />
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
