import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Flashcard from './components/Flashcard.jsx';
import Header from './components/Header.jsx';

function App() {

  let testCard = require('./cards/norwegian/test_card.json');

  return (
    <div className="App">
      <Container fluid className="no-padding-container">
        <Row noGutters={true}>
          <Col>
            <Header />
          </Col>
        </Row>
        <Row noGutters={true}>
          <Col>
          </Col>
          <Col>
            <Flashcard cardObj={testCard} />
          </Col>
          <Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
