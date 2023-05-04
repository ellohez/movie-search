import { useState } from "react";
import { Button, Input, InputGroup, InputGroupText } from "reactstrap"

const SearchForm = () => {
  
    const [movieTitle, setMovieTitle] = useState("");
    function handleClick() {

        setMovieTitle();
    }

    return (
        <div style={{padding: "10px"}}>
            <InputGroup>
                <InputGroupText>Movie Title</InputGroupText>
                <Input id={} placeholder="Deadpool"/>
                <Button onClick={handleClick()}>Search</Button>
            </InputGroup>
        </div>
    )
}

export default SearchForm;