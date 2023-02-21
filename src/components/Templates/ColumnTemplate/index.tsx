import ColumnFilter from "@/components/Organisms/ColumnFilter"
import ColumnList from "@/components/Organisms/ColumnList"
import { INIT_COLUMN_LIST as columnList } from "@/constants/tmpData"
import { useColumnTemplate } from "@/components/Templates/ColumnTemplate/useColumnTemplate"

const ColumnTemplate = () => {
    const [{ originColumnList }, {}] = useColumnTemplate({ columnList })

    return (
        <>
            <ColumnFilter />
            <ColumnList columnList={originColumnList} />
        </>
    )
}

export default ColumnTemplate
