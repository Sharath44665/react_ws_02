import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers} from '../store'

const UserList = () => {
    const dispatch = useDispatch();

    const {isLoading, data, error} = useSelector((state) => {
        return state.users;
    })

    useEffect (() => {
        dispatch(fetchUsers())
    }, [dispatch])


    if ( isLoading ){
        return <div>Loading...</div>
    }

    if (error){
        return <div>Error: something went wrong</div>
    }

    return (<>
    {data.length}
    </>)
}

export default UserList;