import { useState } from "react";

function Accordion({items}){
    const [expandedIdx, setExpandedIdx] = useState(0);
    const renderedItems = items.map((item, idx)=> {
        const isExpanded = idx === expandedIdx

        return (
            <div key={idx}>
                <div>{item.label}</div>
                {isExpanded && <div>{item.content} </div> }
                
            </div>
        )
    })
    return <div>{renderedItems} </div>
}

export default Accordion;