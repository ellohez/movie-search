import { useState } from "react";
import axios from "axios";
import { Form, Button, Input, InputGroup, InputGroupText } from "reactstrap"
// import MovieInfo from "./MovieInfo";
import CardComponent from "./CardComponent";

const SearchForm = () => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState([]);
    const [filmTitle, setFilmTitle] = useState('Deadpool');
    const apiKey = 'apikey=5e808af1';
    const apiUrl = 'http://www.omdbapi.com/?';
    // TODO - use title from search 
    const url = `${apiUrl}${apiKey}&s=deadpool&type=movie&page=1`;
    console.log(url);

    const getMovieInfo = () => {
        debugger;
        axios.get(url)
        .then((res) => {
            if(res) {
                // setIsLoaded(true);
                console.log(res.data)
                // TODO - fix disconnected port error
                // setMovie(res.data.Search);
            } else {
                // (error) => {
                // setIsLoaded(true);
                // TODO - is loading on screen?
                // setError(error);
                console.log("Movie not found")
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const handleClick = (e) => {
       console.log(e.target);
        e.preventDefault();
        getMovieInfo();
    }

    return (
        <div style={{padding: "10px"}}>
            <Form onSubmit={(e) => handleClick(e)}>
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