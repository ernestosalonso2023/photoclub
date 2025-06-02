import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Spinner from 'react-bootstrap/Spinner';
import { FaExclamationCircle } from "react-icons/fa"

const modalInfoProcess = (props) => { // ventana modal que informa al usuario que se está procesando su imagen
  return (
    <Modal
      size="xs"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-hcenter">
          <FaExclamationCircle/> &nbsp; {props.title}
        </Modal.Title> 
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
         {props.body}
          <br />
          { props.spinner && <Spinner animation="border" variant="dark" />}
        </div>
      </Modal.Body>
    </Modal>
  )
}
export default modalInfoProcess