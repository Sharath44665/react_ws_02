import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const SearchInput = () => {
    const [term, setTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit= (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        navigate(`/search?term=${term}`)
    }
    return <>
    <form onSubmit={handleSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
    </form>
    </>

    // alternative way to submit a form like above code
    // return <>
    //     <Form action="/search">
    //         <input name="term" />
    //     </Form>
    // </>
}

export default SearchInput;