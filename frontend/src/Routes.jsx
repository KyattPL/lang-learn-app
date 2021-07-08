import './Routes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import NorwegianCard from './components/norwegian/NorwegianCard.jsx';
import Header from './components/Header.jsx';

import { Redirect, Route, Switch } from 'react-router-dom';

function App() {

  let testCard = require('./cards/norwegian/test_card.json');
  let secondCard = require('./cards/norwegian/test_card2.json');
  let thirdCard = require('./cards/norwegian/test_card3.json');

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Container fluid className="no-padding-container h-100">
            <Row noGutters={true} className="content">
              <Col>
              </Col>
              <Col xs="10">
                <CardDeck className="deck">
                  <NorwegianCard cardObj={testCard} />
                  <NorwegianCard cardObj={secondCard} />
                  <NorwegianCard cardObj={thirdCard} />
                </CardDeck>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </Route>
        <Route path="/addCard">
          <div>test add card</div>
        </Route>
        <Route path="/searchCard">
          <div>test search card</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;