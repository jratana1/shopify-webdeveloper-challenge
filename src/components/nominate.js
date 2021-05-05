import Button from 'react-bootstrap/Button'




function Nominate(props) {

 const nominate = (e) => {
    if (props.nominations.length >= 5){
        props.setAlertMsg({title: "You can only nominate up to 5 movies.", body: "Go to the nominations page to review/edit your choices."})
        props.setShow(true)
        return
    }
    props.setNominations([...props.nominations, {imdb: props.imdb, title: props.title, year: props.year, poster: props.poster}])

    if (props.nominations.length === 4) {
        props.setAlertMsg({title:"Thank you for your submission.", body: "Please review/edit your choices under the nominations tab."})
        props.setShow(true)
    }

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