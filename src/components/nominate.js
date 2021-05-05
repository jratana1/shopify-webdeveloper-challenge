import Button from 'react-bootstrap/Button'

function Nominate(props) {

 const nominate = (e) => {
    props.setShow(true)
    if (props.nominations.length >= 5){
        props.setAlertMsg({title: "You can only nominate up to 5 movies.", body: "Go to the nominations page to review/edit your choices."})
        return
    }
    
    props.setNominations([...props.nominations, {imdb: props.imdb, title: props.title, year: props.year, poster: props.poster}])
    props.setAlertMsg({title:"Thank you for your submission.", body: "Please review/edit your choices under the nominations tab."})
 }

    return(
        <>
    <Button id={props.imdb} variant="primary" 
                onClick={(e) => nominate(e)}
                disabled={               
                    props.nominations.some((movie) => {
                    return (movie.imdb === props.imdb)
                })
            }>Nominate</Button>
            </>
    )
}

export default Nominate