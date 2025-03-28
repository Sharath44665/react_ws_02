import Button from "../components/Button";
import { FiBell } from "react-icons/fi";
import { FaCloudDownloadAlt } from "react-icons/fa";
function ButtonPage() {
    const handleClick = () => {
        console.log("clicked on first button")
    }
    return <div>
        ButtonPage
        <div>

            <Button className='mb-4' success onClick={handleClick} ><FiBell />Demo one</Button>
        </div>
        <div>
            <Button secondary onMouseEnter={() => { console.log("second button") }} >dont click me</Button>
        </div>
        <div>
            <Button warning rounded> <FaCloudDownloadAlt /> click me</Button>
        </div>
        <div>
            <Button primary rounded > primary me</Button>
        </div>

        <div>
            <Button outline> outline me</Button>
        </div>
    </div>
}


export default ButtonPage;