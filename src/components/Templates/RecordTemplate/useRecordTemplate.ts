import { useRef, useState } from "react"

import type { Diary } from "@/types"

type Props = {
    diaryList: Diary[]
}
export const useRecordTemplate = ({ diaryList }: Props) => {
    const [displayCount, setDisplayCount] = useState(8)
    const [originDiaryList, setDiaryList] = useState(diaryList)

    //もっと見るボタン押下時 表示可能数を件増やす
    const handleShowMore = () => {
        setDisplayCount(displayCount + 8)
    }

    const handleSmoothScroll = (title: any) => {
        title.current?.scrollIntoView("smooth")
    }

    //Smooth Scroll用
    const BodyRecordRef = useRef(null)
    const MyExerciseRef = useRef(null)
    const MyDiaryRef = useRef(null)
    const ContainerRef = [BodyRecordRef, MyExerciseRef, MyDiaryRef]

    const states = { originDiaryList, displayCount, ContainerRef }
    const actions = { handleShowMore, handleSmoothScroll }
    return [states, actions] as const
}
