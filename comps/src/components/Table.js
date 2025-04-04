const Table = ({ data, config }) => {

    const renderedHeaders = config.map((item, idx) => {
        return <th key={idx}>{item.label}</th>

    })
    const renderedRows = data.map((cellData, idx) => {
        const renderedCells = config.map((column, id) => {
            return <td key={id} className="p-2" >{column.render(cellData)}</td>
        })
        return (

            <tr key={idx} className="border-b">
                {renderedCells}
            </tr>
        )
    })
    return <>
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>

    </>
}

export default Table;