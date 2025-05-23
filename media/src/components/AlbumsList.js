import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel';
import Button from './Button'
import AlbumsListItem from "./AlbumsListItem";

const AlbumsList = ({ user }) => {
    const { data, error, isFetching } = useFetchAlbumsQuery(user)
    useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()
    
    const handleAddAlbum = () => {
        addAlbum(user)
    }
    let content;
    if (isFetching) {
        content = <Skeleton className='h-10 w-full' times={3} />
    }
    else if (error) {
        content = <div>Error while loading albums, please contact your admin</div>
    }
    else {

        content = data.map((album, idx) => {
           return <AlbumsListItem key={idx} album={album} />
        })
    }
    return <>
        <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">

                albums for {user.name}
            </h3>
            <Button loading={results.isLoading} onClick={handleAddAlbum}>
                + add albums
            </Button>
        </div>
        <div>
            {content}
        </div>
    </>
}

export default AlbumsList;