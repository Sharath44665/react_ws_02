import Link from "./components/Link";

function App() { 
    return <>
    <Link to='/accordion'> <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Go accordion</span></Link>
    <Link to='/dropdown'><span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">show dropdown</span></Link>
    </>
}


export default App;