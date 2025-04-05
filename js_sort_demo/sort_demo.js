obj = [
{name: "Tomato", cost: 10, weight: 7},
{name: "Carrot", cost: 15, weight: 2},
{name: "Onion", cost: 5, weight: 7},
]

obj.sort( (a, b) => a.name.localeCompare(b.name))

obj.sort((a,b) => a.cost -b.cost)

// teacher demo

data = [
{name: "Tomato", cost: 10, weight: 7},
{name: "Carrot", cost: 15, weight: 2},
{name: "Onion", cost: 5, weight: 7},
]
const getSortValue = (vegitable) => {
    return vegitable.cost;
}

const sortOrder = 'desc'

// if desc => look at cost
/*
0: {name: 'Carrot', cost: 15, weight: 2}
1: {name: 'Tomato', cost: 10, weight: 7}
2: {name: 'Onion', cost: 5, weight: 7}*/



data.sort((a, b) => {
    const valueA = getSortValue(a)
    const valueB = getSortValue(b)

    const reverseOrder = sortOrder === 'asc'? 1 : -1;

    if (typeof valueA === 'string'){
        return valueA.localeCompare(valueB) *reverseOrder;
    }
    else{
        return (valueA - valueB) * reverseOrder;
    }
})
