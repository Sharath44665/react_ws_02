const PhotosListItem = ({photo})=>{
    return <>
    <div>
        <img className="h-20 w-20" src={photo.url} alt={photo.title} />
    </div>
    </>
}

export default PhotosListItem;