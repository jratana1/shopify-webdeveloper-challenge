import Card from 'react-bootstrap/Card'
import NoImage from '../NoImage.svg'
import Nominate from './nominate'
import DeleteMovie from './deleteMovie'

function MovieCard(props) {
    return (
        <Card className="m-3">
            <Card.Img variant="top" alt="No Poster" src={props.poster==="N/A" ? NoImage : props.poster} /> 
            <Card.Body>
                <Card.Title>{props.title} - {props.year}</Card.Title>
            </Card.Body>
            <Card.Footer>
                {props.show ? <DeleteMovie imdb={props.imdb} setNominations={props.setNominations} nominations={props.nominations}></DeleteMovie> : 
                <Nominate poster={props.poster} 
                          title={props.title} 
                          year={props.year} 
                          imdb={props.imdb} 
                          setShow={props.setShow}
                          setAlertMsg={props.setAlertMsg}
                          setNominations={props.setNominations} 
                          nominations={props.nominations}></Nominate>
                        }
            </Card.Footer>
        </Card>
    )
}

export default MovieCard

