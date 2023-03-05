import type { FC, FormEventHandler } from "react"

import Button from "@/components/Atoms/Button"
import Textarea from "@/components/Atoms/Textare"
import styles from "@/components/Molecules/TextareaForm/TextareaForm.module.scss"

type Props = {
    loading: boolean
    value: string
    placeholder: string
    handleSetValue: (targetValue: string) => void
    title: string
    handleAddSubmit: FormEventHandler<HTMLFormElement>
}
export const TextareaForm: FC<Props> = ({
    loading,
    value,
    placeholder,
    handleSetValue,
    title,
    handleAddSubmit,
}) => {
    return (
        <form className={styles.container} onSubmit={handleAddSubmit}>
            <Textarea
                value={value}
                loading={loading}
                handleSetValue={handleSetValue}
                placeholder={placeholder}
            />
            <button className={styles.button}>追加</button>
        </form>
    )
}

export default TextareaForm
