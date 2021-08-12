import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useState, useRef } from 'react';

import { fetchCheckDeletePassword } from '../utils/fetchCheckDeletePassword.js';
import { fetchDeleteCard } from '../utils/fetchDeleteCard.js';

function DeleteCardModal({ cardLang, cardId, translationId }) {

    const [isShown, setIsShown] = useState(false);
    const [validated, setValidated] = useState(false);
    const passInput = useRef(null);

    const handleClose = () => {
        setIsShown(false);
    }

    const handleOpen = () => {
        setIsShown(true);
    }

    const handleDelete = () => {

        const password = passInput.current.value;
        const passInpObj = document.getElementById("passInput");

        setValidated(false);

        fetchCheckDeletePassword(password).then(res => {
            if (res === "Forbidden") {
                passInpObj.setCustomValidity("Wrong password");
            } else {
                passInpObj.setCustomValidity("");
                fetchDeleteCard(password, cardLang, cardId, translationId).then(res => {
                    window.location.reload();
                }).catch(err => {
                    console.error("Error: ", err);
                });
            }
        }).then(() => {
            setValidated(true);
        }).catch(error => {
            console.error("Error: ", error);
        });
    }

    const formSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        handleDelete();
    }

    return (
        <>
            <Button variant="danger" onClick={handleOpen}>
                Delete
            </Button>
            <Modal show={isShown} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Authorization required
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} id="passwordForm" onSubmit={formSubmit}>
                        <Form.Group>
                            <Form.Label>Please type in a password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" ref={passInput} id="passInput" />
                            <Form.Control.Feedback type="invalid">Wrong password</Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default DeleteCardModal;