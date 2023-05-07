// import { useState } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const CardComponent = ({movie}) => {

    // const {Title, Plot, Poster} = props;
    // if (!movieArray.length) return <div>No props</div>
    
    // console.log(props.Title);

    if(movie) {
        console.log('Props in card component:' + movie);
        return (
            <>
            {/* TODO - fill in the Title etc. */}
                {/* This is a wider card with supporting text below as a natural lead-in to 
                additional content. */}
                <Card className="my-2">
                <CardImg alt="Card image cap"
                    src="https://picsum.photos/900/180"
                    // src={props.filmInfo.Poster}
                    style={{
                    height: 180}} top width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {/* {Title} */}
                    {/* <p>TITLE</p> */}
                    </CardTitle>
                    <CardText>
                        {/* {Plot} */}
                        {/* props.filmInfo.Plot */}
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        Last updated 3 mins ago
                        </small>
                    </CardText>
                </CardBody>
            </Card>
            </> 
        )
    }
    return <>
{/* This is a wider card with supporting text below as a natural lead-in to 
                additional content. */}
                <Card className="my-2">
                <CardImg alt="Card image cap"
                    src="https://picsum.photos/900/180"
                    // src={props.filmInfo.Poster}
                    style={{
                    height: 180}} top width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                    {/* {Title} */}
                    {/* <p>TITLE</p> */}
                    </CardTitle>
                    <CardText>
                        {/* {Plot} */}
                        {/* props.filmInfo.Plot */}
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        Last updated 3 mins ago
                        </small>
                    </CardText>
                </CardBody>
            </Card>
        </>
}

export default CardComponent;