import { searchPackages } from "../../api/queries/searchPackages"
import { PackageSummary } from "../../api/types/PackageSummary"

interface searchLoaderResult{
  searchResults: PackageSummary[]
}

const searchLoader = async ({ request }:{request:Request}) => {
    // console.log(request)
    const { searchParams } = new URL(request.url)
    const term = searchParams.get('term')

    if (!term) {
      throw new Error('search term must be provided')
    }

    const result = await searchPackages(term)

    return {searchResults: result}
}

export {searchLoader}
export type {searchLoaderResult}