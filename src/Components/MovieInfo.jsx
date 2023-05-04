import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

const MovieInfo = (title) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movie, setMovie] = useState([]);

    // TODO
    // const [apiKey, setApiKey] = useState("");
    // const filmTitle = useState(filmTitle);

    const key = '5e808af1';
    const baseUrl = 'http://www.omdbapi.com/?apikey='
    
    // Note: the empty deps array (dependency list) at the end of useEffect
    // means it will run once on mount.
    useEffect(() => {
        console.log(`${baseUrl}${key}&t=deadpool`)
        // TODO - use prop variable and split out the /t= option part of the request
        axios.get(`${baseUrl}${key}&t=deadpool`)
        .then((res) => res)
        .then((result) => {
            setIsLoaded(true);
            setMovie(result.data);
        }, 
        (error) => {
            setIsLoaded(true);
            setError(error);
        })
    }, []);

    if (error) {
        return <div>
            Error: {error.message} 
        </div>;
    }
    else if (!isLoaded) {
        return <div>
            Loading... 
        </div>
    }
    else {
        return (
            <ul>
                <CardComponent value={movie}/>
                {console.log({movie})}
            </ul>
        );
    }
}


export default MovieInfo;