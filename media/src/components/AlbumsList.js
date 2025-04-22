import { useFetchAlbumsQuery } from "../store";

const AlbumsList = ({user}) => {
    const {data, error, isLoading } = useFetchAlbumsQuery(user)
    console.log(data)
    console.log(error)
    console.log(isLoading)
    return <>
    <div>
        albums for {user.name}
    </div>
    </>
}

export default AlbumsList;