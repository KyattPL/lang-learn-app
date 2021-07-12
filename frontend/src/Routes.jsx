import './Routes.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import Header from './components/Header.jsx';
import SearchCard from './components/SearchCard.jsx';
import AddCard from './components/AddCard.jsx';

import { Route, Switch } from 'react-router-dom';

function App() {

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
                  <h1>Hi there!</h1>
                </CardDeck>
              </Col>
              <Col>
              </Col>
            </Row>
          </Container>
        </Route>
        <Route path="/addCard">
          <AddCard />
        </Route>
        <Route path="/searchCard">
          <SearchCard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;