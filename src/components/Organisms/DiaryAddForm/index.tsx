import type { FC, FormEventHandler } from "react"

import TextareaForm from "@/components/Molecules/TextareaForm"
import styles from "@/components/Organisms/DiaryAddForm/DiaryAddForm.module.scss"
import { DIARY_VALIDATION_RULES } from "@/constants"

type Props = {
    loading: boolean
    errors: Errors
    newDiaryContent: string
    handleAddSubmit: FormEventHandler<HTMLFormElement>
    handleSetValue: (value: string) => void
}

type Errors = {
    error: any
    maxLength: string
    minLength: string
}

export const DiaryAddForm: FC<Props> = ({
    loading,
    errors,
    newDiaryContent,
    handleAddSubmit,
    handleSetValue,
}) => {
    return (
        <div className={styles.container}>
            <TextareaForm
                loading={loading}
                errors={errors}
                value={newDiaryContent}
                handleSetValue={handleSetValue}
                handleAddSubmit={handleAddSubmit}
                placeholder={`上限${DIARY_VALIDATION_RULES.MAX_LENGTH}文字で新規追加`}
                title="ASK"
            />
        </div>
    )
}
