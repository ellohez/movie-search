import { useState } from "react";
import { Form, Button, Input, InputGroup, InputGroupText } from "reactstrap"
import MovieInfo from "./MovieInfo";

const SearchForm = () => {
  
    const [filmTitle, setFilmTitle] = useState("");
    function handleSubmit() {
        // TODO - load movie info
        MovieInfo(filmTitle);
    }

    return (
        <div style={{padding: "10px"}}>
            <Form onSubmit={handleSubmit()}>
                <InputGroup>
                    <InputGroupText>Movie Title</InputGroupText>
                    <Input value={filmTitle} 
                            onChange={(e) => setFilmTitle(e.target.value)}/>
                    <Button onClick={handleClick()}>Search</Button>
                </InputGroup>
            </Form>
        </div>
    )
}

export default SearchForm;