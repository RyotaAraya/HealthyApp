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

export const INIT_DIARY_LIST: Diary[] = [
    {
        id: 1,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 2,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 3,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 4,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 5,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 6,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 7,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 8,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
]

export const INIT_COLUMN_LIST: Column[] = [
    {
        id: 1,
        title: "column 1",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-1.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 2,
        title: "column 2",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-2.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 3,
        title: "column 3",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-3.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 4,
        title: "column 4",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-4.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 5,
        title: "column 5",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-5.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 6,
        title: "column 6",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-6.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 7,
        title: "column 7",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-7.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 8,
        title: "column 8",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-8.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
]
