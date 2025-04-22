import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from '../store'
import Button from './Button'
import Skeleton from "./Skeleton";
import { useThunk } from "../hooks/use-thunk";
import UserListItem from "./UserListItem";


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

    const handleUserAdd = (event) => {
        // dispatch(addUser()).unwrap()
        //     .catch(err => setCreatingUserError(err))
        //     .finally(() => setIsCreatingUser(false))

        doCreateUser()
    }

    let content;
    if (isLoadingUsers) {
        content = <Skeleton times={6} className='h-10 w-full' />
    }

    else if (loadingUsersErrors) {
        content = <div>Error: something went wrong</div>
    }
    else {
        content = data.map((user, idx) => {
            return <UserListItem key={idx} user={user} />
            
        })
    }




    return (<>
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl ">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}> + add user</Button>
                {
                    creatingUserError && 'error creating user'
                }
            </div>
            {content}
        </div>
    </>)
}

export default UserList;