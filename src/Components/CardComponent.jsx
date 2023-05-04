import { useState } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';

const CardComponent = ({Title, Poster, Plot}) => {

    return (
        <>
    {/* This is a wider card with supporting text below as a natural lead-in to 
    additional content. */}
            <Card className="my-2">
                <CardImg alt="Card image cap"
                    // src="https://picsum.photos/900/180"
                    src={Poster}
                    style={{
                    height: 180}} top width="100%"
                />
                <CardBody>
                    <CardTitle tag="h5">
                       {Title}
                    </CardTitle>
                    <CardText>
                        {Plot}
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

export default CardComponent;