import type { FC } from "react"

import styles from "@/components/Atoms/Input/Input.module.scss"

type Props = {
    value: string
    placeholder: string
    loading: boolean
    handleInputChange: (targetValue: string) => void
}

export const Input: FC<Props> = ({
    value,
    placeholder,
    loading,
    handleInputChange,
}) => {
    return (
        <input
            type="text"
            className={styles.container}
            value={value}
            placeholder={placeholder}
            disabled={loading}
            onChange={(e: any) => handleInputChange(e.target.value)}
        />
    )
}

export default Input
