import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from './Button'
import Skeleton from './Skeleton'
import PhotosListItem from './PhotosListItem'

const PhotosList = ({ album }) => {
    const {data, isFetching, error} = useFetchPhotosQuery(album)
    const [addPhoto, addPhotoResults] = useAddPhotoMutation()

    const handleAddPhoto = () =>{
        addPhoto(album)
    }

    let content;
    if(isFetching){
        content = <Skeleton className='h-8 w-8' times={4} />
    }
    else if (error){
        content = <div>Error while fetching photos.</div>
    }
    else {
        content = data.map((photo, idx) =>{
            return <PhotosListItem key={idx} photo={photo} />
        })
    }
    return <>
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className='text-lg font-bold'>Photos in {album.title}</h3>   
                <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>+ Add Photo</Button>
            </div>
            <div className="mx-8 flex flex-row flex-wrap justify-center" >{content} </div>
        </div>
        
    </>
}

export default PhotosList;