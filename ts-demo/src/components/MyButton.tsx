interface ButtonProps {
    label: string,
    btnClick: ()=>void
}

interface IconButtonProps extends ButtonProps { 
    icon: string
}
const MyButton =({label, btnClick}:ButtonProps) => {
    
    return <>
    <button onClick={()=> btnClick()}> {label}</button>
    demo button=
    </>
}

const IconButton = ({label, btnClick, icon}: IconButtonProps) => {
    return <button onClick={()=>btnClick}>
        {icon} {label}
    </button>
}

export {MyButton, IconButton} 