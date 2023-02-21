import { useState } from "react"
import Progress from "@/components/Organisms/Progress"
import MealFilter from "@/components/Organisms/MealFilter"
import MealRecord from "@/components/Organisms/MealRecord"
import { INIT_MEAL_LIST } from "@/constants/tmpData"

const MyPageTemplate = () => {
    //新しい順に並び替え
    //TODO:データ取得時に新しい順で取得する
    if (INIT_MEAL_LIST.length)
        INIT_MEAL_LIST.sort((a, b) => (a.date > b.date ? -1 : 1))

    const [mealList, setMealList] = useState(INIT_MEAL_LIST)

    return (
        <>
            <Progress />
            <MealFilter />
            <MealRecord mealList={mealList} />
        </>
    )
}

export default MyPageTemplate
