// データ型で使用

export type User = {
    id: number
    name: string
    tel: string
    height: number
    weight: number
    created_at: Date
}

export type Meal = {
    id: number
    category: "Morning" | "Lunch" | "Dinner" | "Snack"
    url: string
    date: string
    created_at: Date
}

export type Diary = {
    id: number
    content: string
    created_at: string
}

export type Column = {
    id: number
    title: string
    content: string
    created_at: string
}

// Menuなどで使用
export type Hexagon = {
    title: string
    icon: string
}

export type Transition = {
    title: string
    url: string
    description: string
}
