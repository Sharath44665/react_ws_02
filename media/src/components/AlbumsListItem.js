import Button from './Button';
import ExpandablePanel from './ExpandablePanel';
import { GoTrash } from 'react-icons/go';
import { useRemoveAlbumMutation } from '../store'

const AlbumsListItem = ({ album }) => {
    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleRemoveAlbum = ()=>{
        removeAlbum(album)
    }

    const header = <div className='flex'>
        <Button onClick={handleRemoveAlbum} loading={results.isLoading} className='border-0 text-red-500'><GoTrash /></Button>
        {album.title}
    </div>
    return <>
        <ExpandablePanel key={album.id} header={header}>
            list of photos in the album
        </ExpandablePanel>
    </>
}

export default AlbumsListItem;