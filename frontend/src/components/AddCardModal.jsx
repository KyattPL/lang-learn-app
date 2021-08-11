import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AddCardModal({show, addedWord, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Added to the dictionary</Modal.Title>
            </Modal.Header>
            <Modal.Body>The word "{addedWord}" has been added to the dictionary</Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={handleClose} data-testid="testCloseAddModal">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddCardModal;