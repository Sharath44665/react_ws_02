import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "../store";

const PhotosListItem = ({ photo }) => {
    const [removePhoto ] =useRemovePhotoMutation()
    const handleRemovePhoto=  () =>{
        removePhoto(photo)
    }
    return <>
        <div onClick={handleRemovePhoto} className="relative m-2 cursor-pointer">
            <img className="h-20 w-20" src={photo.url} alt={photo.title} />
            <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
                < GoTrash className="text-3xl" />
            </div>
        </div>
    </>
}

export default PhotosListItem;