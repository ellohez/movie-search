import { useState } from "react";
import { Form, Button, Input, InputGroup, InputGroupText } from "reactstrap"
import MovieInfo from "./MovieInfo";

const SearchForm = () => {
  
    const [filmTitle, setFilmTitle] = useState('Deadpool');
    const handleClick = (e) => {
        e.preventDefault();
        // TODO - load movie info
        return (
            <MovieInfo title={filmTitle}/>
        )
    }

    return (
        <div style={{padding: "10px"}}>
            <Form onSubmit={handleClick}>
                <InputGroup>
                    <InputGroupText>Movie Title</InputGroupText>
                    <Input value={filmTitle} onChange={(e) => setFilmTitle(e.target.value)}/>
                    <Button>Search</Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default SearchForm;