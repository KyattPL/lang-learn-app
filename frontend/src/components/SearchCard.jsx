import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

function SearchCard() {

    const [validated, setValidated] = useState(false);

    let hasBeenFound = false;
    let cardInfo = null;

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
                body: JSON.stringify({word: wordInput.value})
            }).then(response => response.text())
            .then(data => {
                if (data === "WORD_NOT_FOUND") {
                    console.log("Oops, no word there!");
                } else if (data === "MISSING_WORD") {
                    console.log("Somehow your word wasn't passed to the backend");
                } else {
                    hasBeenFound = true;
                    cardInfo = data;
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
                                <FormControl.Feedback style={{order: 4}} type="invalid">Empty box!</FormControl.Feedback>
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
                <Col>
                    { hasBeenFound ? <div>Found it! {cardInfo} </div> : null }
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchCard;