import { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const ExpandablePanel = ({ header, children }) => {
    const [expanded, setExpanded] = useState(false)

    const handleClick = () => {
        setExpanded(!expanded)
    }
    return <>
        <div className="mb-2 border rounded-2xl">
            <div className="flex p-2 justify-between items-center ">
                <div className="flex flex-row items-center justify-between" onClick={handleClick}>
                    {header}
                </div>
                <div onClick={handleClick} className="cursor-pointer">

                    {
                        expanded ? <GoChevronDown /> : <GoChevronRight />
                    }
                </div>
            </div>
            {
                expanded && <div className="p-2 border-t">
                    {children}
                </div>
            }

        </div>
    </>
}

export default ExpandablePanel;