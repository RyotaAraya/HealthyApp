import type { FC } from "react"

import styles from "@/components/Atoms/Textare/Textarea.module.scss"

type Props = {
    value: string
    placeholder: string
    loading: boolean
    handleSetValue: (targetValue: string) => void
}

export const Textarea: FC<Props> = ({
    value,
    placeholder,
    loading,
    handleSetValue,
}) => {
    return (
        <textarea
            className={styles.container}
            value={value}
            placeholder={placeholder}
            disabled={loading}
            onChange={(e: any) => handleSetValue(e.target.value)}
            required
        />
    )
}

export default Textarea
