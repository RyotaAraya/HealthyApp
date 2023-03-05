import type { FC, FormEventHandler } from "react"

import TextareaForm from "@/components/Molecules/TextareaForm"
import styles from "@/components/Organisms/DiaryAddForm/DiaryAddForm.module.scss"

type Props = {
    loading: boolean
    newDiaryContent: string
    handleAddSubmit: FormEventHandler<HTMLFormElement>
    handleSetValue: (value: string) => void
}

export const DiaryAddForm: FC<Props> = ({
    loading,
    newDiaryContent,
    handleAddSubmit,
    handleSetValue,
}) => {
    return (
        <div className={styles.container}>
            <TextareaForm
                loading={loading}
                value={newDiaryContent}
                handleSetValue={handleSetValue}
                handleAddSubmit={handleAddSubmit}
                placeholder={"日記を記入"}
                title="ASK"
            />
        </div>
    )
}
