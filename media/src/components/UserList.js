import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store'
import Button from './Button'
import Skeleton from "./Skeleton";
import {useThunk} from "../hooks/use-thunk";


const UserList = () => {
    // const [isLoadingUsers, setIsLoadingUsers] = useState(false)
    // const [loadingUsersErrors, setLoadingUsersErrors] = useState(null)
    // const [isCreatingUser, setIsCreatingUser] = useState(false)
    // const [creatingUserError, setCreatingUserError] = useState(null)

    const [doFetchUsers, isLoadingUsers, loadingUsersErrors] = useThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)
    // const dispatch = useDispatch();

    const { data } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => { 
        doFetchUsers()
    }, [doFetchUsers])


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
        // dispatch(addUser()).unwrap()
        //     .catch(err => setCreatingUserError(err))
        //     .finally(() => setIsCreatingUser(false))

        doCreateUser()
    }
    return (<>
        <div>
            <div className="flex flex-row justify-between m-3">
                <h1 className="m-2 text-xl ">Users</h1>
                {
                    isCreatingUser ? 'creatingUser' : <Button onClick={handleUserAdd}> + add user</Button>
                }
                {
                    creatingUserError && 'error creating user'
                }
            </div>
            {renderedUsers}
        </div>
    </>)
}

export default UserList;