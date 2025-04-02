import Link from "./Link";


const Sidebar = () => {
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Button', path: '/btn'},
        {label: 'Modal', path: '/modal'},

 
    ]

    const renderedLinks = links.map((link, idx) => {
        return <Link className='mb-3' activeClassName='font-semibold border-l-4 border-blue-600 pl-2' key={idx} to={link.path} >{link.label}</Link>
    })
    return <>
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start" >
        {renderedLinks}
    </div>
    </>
}

export default Sidebar;