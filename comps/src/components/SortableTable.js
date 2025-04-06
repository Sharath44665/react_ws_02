import Table from "./Table";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import useSort from "../hooks/use-sort";

const SortableTable = (props) => {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
        data,
        config
    );



    const updatedConfig = config.map((col, idx) => {

        if (!col.sortValue) {
            return col
        }
        return {
            ...col,
            header: () => <th className="flex items-center cursor-pointer hover:bg-gray-300" onClick={() => setSortColumn(col.label)}>{col.label}

                {getIcons(col.label, sortBy, sortOrder)}
            </th>,

        }
    })


    return <>
        <div>
            {/* {sortOrder} === {sortBy} */}
            <Table {...props} data={sortedData} config={updatedConfig} />

        </div>

    </>

}

const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) {
        return <div>
            <FaAngleUp />
            <FaAngleDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <FaAngleUp />
            <FaAngleDown />
        </div>
    }
    else if (sortOrder === 'asc') {
        return <div>
            <FaAngleUp />
        </div>
    }
    else if (sortOrder === 'desc') {
        return <div>
            <FaAngleDown />
        </div>
    }
}
export default SortableTable; 