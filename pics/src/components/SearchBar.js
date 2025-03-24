import './searchBar.css'
import { useState } from "react";

const SearchBar = (props) => {
    const { onSubmit } = props;
    const [term, setTerm] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value)
    }
    return <div className='search-bar'>
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Tearm: </label>
            <input onChange={handleChange} />
        </form>

    </div>
}

export default SearchBar;