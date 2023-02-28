import { useState, useRef } from "react"

export const useDiagnosisTemplate = () => {
    const states = {}
    const actions = {}
    return [states, actions] as const
}
