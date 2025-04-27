const dataRecord = <typeOfId, typeOfEmail>(id:typeOfId, email:typeOfEmail) => {
    return {
        id,
        email
    }
}

const res = dataRecord(101, 'demo@example.com')
const data = dataRecord('demo1', [2,3,5])
console.log(res)
// { id: 101, email: 'demo@example.com' }

console.log(data)
// { id: 'demo1', email: [ 2, 3, 5 ] }

const eRecord = <typeValue , typeId> (id: typeId, value: typeValue) => {
    return {
        id,
        value
    }
}

// from the below example, it is clear that order does not required
const data1 = eRecord<number[], string>('dd111', [234324, 3343])
console.log(data1) // { id: 'dd111', value: [ 234324, 3343 ] }