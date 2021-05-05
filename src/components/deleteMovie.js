import Button from 'react-bootstrap/Button'

function DeleteMovie(props) {

 const deleteMovie = (e) => {

    
    // props.setNominations(newList)
 }

    return(

            <Button id={props.imdb} variant="primary" 
                onClick={(e) => deleteMovie(e)}
            >Delete</Button>

    )
}

export default DeleteMovie