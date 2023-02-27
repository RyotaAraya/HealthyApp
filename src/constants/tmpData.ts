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
        image: { url: "/images/meal/meal_m01.png" },
        category: "Morning",
        date: "2022/05/18",
        createdAt: new Date("2022-05-21"),
    },
    {
        id: 2,
        image: { url: "/images/meal/meal_l01.png" },
        category: "Lunch",
        date: "2022/05/18",
        createdAt: new Date("2022-05-21"),
    },
    {
        id: 3,
        image: { url: "/images/meal/meal_d01.png" },
        category: "Dinner",
        date: "2022/05/18",
        createdAt: new Date("2022-05-21"),
    },
    {
        id: 4,
        image: { url: "/images/meal/meal_s01.png" },
        category: "Snack",
        date: "2022/05/18",
        createdAt: new Date("2022-05-21"),
    },
    {
        id: 5,
        image: { url: "/images/meal/meal_m01.png" },
        category: "Morning",
        date: "2022/05/19",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 6,
        image: { url: "/images/meal/meal_l02.png" },
        category: "Lunch",
        date: "2022/05/19",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 7,
        image: { url: "/images/meal/meal_d02.png" },
        category: "Dinner",
        date: "2022/05/19",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 8,
        image: { url: "/images/meal/meal_s02.png" },
        category: "Snack",
        date: "2022/05/19",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 9,
        image: { url: "/images/meal/meal_m01.png" },
        category: "Morning",
        date: "2022/05/20",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 10,
        image: { url: "/images/meal/meal_l02.png" },
        category: "Lunch",
        date: "2022/05/20",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 11,
        image: { url: "/images/meal/meal_d02.png" },
        category: "Dinner",
        date: "2022/05/20",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 12,
        image: { url: "/images/meal/meal_s02.png" },
        category: "Snack",
        date: "2022/05/20",
        createdAt: new Date("2022-05-20"),
    },
    {
        id: 13,
        image: { url: "/images/meal/meal_m01.png" },
        category: "Morning",
        date: "2022/05/21",
        createdAt: new Date("2022-05-21"),
    },
    {
        id: 14,
        image: { url: "/images/meal/meal_l01.png" },
        category: "Lunch",
        date: "2022/05/21",
        createdAt: new Date("2022-05-21"),
    },
    {
        id: 15,
        image: { url: "/images/meal/meal_d01.png" },
        category: "Dinner",
        date: "2022/05/21",
        createdAt: new Date("2022-05-21"),
    },
    {
        id: 16,
        image: { url: "/images/meal/meal_s01.png" },
        category: "Snack",
        date: "2022/05/21",
        createdAt: new Date("2022-05-21"),
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
    {
        id: 9,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 10,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 11,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 12,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 13,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 14,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 15,
        content:
            "私の日記の記録が一部表示されます。\nテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
        created_at: new Date("2022-05-21 23:25"),
    },
    {
        id: 16,
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
    {
        id: 9,
        title: "column 9",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-1.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 10,
        title: "column 10",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-2.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 11,
        title: "column 11",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-3.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 12,
        title: "column 12",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-4.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 13,
        title: "column 13",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-5.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 14,
        title: "column 14",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-6.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 15,
        title: "column 15",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-7.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
    {
        id: 16,
        title: "column 16",
        content:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット",
        url: "/images/column-8.jpg",
        tag: [{ name: "魚料理" }, { name: "和食" }, { name: "DHA" }],
        created_at: new Date("2022-05-21"),
    },
]
