import Button from 'react-bootstrap/Button'

function Nominate(props) {
 const nominate = (e) => {
    props.setNominations([...props.nominations, {imdb: props.imdb, title: props.title, year: props.year, poster: props.poster}])
 }

    return(
    <Button id={props.imdb} variant="primary" onClick={(e) => nominate(e)}>Nominate</Button>
    )
}

export default Nominate