import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({children}) => { 

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(()=> {
        const handler = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handler)

        return () => {
            window.removeEventListener('popstate', handler)
        }
    }, [])

    const navigate = (to) => {
        window.history.pushState({}, '', to)
        setCurrentPath(to)
    }

    return <NavigationContext.Provider value={{}}>
        <div>
            <button onClick={() => navigate('/accordion')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >got to accordion</button>
            <button onClick={() => navigate('/dropdown')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" >see dropdown</button>
        </div>
        {currentPath}
        {children}
    </NavigationContext.Provider>
}

export {NavigationProvider}
export default NavigationContext;