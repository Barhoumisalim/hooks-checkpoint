import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Form, InputGroup } from 'react-bootstrap';
const MovieSearch = ({ setKeyWord, keyWord, setKeyRate, keyRate }) => {
    const handleWordChange = (e) => {
        setKeyWord(e.target.value)
    }
    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">
                    Search by movie title
                </InputGroup.Text>
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    onChange={handleWordChange}
                />
            </InputGroup>
            {keyWord ? <p>The movie you are looking for is {keyWord}</p> : null}
            <ReactStars
                count={5}
                onChange={(newRating) => setKeyRate(newRating)}
                size={24}
                value={keyRate}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default MovieSearch