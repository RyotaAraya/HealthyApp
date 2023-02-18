//仮データ置き場

import { User, Meal, Diary, Column } from "@/types"

export const INIT_USER_DATA: User = {
    id: 1,
    name: "test taro",
    tel: "090-1111-2222",
    height: 170.0,
    weight: 60.0,
    created_at: new Date("2022-05-01"),
}

export const INIT_MEAL_LIST: Meal[] = [
    {
        id: 1,
        url: "/images/meal/meal_m01.png",
        category: "Morning",
        date: "05.21",
        created_at: new Date("2022-05-21"),
    },
    {
        id: 2,
        url: "/images/meal/meal_l01.png",
        category: "Lunch",
        date: "05.21",
        created_at: new Date("2022-05-21"),
    },
    {
        id: 3,
        url: "/images/meal/meal_d01.png",
        category: "Dinner",
        date: "05.21",
        created_at: new Date("2022-05-21"),
    },
    {
        id: 4,
        url: "/images/meal/meal_s01.png",
        category: "Snack",
        date: "05.21",
        created_at: new Date("2022-05-21"),
    },
    {
        id: 5,
        url: "/images/meal/meal_m01.png",
        category: "Morning",
        date: "05.20",
        created_at: new Date("2022-05-20"),
    },
    {
        id: 6,
        url: "/images/meal/meal_l02.png",
        category: "Lunch",
        date: "05.20",
        created_at: new Date("2022-05-20"),
    },
    {
        id: 7,
        url: "/images/meal/meal_d02.png",
        category: "Dinner",
        date: "05.20",
        created_at: new Date("2022-05-20"),
    },
    {
        id: 8,
        url: "/images/meal/meal_s02.png",
        category: "Snack",
        date: "05.20",
        created_at: new Date("2022-05-20"),
    },
]
