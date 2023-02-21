import { useState, FC } from "react"
import { Meal } from "@/types"

type Props = {
    mealList: Meal[]
}

export const useMyPageTemplate = ({ mealList }: Props) => {
    const [originMealList, setMealList] = useState(mealList)

    const handleFilter = (title: string) => {
        console.log("title", title)
        const newOriginMealList = mealList.filter((meal) => {
            return meal.category === title
        })
        setMealList(newOriginMealList)
    }

    const states = { originMealList }
    const actions = { handleFilter }
    return [states, actions] as const
}
