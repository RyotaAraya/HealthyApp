import ColumnFilter from "@/components/Organisms/ColumnFilter"
import ColumnList from "@/components/Organisms/ColumnList"
import { INIT_COLUMN_LIST as columnList } from "@/constants/tmpData"
import { useColumnTemplate } from "@/components/Templates/ColumnTemplate/useColumnTemplate"

const ColumnTemplate = () => {
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
