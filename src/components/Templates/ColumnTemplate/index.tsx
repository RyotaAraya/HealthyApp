import ColumnFilter from "@/components/Organisms/ColumnFilter"
import ColumnList from "@/components/Organisms/ColumnList"
import { useColumnTemplate } from "@/components/Templates/ColumnTemplate/useColumnTemplate"

type Props = {
    columnList: any
}
const ColumnTemplate = ({ columnList }: Props) => {
    const [{ originColumnList, displayCount }, { handleShowMore }] =
        useColumnTemplate({ columnList })

    return (
        <>
            <ColumnFilter />
            <ColumnList
                columnList={originColumnList}
                displayCount={displayCount}
                handleShowMore={handleShowMore}
            />
        </>
    )
}

export default ColumnTemplate
