import type { FC } from "react"

import Button from "@/components/Atoms/Button"
import Input from "@/components/Atoms/Input"
import styles from "@/components/Molecules/InputForm/InputForm.module.scss"

enum Creator {
    Me = 0,
    Bot = 1,
}

interface MessageProps {
    text: string
    from: Creator
    key: number
}

type Props = {
    message: MessageProps[]
    value: string
    placeholder: string
    loading: boolean
    handleInputChange: (targetValue: string) => void
    title: string
    handlePushButton: () => void
}
export const InputForm: FC<Props> = ({
    message,
    value,
    placeholder,
    loading,
    handleInputChange,
    title,
    handlePushButton,
}) => {
    return (
        <form className={styles.container}>
            <Input
                value={value}
                loading={loading}
                handleInputChange={handleInputChange}
                placeholder={placeholder}
            />
            {!loading && message.length < 2 && (
                <Button title={title} handlePushButton={handlePushButton} />
            )}
        </form>
    )
}

export default InputForm
