interface Image {
    src: string
}

interface User {
    username: string
}

const LogOutPutTwo = (val: Image | User) => {
    if ('username' in val) {
        console.log(val)
    }

    else {
        console.log(val)
    }
}

const isUser = (val:Image|User): val is User =>{ // type predicate
    return 'username' in val
}

LogOutPutTwo({ src: 'demo.png' })
LogOutPutTwo({ username: 'sharath' })