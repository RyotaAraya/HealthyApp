import { useState } from "react"

export const useDrawer = () => {
    const [isShow, setIsShow] = useState(false)
    const handleIsShow = () => {
        setIsShow(!isShow)
    }
    const states = { isShow }
    const actions = { handleIsShow }
    return [states, actions] as const
}
