interface User {
    username: string
}

interface Message {
    content: string
}

interface Image{
    link: string
}

// const fetchUser = async () => {
//     const res = await fetch('/users')
//     const json = await res.json()
//     return json as User
// }   

// const fetchMessage = async () => {
//     const res = await fetch('/message')
//     const json = await res.json()
//     return json as Message
// }   

// const run = async () => {
//     const user = await fetchUser()
//     const msg = await fetchMessage()
// }


// writing above code in single line as shown in below

const fetchData = async  <T> (path:string) => {
    const res = await fetch(path)
    const json = res.json()
    return json as T
}   


const run = async () => {
    const user = await fetchData<User>('/user')
    const msg = await fetchData<Message>('/message')
    const image = await fetchData<Image>('/img')
}
