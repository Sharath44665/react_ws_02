import { useState } from "react";
import { FaCircleChevronDown, FaCircleChevronRight } from "react-icons/fa6";

function Accordion({items}){
    const [expandedIdx, setExpandedIdx] = useState(-1);
    const handleClick = (idx)=>{
        if(expandedIdx === idx) setExpandedIdx(-1)
        else setExpandedIdx(idx)
    }
    const renderedItems = items.map((item, idx)=> {
        const isExpanded = idx === expandedIdx
        
        const icon = <span>{isExpanded ? <FaCircleChevronDown />:<FaCircleChevronRight />} </span>

        
        return (
            <div key={idx} className="border border-black p-3 mb-2">
                <div onClick={()=>handleClick(idx)} className="flex justify-between gap-2 font-semibold ">{item.label} {icon}</div>
                {isExpanded && <div>{item.content} </div> }
                
            </div>
        )
    })
    return <div className="mt-3 mx-2">{renderedItems} </div>
}

export default Accordion;