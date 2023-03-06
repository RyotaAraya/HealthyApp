import type { FC, FormEventHandler } from "react"
import { useEffect } from "react"

import Textarea from "@/components/Atoms/Textare"
import styles from "@/components/Molecules/TextareaForm/TextareaForm.module.scss"

type Props = {
    loading: boolean
    errors: Errors
    value: string
    placeholder: string
    handleSetValue: (targetValue: string) => void
    title: string
    handleAddSubmit: FormEventHandler<HTMLFormElement>
}
type Errors = {
    error: any
    maxLength: string
    minLength: string
}
export const TextareaForm: FC<Props> = ({
    loading,
    errors,
    value,
    placeholder,
    handleSetValue,
    handleAddSubmit,
}) => {
    return (
        <form
            className={`${styles.container} ${
                errors.maxLength && styles.error
            } ${errors.minLength && styles.error}`}
            onSubmit={handleAddSubmit}
        >
            <div>
                <p className={`${errors.maxLength && styles.error}`}>
                    {errors.maxLength}
                </p>
                <p className={`${errors.minLength && styles.error}`}>
                    {errors.minLength}
                </p>
            </div>
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
