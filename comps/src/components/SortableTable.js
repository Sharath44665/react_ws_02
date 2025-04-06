import Table from "./Table";

const SortableTable = (props) => {
    const { config } = props;

    const updatedConfig = config.map((col, idx) => {
        if (!col.sortValue) {
            return col
        }
        return {
            ...col,
            header: () => <th>{col.label} is sortable</th>,

        }
    })
    return <>
        <Table {...props} config={updatedConfig} />

    </>

}

export default SortableTable; 