import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function SearchCardModal({show, noWord, handleClose}) {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Not in dictionary</Modal.Title>
            </Modal.Header>
            <Modal.Body>We couldn't find the word {noWord} in the dictionary</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose} data-testid="testCloseModal">
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default SearchCardModal;