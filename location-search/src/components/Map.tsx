import { Place } from "../api/place";

interface MapProps{
    place: Place | null
}
const Map = ({place}:MapProps) => {
    return <>
        <div>

            map
        </div>
    </>
}

export default Map;