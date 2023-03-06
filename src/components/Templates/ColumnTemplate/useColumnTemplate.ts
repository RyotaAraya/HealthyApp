import { useState } from "react"

import { MIN_CONTENTS } from "@/constants"
import type { Column } from "@/types"

type Props = {
    columnList: Column[]
}
export const useColumnTemplate = ({ columnList }: Props) => {
    const [displayCount, setDisplayCount] = useState(MIN_CONTENTS)
    const [originColumnList, setColumnList] = useState(columnList)

    //もっと見るボタン押下時 表示可能数を件増やす
    const handleShowMore = () => {
        setDisplayCount(displayCount + MIN_CONTENTS)
    }
    const states = { originColumnList, displayCount }
    const actions = { handleShowMore }
    return [states, actions] as const
}
