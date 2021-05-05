import Button from 'react-bootstrap/Button'

function DeleteMovie(props) {

 const deleteMovie = () => {
    let newList = props.nominations.filter((movie) => movie.imdb !== props.imdb)

    props.setNominations(newList)
 }

    return(

            <Button id={props.imdb} variant="primary" 
                onClick={(e) => deleteMovie()}
            >Delete</Button>

    )
}

export default DeleteMovie