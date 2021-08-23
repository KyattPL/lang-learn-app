import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const createAddCardInput = (name, ref) => {
    let result = null;

    // It breaks when there aren't 3 genders
    if (name === "Gender") {
        result = (
            <Form.Group key={name} as={Row} className="mb-2">
                <Form.Label column md="3">
                    Gender
                </Form.Label>
                <Col md={9}>
                    <Form.Control className="dontValidate" ref={ref} as="select">
                        <option value="masculine">Masculine</option>
                        <option value="feminine">Feminine</option>
                        <option value="neuter">Neuter</option>
                    </Form.Control>
                </Col>
            </Form.Group>
        );
    } else if (name === "Countable") {
        result = (
            <Form.Group key={name} as={Row} className="mb-2">
                <Form.Label column md="3">
                    Countable
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={ref} style={{ width: "auto" }} type="checkbox" data-testid="testCountCheckbox" />
                </Col>
            </Form.Group>
        );
    } else {
        result = (
            <Form.Group key={name} as={Row} className="mb-2">
                <Form.Label column md="3">
                    {name}
                </Form.Label>
                <Col md={9}>
                    <Form.Control ref={ref} className="dontValidate" type="text" placeholder="Type here" />
                </Col>
            </Form.Group>
        );
    }
    return result;
};