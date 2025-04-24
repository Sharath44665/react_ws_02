import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton'
import ExpandablePanel from './ExpandablePanel';
import Button from './Button'

const AlbumsList = ({ user }) => {
    const { data, error, isLoading } = useFetchAlbumsQuery(user)
    const [addAlbum, results] = useAddAlbumMutation()


    const handleAddAlbum = ()=>{
        addAlbum(user)
    }
    let content;
    if (isLoading) {
        content = <Skeleton times={3} />
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
        <div>
            albums for {user.name}
            <Button onClick={handleAddAlbum}>
                + add albums
            </Button>
        </div>
        <div>
            {content}
        </div>
    </>
}

export default AlbumsList;