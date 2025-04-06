import { useState } from "react";
import Table from "./Table";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const SortableTable = (props) => {
    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null);
    const { config, data } = props;

    const handleClick = (label) => {
        
        if (sortBy && label !== sortBy){
            setSortBy('asc')
            setSortBy(label)
            return
        }

        // console.log(label)
        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        }
        else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        }
        else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null)
        }

    }


    const updatedConfig = config.map((col, idx) => {

        if (!col.sortValue) {
            return col
        }
        return {
            ...col,
            header: () => <th className="flex items-center cursor-pointer hover:bg-gray-300" onClick={() => handleClick(col.label)}>{col.label}
                
                    {getIcons(col.label, sortBy, sortOrder)}
                 </th>,

        }
    })

    // only sort data if sortOrder && sortBy are not null
    // make a copy of 'data'
    // find the correct sortValue function and use it for sorting
    let sortedData = data;

    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy)
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            }
            else {
                return (valueA - valueB) * reverseOrder;
            }
        })
    }
    return <>
        <div>
            {sortOrder} === {sortBy}
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