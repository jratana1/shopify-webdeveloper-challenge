import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import MovieCard from './movieCard'


function Alert(props) {

    const handleClose = () => props.setShow(false);

    function mapNominationsToCards() {
      return props.nominations.map((movie, index) => {

        return <MovieCard  
                          key={index} imdb={movie.imdb} 
                          title={movie.title} 
                          year={movie.year} 
                          poster={movie.poster}
                          show={props.show}
                          setAlertMsg={props.setAlertMsg}
                          nominations= {props.nominations} 
                          setNominations={props.setNominations} 
                          ></MovieCard>
      })
    }

    return (
  
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.alertMsg.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{mapNominationsToCards()}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default Alert