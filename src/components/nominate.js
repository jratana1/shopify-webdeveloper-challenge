import { useEffect } from 'react'
import Button from 'react-bootstrap/Button'

function Nominate(props) {
 const nominate = (e) => {
    if (props.nominations.length >= 5){
        return(
            alert("You can only nominate up to 5 movies.")
        )
    }
    props.setNominations([...props.nominations, {imdb: props.imdb, title: props.title, year: props.year, poster: props.poster}])
    if (props.nominations.length === 4) {
        return(
            alert("Thank you for your submission.  Please review/edit your choices under the nominations tab.")
        )
    }
 }

    return(
    <Button id={props.imdb} variant="primary" 
                onClick={(e) => nominate(e)}
                disabled={
                    
                    props.nominations.some((movie) => {
                    return (movie.imdb === props.imdb)
                })
            }>Nominate</Button>
    )
}

export default Nominate