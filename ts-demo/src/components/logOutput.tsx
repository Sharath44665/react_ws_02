interface Image {
    src: string
}

// below one is type narrowing
const logOutput = (value: string | number | string [] | Image) =>{
    if (typeof value === 'string'){
        value.toUpperCase()
    }
    if(typeof value === 'number'){
        Math.round(value) 
    }
    if(Array.isArray(value)){
        value.join('')
    }

    if(typeof value === 'object' && !Array.isArray(value)){
        console.log(value.src)
    }
    console.log(value)
}

logOutput('Sharath')
logOutput(123)
logOutput(['red','green', 'blue'])
logOutput({src:'./demo.png'})