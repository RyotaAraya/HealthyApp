import type { FC } from "react"
import { useEffect, useState } from "react"

import type { DiariesQuery } from "@/generated/request"
import {
    useAddDiaryMutation,
    useDeleteDiaryMutation,
    useDiariesQuery,
    useUpdateDiaryMutation,
} from "@/generated/request"

export const DiaryList: FC = () => {
    const [diaryContent, setDiaryContent] = useState("")
    const [diaries, setDiaries] = useState<DiariesQuery["diaries"]>([])
    // 取得したデータなどが格納される
    const { loading, error, data } = useDiariesQuery()
    const [addDiaryMutation] = useAddDiaryMutation()
    const [updateDiaryMutation] = useUpdateDiaryMutation()
    const [deleteDiaryMutation] = useDeleteDiaryMutation()

    useEffect(() => {
        setDiaries(data?.diaries ?? [])
    }, [data?.diaries])

    if (loading) return <div>loading...</div>
    if (error) return <div>error!</div>
    if (!data?.diaries) return null

    return <h1>Diary LIST</h1>
}
