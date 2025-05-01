import { useLoaderData } from "react-router-dom";
import { searchLoaderResult } from "./searchLoader";
import PackageListItem from "../../components/PackageListItem";

const SearchPage = () => {
    const {searchResults} = useLoaderData() as searchLoaderResult;
    
    const renderedResults = searchResults.map((result) => {
        return <PackageListItem pack={result} key={result.name}/>
    })
    return <>
    <div>
    <h1 className="text-2xl font-bold my-6">

    search result
    </h1>
    <div className="space-y-4 mt-4">
        {renderedResults}
    </div>
    </div>
    </>
}

export default SearchPage;