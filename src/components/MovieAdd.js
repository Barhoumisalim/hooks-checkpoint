import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { BiBookmarkPlus } from "react-icons/bi";
import MovieModal from './MovieModal';

const MovieAdd = ({ addMovie }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                <BiBookmarkPlus />
            </Button>
            <MovieModal show={show} handleClose={handleClose} addMovie={addMovie} />
        </div>
    )
}

export default MovieAdd