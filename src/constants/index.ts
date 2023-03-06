import type { ColumnFilter, DrawerMenu, Hexagon, Transition } from "@/types"

export const HEXAGON_MENU_LIST: Hexagon[] = [
    { title: "All", icon: "IconKnife" },
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
        isLogin: true,
    },
    {
        name: "体重グラフ",
        link: "#",
        isLogin: true,
    },
    {
        name: "目標",
        link: "#",
        isLogin: true,
    },
    {
        name: "コラム一覧",
        link: "/column",
        isLogin: false,
    },
    {
        name: "設定",
        link: "#",
        isLogin: true,
    },
]

export const DIARY_VALIDATION_RULES = {
    MAX_LENGTH: 50,
    MIN_LENGTH: 5,
}

// Columnなどの最小表示数
export const MIN_CONTENTS = 8
