import { configureStore } from "@reduxjs/toolkit";
import { carsrReducer, addCar, removeCar, changeSearchTearm } from "./slices/carsSlice";
import { formReducer, changeName, changeCost} from './slices/formSlice';


const store = configureStore({
    reducer : {
        cars: carsrReducer,
        form: formReducer,
    }
})

export {store, changeName, changeCost, addCar, removeCar, changeSearchTearm}