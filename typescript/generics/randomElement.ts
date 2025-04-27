const randomElement = <T>(arr:T[]) => {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}

const data = randomElement([4, 2 , 21, 44,66 ])
console.log(data) // 44
const data2 = randomElement(['news', 'right' , 'center', 'left','damn' ])
console.log(data2) // right