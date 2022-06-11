import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';

const MovieModal = ({ addMovie, handleClose, show }) => {
    // console.log("#fct", addMovie)
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        img: "",
        year: "",
        rate: 0
    })
    const handleChange = (e) => {
        setMovie({ ...movie, [e.target.id]: e.target.value })
    }
    const handleRate = (newRating) => {
        setMovie({ ...movie, rate: newRating })
    }
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup size="sm" className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-sm">Tile</InputGroup.Text>
                        <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            id="title"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Description
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            id="description"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Movie Poster URL
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            id="img"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <br />
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="inputGroup-sizing-default">
                            Year of release
                        </InputGroup.Text>
                        <Form.Control
                            aria-label="Small"
                            aria-describedby="inputGroup-sizing-sm"
                            id="year"
                            onChange={handleChange}
                        />
                    </InputGroup>
                    <ReactStars
                        count={5}
                        onChange={handleRate}
                        size={24}
                        activeColor="#ffd700"
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        addMovie(movie);
                        handleClose()
                    }}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MovieModal