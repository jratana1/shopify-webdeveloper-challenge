import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


function Alert(props) {

    const handleClose = () => props.setShow(false);

  
    return (


  
        <Modal show={props.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.alertMsg.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.alertMsg.body}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    );
  }
  
export default Alert