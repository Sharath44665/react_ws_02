import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";


const Link = ({to, children}) => {
    const { navigate } = useNavigation()
    const classes = classNames('font-medium text-blue-600 dark:text-blue-500 hover:underline')

    const handleClick = (event) => {
        if (event.metaKey || event.ctrlKey) return;
        event.preventDefault();
        navigate(to)
    }
    return <>
    <a className={classes} href={to} onClick={handleClick}>{children} </a>
    </>
}

export default Link;