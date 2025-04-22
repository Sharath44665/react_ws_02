import { FaTrash } from "react-icons/fa";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

const UserListItem = ({ user }) => {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser)

    const handleClick = () => {
        doRemoveUser(user)
    }

    const header = <>
        <Button loading={isLoading} onClick={handleClick} className='mr-3 border-0 text-red-600' >
            <FaTrash />
        </Button>
        {
            error && <div>Error deleting user</div>
        }
        {user.name}
    </>
    return <>
        <ExpandablePanel header={header}>
            <AlbumsList user={user}/>
        </ExpandablePanel>

    </>
}


export default UserListItem;