interface Car{
    model:string,
    year:number,
    setYear: (nextYear:number) => void;
    setName: (newName:string) => void;
    getDescription: () => string;
}


const mustang:Car ={
    model:'mustang',
    year:2025,

    setName: (newName:string) =>{
        this.model = newName; 
    },
    setYear: (nextYear: number)=>{
        this.year= nextYear;
    },
    getDescription: () =>{
        return `your new car is ${this.model} and year is: ${this.year}`
    }


}


console.log(mustang)

mustang.setName('demo new model name')
mustang.setYear(2022)

console.log(mustang.getDescription())