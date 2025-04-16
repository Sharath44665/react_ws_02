import { useSelector } from "react-redux";

const CarList = () => {
    const cars = useSelector((state) => {
        return state.cars.data;
    })

    const handleDelete = (car) => {

    }

    const renderedCars = cars.map((car, idx) => {
        return (<div key={idx} className="panel">
            <p>{car.name} - ₹{car.cost} </p>
            <button className="button is-danger" onClick={() => handleDelete(car)}>Delete</button>
        </div>)
    })
    console.log(cars)
    return <div className="car-list">
        {renderedCars}
        <hr />
    </div>
}


export default CarList;