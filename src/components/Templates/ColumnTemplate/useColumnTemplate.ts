import { useState } from "react"
import { Column } from "@/types"

type Props = {
    columnList: Column[]
}
export const useColumnTemplate = ({ columnList }: Props) => {
    const [originColumnList, setColumnList] = useState(columnList)

    const states = { originColumnList }
    const actions = {}
    return [states, actions] as const
}
