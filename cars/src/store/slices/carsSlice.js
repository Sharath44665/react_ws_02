import { createSlice, nanoid } from "@reduxjs/toolkit";


const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTearm: '',
        data: []
    },
    reducers: {
        changeSearchTearm: (state, action) => {
            state.searchTearm = action.payload
        },
        addCar: (state, action) => {
            // action.payload === {name: 'some name', cost: 333}
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(), // auto generated random id from redux
            })

        },
        removeCar: (state, action) => {
            // action.payload === remove the car with id

            const updated = state.data.filter((car) => {
                return car.id !== action.payload
            });
            state.data = updated
        },

    }

})

export const {changeSearchTearm, addCar, removeCar } = carsSlice.actions;
export const carsrReducer = carsSlice.reducer;