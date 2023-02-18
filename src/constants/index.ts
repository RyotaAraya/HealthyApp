import { Hexagon, Transition } from "@/types"

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
