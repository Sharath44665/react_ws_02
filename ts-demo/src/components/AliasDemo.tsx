interface Image {
    src: string
}

type printValue = string | number | string[] | Image

const makePrint = (value : printValue) => {
    console.log(value)
}

const AliasDemo =  () => {
    makePrint('demo')
    return <>
    Alias Demo
    </>
}

export default AliasDemo;