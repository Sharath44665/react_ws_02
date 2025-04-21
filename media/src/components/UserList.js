import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store'
import Button from './Button'
import Skeleton from "./Skeleton";

const UserList = () => {
    const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    const [loadingUsersErrors, setLoadingUsersErrors] = useState(null)
    const dispatch = useDispatch();

    const { data } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        setIsLoadingUsers(true)
        dispatch(fetchUsers()).unwrap()
            // .then(() => {
            //     setIsLoadingUsers(false);
            // })
            .catch((err)=>{
                setLoadingUsersErrors(err)
                setIsLoadingUsers(false);
            })
            .finally(()=>{
                setIsLoadingUsers(false);
            })
    }, [dispatch])


    if (isLoadingUsers) {
        return <Skeleton times={6} className='h-10 w-full' />
    }

    if (loadingUsersErrors) {
        return <div>Error: something went wrong</div>
    }


    const renderedUsers = data.map((user, idx) => {
        return <div key={idx} className="mb-2 border rounded-2xl">
            <div className="flex p-2 justify-between items-center cursor-pointer">
                {user.name}
            </div>

        </div>
    })

    const handleUserAdd = (event) => {
        dispatch(addUser())
    }
    return (<>
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl ">Users</h1>
                <Button onClick={handleUserAdd}> + add user</Button>
            </div>
            {renderedUsers}
        </div>
    </>)
}

export default UserList;