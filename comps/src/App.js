import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'

function App() {
    return <>
            <Link to="/accordion">Go to accordion</Link>
            <Link to="/dropdown">Go to dropdown</Link>
            <Link to="/btn">Button</Link>
            <div>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
                <Route path="/btn">
                    <ButtonPage />
                </Route>
            </div> 
    </>
}


export default App;