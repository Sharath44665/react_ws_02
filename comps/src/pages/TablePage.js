import Table from "../components/Table";

const TablePage = () => {

    const data = [
        {name: 'orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
        {name: 'Blueberry', color: 'bg-indigo-500', score: 2},
    ]
    return <>
    <Table data={data} />
    </>
}


export default TablePage;