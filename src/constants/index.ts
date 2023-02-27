import { Hexagon, Transition, ColumnFilter, DrawerMenu } from "@/types"

export const HEXAGON_MENU_LIST: Hexagon[] = [
    { title: "Morning", icon: "IconKnife" },
    { title: "Lunch", icon: "IconKnife" },
    { title: "Dinner", icon: "IconKnife" },
    { title: "Snack", icon: "IconCup" },
]

export const TRANSITION_MENU_LIST: Transition[] = [
    {
        title: "BODY RECORD",
        url: "/images/image_body.svg",
        description: "カラダの記録",
    },
    {
        title: "MY EXERCISE",
        url: "/images/image_exercise.svg",
        description: "運動の記録",
    },
    {
        title: "MY DIARY",
        url: "/images/image_diary.svg",
        description: "日記",
    },
]

export const COLUMN_FILTER_LIST: ColumnFilter[] = [
    {
        title: "COLUMN",
        name: "おすすめ",
    },
    {
        title: "BEAUTY",
        name: "美容",
    },
    {
        title: "HEALTH",
        name: "健康",
    },
    {
        title: "DIET",
        name: "ダイエット",
    },
]

export const DRAWER_MENU: DrawerMenu[] = [
    {
        name: "記録",
        link: "/record",
    },
    {
        name: "体重グラフ",
        link: "#",
    },
    {
        name: "目標",
        link: "#",
    },
    {
        name: "コラム一覧",
        link: "/column",
    },
    {
        name: "設定",
        link: "#",
    },
]
