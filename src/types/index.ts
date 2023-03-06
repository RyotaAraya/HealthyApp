// データ型で使用

export type User = {
    id: number
    name: string
    tel: string
    age: number
    sex: Sex
    height: number
    weight: number
    exercise: string
    smoking: string
    drinking: string
    created_at: Date
}

export type Sex = "男性" | "女性"
export type Category = "All" | "Morning" | "Lunch" | "Dinner" | "Snack"

export type HashTag = {
    name: string
}

export type Image = {
    url: string
    height?: number
    width?: number
}

export type Meal = {
    id: string
    category: Category
    image: Image
    date: string
    createdAt: string
    updatedAt?: string
    revisedAt?: string
    publishedAt?: string
}

export type Diary = {
    id: number
    content: string
    createdAt: string
    updatedAt?: string
    revisedAt?: string
    publishedAt?: string
}

export type Column = {
    id: string
    title: string
    content: string
    image: Image
    tag: HashTag[]
    createdAt: string
    updatedAt?: string
    revisedAt?: string
    publishedAt?: string
}

// Menuなどで使用
export type Hexagon = {
    title: Category
    icon: string
}

export type Transition = {
    title: string
    url: string
    description: string
}

export type ColumnFilter = {
    title: string
    name: string
}

export type DrawerMenu = {
    name: string
    link: string
    isLogin: boolean
}
