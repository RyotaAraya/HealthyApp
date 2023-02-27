import { useState } from "react"
import { Meal } from "@/types"

type Props = {
    mealList: Meal[]
}

export const useMyPageTemplate = ({ mealList }: Props) => {
    const [displayCount, setDisplayCount] = useState(8)
    const [originMealList, setMealList] = useState(mealList)

    //六角形のメニューボタンを押下することによって朝食、昼食ごとに表示する
    const handleFilter = (title: string) => {
        if (title === "All") {
            setMealList(mealList)
            return
        }
        const newOriginMealList = mealList.filter((meal) => {
            return meal.category === title
        })
        setMealList(newOriginMealList)
    }
    //もっと見るボタン押下時 表示可能数を件増やす
    const handleShowMore = () => {
        setDisplayCount(displayCount + 8)
    }

    const states = { originMealList, displayCount }
    const actions = { handleFilter, handleShowMore }
    return [states, actions] as const
}
