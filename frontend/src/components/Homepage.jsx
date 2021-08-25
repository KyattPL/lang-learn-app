import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import '../styles/Homepage.css';

function Homepage() {


    return (
        <Container fluid className="h-100">
            <Row className="content homepageButtonsRow">
                <Col lg="1" xl="2">
                </Col>
                <Col lg="5" xl="4">
                    <a href="/addCard" className="homepageButtonLink">
                        <Button variant="danger" block className="homepageButton">
                            Add Card
                        </Button>
                    </a>
                </Col>
                <Col lg="5" xl="4">
                    <a href="/searchCard" className="homepageButtonLink">
                        <Button variant="success" block className="homepageButton">
                            Search Card
                        </Button>
                    </a>
                </Col>
                <Col lg="1" xl="2">
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage;