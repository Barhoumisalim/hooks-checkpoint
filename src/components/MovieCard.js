import React from 'react'
import { Card, ListGroup } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import { BiSun } from "react-icons/bi";

const MovieCard = ({ movie, index }) => {
    // console.log("#movie1", movie)
    return (
        <div>
            <Card key={index} style={{ width: '16rem', margin: 20, backgroundColor: "#154788", padding: 10 }} border="dark">
                <Card.Img variant="top" src={movie.img} style={{ width: 255 }} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{movie.year}</ListGroup.Item>
                    <ListGroup.Item>
                        <ReactStars
                            count={5}
                            value={movie.rate}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        // char={<BiSun />}
                        />
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default MovieCard