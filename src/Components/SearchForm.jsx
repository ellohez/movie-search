import { useState } from "react";
import axios from "axios";
import { Form, Button, Input, InputGroup, InputGroupText } from "reactstrap"
// import MovieInfo from "./MovieInfo";
import CardComponent from "./CardComponent";

const SearchForm = () => {
    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState({});
    const [filmTitle, setFilmTitle] = useState('Deadpool');
    const apiKey = 'apikey=5e808af1';
    const apiUrl = 'http://www.omdbapi.com/?';
    // TODO - use title from search 
    const url = `${apiUrl}${apiKey}&s=deadpool&type=movie&page=1`;
    console.log(url); 

    const getMovieInfo = () => {
        axios.get("http://www.omdbapi.com/?apikey=64b6f90b&t=" + filmTitle)
        .then(response => {
          if (response.data.Response === "True") {
              console.log(response.data);
              setMovie(Object.assign({}, response.data));
          } else {
              console.log("mnf");
              response.data.Title = "Movie not found"
          }
        });
    };

    const handleClick = (e) => {
       console.log(e.target);
        e.preventDefault();
        getMovieInfo();
        // debugger;
        console.log('Movie:' + movie);
        // console.log(movies[0].Title);
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
            <CardComponent filmInfo={{movie}}/>
           {/* <CardComponent filmInfo={{Title: 'Leon', Plot: 'Film blurb....', Poster: 'Poster URL'}} />  */}
        </div>
    )
}

export default SearchForm;