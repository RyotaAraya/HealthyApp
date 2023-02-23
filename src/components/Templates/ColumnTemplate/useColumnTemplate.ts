import { useState } from "react"
import { Column } from "@/types"

type Props = {
    columnList: Column[]
}
export const useColumnTemplate = ({ columnList }: Props) => {
    const [displayCount, setDisplayCount] = useState(8)
    const [originColumnList, setColumnList] = useState(columnList)

    //もっと見るボタン押下時 表示可能数を件増やす
    const handleShowMore = () => {
        setDisplayCount(displayCount + 8)
    }
    const states = { originColumnList, displayCount }
    const actions = { handleShowMore }
    return [states, actions] as const
}
