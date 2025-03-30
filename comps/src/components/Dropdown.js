import { useState } from "react";

function Dropdown({options, value, onChange}){
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = ()=>{
        setIsOpen(!isOpen)
    }

    const handleOptionClick = (option)=>{
        setIsOpen(false)
        // console.log(option)
        onChange(option) // user click option
    }

    const renderedOptions = options.map((option, idx)=> {
        return <div key={idx} onClick={ () => handleOptionClick(option)}>
            {option.label}
        </div>
    })
    return <>
    <div>
        <div onClick={handleClick}>{value? value.label : "Select... "}</div>
        {isOpen && <div>{renderedOptions}</div> }
    </div>
    
    </>
}


export default Dropdown;