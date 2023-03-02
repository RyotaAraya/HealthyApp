//仮データ置き場

import type { User } from "@/types"

export const INIT_USER_DATA: User = {
    id: 1,
    name: "test taro",
    tel: "090-1111-2222",
    age: 30,
    sex: "男性",
    height: 170.0,
    weight: 60.0,
    exercise: "週1で30分ほど運動",
    smoking: "なし",
    drinking: "毎日1号",
    created_at: new Date("2022-05-01"),
}
