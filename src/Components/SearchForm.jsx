import { useState } from "react";
import axios from "axios";
import { Form, Button, Input, InputGroup, InputGroupText } from "reactstrap"
// import MovieInfo from "./MovieInfo";
import CardComponent from "./CardComponent";

const SearchForm = () => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState("");
    const [filmTitle, setFilmTitle] = useState('Deadpool');
    const key = '5e808af1';
    const baseUrl = 'http://www.omdbapi.com/?apikey=';
    const url = `${baseUrl}${key}&t=deadpool`;
    console.log(url);

    const handleClick = (e) => {
       
        e.preventDefault();
        // TODO - load movie info
        axios.get(url)
        // .then((res) => res)
        .then((res) => {
            // setIsLoaded(true);
            console.log(res.data)
            setMovie(res.data);
        // }, 
        // (error) => {
            // setIsLoaded(true);
            // setError(error);
        })
    }

    return (
        <div style={{padding: "10px"}}>
        <h1>{movie.Title}</h1>
            <Form onSubmit={() => handleClick()}>
                <InputGroup>
                    <InputGroupText>Movie Title</InputGroupText>
                    <Input value={filmTitle} onChange={(e) => setFilmTitle(e.target.value)}/>
                    <Button type="submit">Search</Button>
                </InputGroup>
            </Form>
            <CardComponent filmInfo={movie}/>
        </div>
    )
}

export default SearchForm;