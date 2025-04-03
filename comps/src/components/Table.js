const Table = ({ data }) => {
    const renderedRows = data.map((fruit, idx) => {
        return (

            <tr key={idx} className="border-b">
                <td>{fruit.name}</td>
                <td><div className={`p-3 m-2 ${fruit.color}`}></div></td>
                <td>{fruit.score}</td>
            </tr>
        )
    })
    return <>
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    <th>Fruit</th>
                    <th>Color</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>

    </>
}

export default Table;