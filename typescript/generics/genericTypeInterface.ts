const wrapInArray = <T>(value:T) => {
    return [value]
}

const data = wrapInArray('a')
const data2 = wrapInArray(234)

console.log(data)
console.log(data2)