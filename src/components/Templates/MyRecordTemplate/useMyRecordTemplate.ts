import { useState } from "react"
import { Diary } from "@/types"

type Props = {
    diaryList: Diary[]
}
export const useMyRecordTemplate = ({ diaryList }: Props) => {
    const [displayCount, setDisplayCount] = useState(8)
    const [originDiaryList, setDiaryList] = useState(diaryList)

    //もっと見るボタン押下時 表示可能数を件増やす
    const handleShowMore = () => {
        setDisplayCount(displayCount + 8)
    }
    const states = { originDiaryList, displayCount }
    const actions = { handleShowMore }
    return [states, actions] as const
}
