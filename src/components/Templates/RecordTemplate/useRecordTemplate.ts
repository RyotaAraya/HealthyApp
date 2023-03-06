import type { FormEventHandler } from "react"
import { useEffect, useRef, useState } from "react"

import { DIARY_VALIDATION_RULES } from "@/constants"
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

    const [errors, setErrors] = useState({
        error: error,
        maxLength: "",
        minLength: "",
    })

    //日記追加
    const [newDiaryContent, setNewDiaryContent] = useState("")

    const [addDiaryMutation] = useAddDiaryMutation()

    const handleAddSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()
        console.log("new", newDiaryContent.length)
        if (newDiaryContent.length === 0) return
        if (newDiaryContent.length > DIARY_VALIDATION_RULES.MAX_LENGTH) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                maxLength: `日記は${DIARY_VALIDATION_RULES.MAX_LENGTH}文字以下で入力してください。`,
            }))
            return
        } else if (newDiaryContent.length < DIARY_VALIDATION_RULES.MIN_LENGTH) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                minLength: `日記は${DIARY_VALIDATION_RULES.MIN_LENGTH}文字以上で入力してください。`,
            }))
            return
        }
        const { data } = await addDiaryMutation({
            variables: { content: newDiaryContent },
        })
        const addDiary = data?.addDiary
        if (!addDiary) return
        setDiaryList([addDiary, ...originDiaryList])
        setNewDiaryContent("")
        setErrors((prevErrors) => ({
            ...prevErrors,
            maxLength: "",
            minLength: "",
        }))
        await refetch()
    }

    const handleSetValue = (value: string) => {
        setNewDiaryContent(value)

        if (value.length > DIARY_VALIDATION_RULES.MAX_LENGTH) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                maxLength: `日記は${DIARY_VALIDATION_RULES.MAX_LENGTH}文字以下で入力してください。`,
            }))
        } else if (value.length < DIARY_VALIDATION_RULES.MIN_LENGTH) {
            setErrors((prevErrors) => ({
                ...prevErrors,
                minLength: `日記は${DIARY_VALIDATION_RULES.MIN_LENGTH}文字以上で入力してください。`,
            }))
        } else {
            setErrors((prevErrors) => ({
                ...prevErrors,
                maxLength: "",
                minLength: "",
            }))
        }
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
        errors,
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
