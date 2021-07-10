import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';
import NorwegianCard from './norwegian/NorwegianCard';

function SearchCard() {

    const [validated, setValidated] = useState(false);
    const [hasBeenFound, setFound] = useState(false);
    const [cardInfo, setCardInfo] = useState(null);

    const [noWord, setNoWord] = useState(null);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const showModal = (missingWord) => {
        setNoWord(missingWord);
        setShow(true);
        return;
    }

    const searchCard = (event) => {

        event.preventDefault();
        event.stopPropagation();

        if (event.currentTarget.checkValidity() === true) {
            setValidated(false);
            const wordInput = document.getElementById("wordInput");
            fetch("/getNorwegianCard", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ word: wordInput.value })
            }).then(response => response.text())
                .then(data => {
                    if (data === "ERR") {
                        console.log("Oops, something went wrong!");
                    } else if (data === "MISSING_WORD") {
                        console.log("Somehow your word wasn't passed to the backend");
                    } else {
                        if (data === '') {
                            showModal(wordInput.value);
                        } else {
                            setCardInfo(JSON.parse(data));
                            setFound(true);
                        }
                    }
                }).catch((error) => {
                    console.error('Error:', error);
                })
        } else {
            setValidated(true);
        }
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col xs={10}>
                    <Form className="mt-2" noValidate validated={validated} onSubmit={searchCard}>
                        <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                            Word
                        </Form.Label>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Search:</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl required id="wordInput" placeholder="Word" />
                            <FormControl.Feedback style={{ order: 4 }} type="invalid">Empty box!</FormControl.Feedback>
                            <Button type="submit" variant="success">
                                Submit
                            </Button>
                        </InputGroup>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col xs={10} className="mt-2">
                    {hasBeenFound ? <NorwegianCard cardObj={cardInfo} /> : null}
                </Col>
                <Col>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Not in dictionary</Modal.Title>
                </Modal.Header>
                <Modal.Body>We couldn't find the word {noWord} in the dictionary</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    )
}

export default SearchCard;