interface Car {
    model:string,
    year:number
}
const printCar = (car:Car) =>{
    console.log(car)
}

const mustang:Car ={
    model:'mustang',
    year: 1023
}

// const mahindra:Car = {
//     model:'ben',
//     year: 'dwwee' // compile time error
// }
printCar(mustang)
// printCar(mahindra)