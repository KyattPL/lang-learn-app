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

    const searchCard = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }

    return (
        <Container fluid>
            <Row>
                <Col>
                </Col>
                <Col xs={10}>
                    <Form className="mt-2" noValidate validated={validated} onSubmit={searchCard}>
                        <Form.Row>
                            <Col className="flex-grow-1">
                                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                                    Word
                                </Form.Label>
                                <InputGroup className="mb-2">
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>Search:</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <FormControl required id="inlineFormInputGroup" placeholder="Word" />
                                    <FormControl.Feedback type="invalid">Empty box!</FormControl.Feedback>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Button type="submit" variant="success" className="mb-2">
                                    Submit
                                </Button>
                            </Col>
                        </Form.Row>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchCard;