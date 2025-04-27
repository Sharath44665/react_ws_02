interface UserProfile{
    likes: string[]
}

interface User{
    id:string,
    name: string,
    profile?:UserProfile, //might have or not 
}

const meUser : User = {
    id: 'demo1',
    name: 'sharathchandra',
    profile: {
        likes:['dog']
    }
}

const OptionalPropertyDemo = ()=>{

    console.log(meUser.profile?.likes)
    printLog('value get printed')
    return <>
    demo user
    </>
}

const printLog = (value:string, message?:string) =>{
    if(message){
        console.log(message)
    }
    console.log(value)
}

export default OptionalPropertyDemo;