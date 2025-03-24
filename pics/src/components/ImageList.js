import './imageList.css'
import ImageShow from './ImageShow';

const ImageList = (props) => {
    const {images} = props;

    const renderedImages = images.map((image, idx) => {
        return <ImageShow image={image} key={idx} />
    })
    return <div className='image-list'>{renderedImages} </div>
}

export default ImageList;