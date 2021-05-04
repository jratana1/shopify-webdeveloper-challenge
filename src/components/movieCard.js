import Card from 'react-bootstrap/Card'
import NoImage from '../NoImage.svg'

function MovieCard(props) {
    return (
        <Card className="m-3">
            <Card.Img variant="top" alt="No Poster" src={props.poster==="N/A" ? NoImage : props.poster} /> 
            <Card.Body>
                <Card.Title>{props.title} - {props.year}</Card.Title>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    )
}

export default MovieCard

