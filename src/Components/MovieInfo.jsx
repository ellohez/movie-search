// import axios from "axios";
// import { useEffect, useState } from "react";
// import CardComponent from "./CardComponent";

// const MovieInfo = (props) => {
    
//     const {title} = props;
//     // TODO
//     // const [apiKey, setApiKey] = useState("");
//     // const filmTitle = useState(filmTitle);
//     console.log(title);

 
    
//     // Note: the empty deps array (dependency list) at the end of useEffect
//     // means it will run once on mount.
//     useEffect(() => {
//         console.log(`${baseUrl}${key}&t=deadpool`)
//         // TODO - use prop variable and split out the /t= option part of the request
       
//     }, []);

//     if (error) {
//         return <div>
//             Error: {error.message} 
//         </div>;
//     }
//     else if (!isLoaded) {
//         return <div>
//             Loading... 
//         </div>
//     }
//     else {
//         return (
//             <ul>
                
//                 {console.log({movie})}
//             </ul>
//         );
//     }
// }


// export default MovieInfo;

// axios.get(url)
// .then((response) => {
//     if(response.data.Response === "True") {
//         // setIsLoaded(true);
//         console.log(response.data)
//         setMovie(response.data);
//     } else {
//         // (error) => {
//         // setIsLoaded(true);
//         // TODO - is loading on screen?
//         // setError(error);
//         console.log("Movie not found")
//     }