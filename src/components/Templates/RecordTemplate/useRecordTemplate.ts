import type { FormEventHandler } from "react"
import { useEffect, useRef, useState } from "react"

import type { DiariesQuery } from "@/generated/request"
import {
    useAddDiaryMutation,
    useDeleteDiaryMutation,
    useDiariesQuery,
    useUpdateDiaryMutation,
} from "@/generated/request"
import type { Diary } from "@/types"

type Props = {
    diaryList: Diary[]
}
export const useRecordTemplate = () => {
    // データ取得
    const { loading, error, data, refetch } = useDiariesQuery()
    const [originDiaryList, setDiaryList] = useState<DiariesQuery["diaries"]>(
        []
    )
    const [displayCount, setDisplayCount] = useState(8)
    const [newDiaryContent, setNewDiaryContent] = useState("")

    const [addDiaryMutation] = useAddDiaryMutation()

    const handleAddSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        const { data } = await addDiaryMutation({
            variables: { content: newDiaryContent },
        })
        const addDiary = data?.addDiary
        if (!addDiary) return
        setDiaryList([addDiary, ...originDiaryList])
        setNewDiaryContent("")
        await refetch()
    }

    const handleSetValue = (value: string) => {
        setNewDiaryContent(value)
    }

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

    useEffect(() => {
        setDiaryList(data?.diaries ?? [])
    }, [data?.diaries])

    const states = {
        loading,
        error,
        originDiaryList,
        displayCount,
        ContainerRef,
        setNewDiaryContent,
        newDiaryContent,
    }
    const actions = {
        handleShowMore,
        handleSmoothScroll,
        handleAddSubmit,
        handleSetValue,
    }

    return [states, actions] as const
}
