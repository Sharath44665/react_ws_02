import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel';
import Button from './Button'

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()
    
    const handleAddAlbum = () => {
        addAlbum(user)
    }
    let content;
    if (isLoading) {
        content = <Skeleton className='h-10 w-full' times={3} />
    }
    else if (error) {
        content = <div>Error while loading albums, please contact your admin</div>
    }
    else {

        content = data.map((album, idx) => {
            const header = <div>{album.title}</div>
            return <ExpandablePanel key={idx} header={header}>
                list of photos in the album
            </ExpandablePanel>
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