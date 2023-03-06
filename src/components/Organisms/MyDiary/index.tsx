import type { FC, FormEventHandler } from "react"

import Button from "@/components/Atoms/Button"
import MyDiaryItem from "@/components/Molecules/MyDiaryItem"
import { DiaryAddForm } from "@/components/Organisms/DiaryAddForm"
import styles from "@/components/Organisms/MyDiary/MyDiary.module.scss"
import type { DiariesQuery, Diary } from "@/generated/request"

type OmitDiary = Omit<Diary, "user" | "userId" | "updatedAt">

type Props = {
    loading: boolean
    errors: Errors
    newDiaryContent: string
    handleAddSubmit: FormEventHandler<HTMLFormElement>
    handleSetValue: (value: string) => void
    originDiaryList: DiariesQuery["diaries"]
    displayCount: number
    handleShowMore: () => void
}

type Errors = {
    error: any
    maxLength: string
    minLength: string
}

export const MyDiary = ({
    loading,
    errors,
    newDiaryContent,
    handleAddSubmit,
    handleSetValue,
    originDiaryList,
    displayCount,
    handleShowMore,
}: Props) => {
    const Diaries = () => {
        if (errors.error)
            return <h1 className={styles.error}>読み込みエラー</h1>
        if (loading) return <h1 className={styles.loading}>Loading...</h1>
        return (
            <div className={styles.container}>
                <div className={styles.list}>
                    {originDiaryList
                        .slice(0, displayCount)
                        .map((item: OmitDiary) => (
                            <MyDiaryItem
                                key={item.id}
                                content={item.content}
                                createdAt={item.createdAt}
                            />
                        ))}
                </div>
                <div>
                    <Button
                        title="記録をもっと見る"
                        handlePushButton={handleShowMore}
                    />
                </div>
            </div>
        )
    }
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>日記</h3>
            <DiaryAddForm
                loading={loading}
                errors={errors}
                newDiaryContent={newDiaryContent}
                handleAddSubmit={handleAddSubmit}
                handleSetValue={handleSetValue}
            />
            <Diaries />
        </div>
    )
}

export default MyDiary
