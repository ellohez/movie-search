import axios from "axios";
import { useEffect } from "react";

const MovieInfo = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const key = '5e808af1';
    const baseUrl = 'http://www.omdbapi.com/?apikey='
    // Note: the empty deps array (dependency list) at the end of useEffect
    // means it will run once on mount.
    useEffect(() => {
        // TODO - split out the /t= option part of the request
        axios.get(`${baseUrl}${key}?t=`)
        .then((res) => res)
        .then((result) => {
            setIsLoaded(true);
            setItems(result.data.data);
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
                {console.log(items)}
            </ul>
        );
    }
}
