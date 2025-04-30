import { useLoaderData } from "react-router-dom";

const SearchPage = () => {
    const data = useLoaderData();
    console.log(data)
    return <>
    <div>

    search page
    </div>
    </>
}

export default SearchPage;