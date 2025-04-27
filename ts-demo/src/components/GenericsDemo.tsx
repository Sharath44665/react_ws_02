const toRecord = (id:number, email:string) => {
    return {
        id,
        email
    }
}

const result = toRecord(101, "demo@example.com")
console.log(result)


function dataRecord <typeOfId>(id:typeOfId, email:string){
    return {
        id,
        email
    }
}

const resultTwo = dataRecord('id1', 'another@example.com')
const resultThree = dataRecord(332, 'someone@example.com')

console.log(resultTwo) 
console.log(resultThree)