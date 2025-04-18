import { useSelector } from "react-redux";

const CarValue = () => {
    const totalCost = useSelector(({cars: {data, searchTerm}}) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        })

        // let cost = 0;
        // for (let car of filteredCars){
        //     cost += car.cost;
        // }
        // return cost; // or
        return filteredCars.reduce((acc, car) => acc+car.cost, 0)
    })
    return <div className="car-value">
        Total cost: ₹{totalCost}
    </div>
}


export default CarValue;