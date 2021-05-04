import Button from 'react-bootstrap/Button'
import Alert from './alert'
import { useState } from 'react'



function Nominate(props) {
    const [show, setShow] = useState(false);
    const [alertMsg, setAlertMsg] = useState({title: "", body: ""})

 const nominate = (e) => {
    if (props.nominations.length >= 5){
        setAlertMsg({title: "You can only nominate up to 5 movies.", body: "Go to the nominations page to review/edit your choices."})
        setShow(true)
        return
    }
    props.setNominations([...props.nominations, {imdb: props.imdb, title: props.title, year: props.year, poster: props.poster}])

    if (props.nominations.length === 4) {
        setAlertMsg({title:"Thank you for your submission.", body: "Please review/edit your choices under the nominations tab."})
        setShow(true)
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
            <Alert setShow={setShow} show={show} alertMsg={alertMsg}></Alert>
            </>
    )
}

export default Nominate