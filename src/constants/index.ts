import { Hexagon, Transition, ColumnFilter, HumburgerMenu } from "@/types"

export const HEXAGON_MENU_LIST: Hexagon[] = [
    { title: "Morning", icon: "IconKnife" },
    { title: "Lunch", icon: "IconKnife" },
    { title: "Dinner", icon: "IconKnife" },
    { title: "Snack", icon: "IconCup" },
]

export const TRANSITION_MENU_LIST: Transition[] = [
    {
        title: "BODY RECORD",
        url: "/images/MyRecommend-1.svg",
        description: "自分のカラダの記録",
    },
    {
        title: "MY EXERCISE",
        url: "/images/MyRecommend-2.svg",
        description: "自分の運動の記録",
    },
    {
        title: "MY DIARY",
        url: "/images/MyRecommend-3.svg",
        description: "自分の日記",
    },
]

export const COLUMN_FILTER_LIST: ColumnFilter[] = [
    {
        title: "RECOMMENDED COLUMN",
        name: "オススメ",
    },
    {
        title: "RECOMMENDED DIET",
        name: "ダイエット",
    },
    {
        title: "RECOMMENDED BEAUTY",
        name: "美容",
    },
    {
        title: "RECOMMENDED HEALTH",
        name: "健康",
    },
]

export const HAMBURGER_MENU: HumburgerMenu[] = [
    {
        name: "自分の記録",
        link: "/my-record",
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
        name: "選択中のコース",
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
