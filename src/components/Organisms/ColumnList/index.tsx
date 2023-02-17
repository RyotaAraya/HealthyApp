import Button from "@/components/Atoms/Button"
import ColumnItem from "@/components/Molecules/ColumnItem"
import styles from "@/components/Organisms/ColumnList/ColumnList.module.scss"

export const ColumnList = () => {
    //TODO:ベタ書きなのでデータ取得した値をmapで表示する
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />
                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />
                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />

                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />

                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />

                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />
                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />

                <ColumnItem
                    imageUrl={"/images/column-1.png"}
                    date={"05.21.Morning"}
                    title={
                        "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…"
                    }
                    tag={"#魚料理 #和食 #DHA"}
                />
            </div>
            <div>
                <Button title="コラムをもっと見る" />
            </div>
        </div>
    )
}

export default ColumnList
