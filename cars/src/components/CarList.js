import { useSelector, useDispatch } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedCars = createSelector(
    [(state) => state.cars.data, (state) => state.cars.searchTerm],
    (data, searchTerm) =>
        data.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
);

const CarList = () => {
    const dispatch = useDispatch()

    // const cars = useSelector(({cars: {data, searchTearm}}) => {
    //     return data.filter((car) => car.name.toLowerCase().includes(searchTearm.toLowerCase()));
    // })

    const cars = useSelector(memoizedCars);
    const name = useSelector((state) => state.form.name);

    // return {
    //     cars: cars,
    //     name: name
    // }
    const handleDelete = (car) => {
        dispatch(removeCar(car.id))
    }

    const renderedCars = cars.map((car, idx) => { 
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (<div key={idx} className={`panel ${bold && 'bold'}`}>
            <p>{car.name} - ₹{car.cost} </p>
            <button className="button is-danger" onClick={() => handleDelete(car)}>Delete</button>
        </div>)
    })
    // console.log(cars)
    return <div className="car-list">
        {renderedCars}
        <hr />
    </div>
}


export default CarList;