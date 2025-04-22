import { FaTrash } from "react-icons/fa";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

const UserListItem = ({ user }) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user)
    }
    return <div key={user.id} className="mb-2 border rounded-2xl">
        <div className="flex p-2 justify-between items-center cursor-pointer">
            <div className="flex flex-row items-center justify-between">

            <Button loading={isLoading} onClick={handleClick } className='mr-3' >
                <FaTrash />
            </Button>
            {
                error && <div>Error deleting user</div>
            }
            {user.name}
            </div>
        </div>
    </div>
}


export default UserListItem;