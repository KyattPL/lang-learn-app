import React, { Suspense } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import Header from './components/Header.jsx';
import { Route, Switch } from 'react-router-dom';
import './Routes.css';

const SearchCard = React.lazy(() => import('./components/SearchCard.jsx'));
const AddCard = React.lazy(() => import('./components/AddCard.jsx'));

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
            <Suspense fallback={<div></div>}>
                <AddCard />
            </Suspense>
        </Route>
        <Route path="/searchCard">
            <Suspense fallback={<div></div>}>
                <SearchCard />
            </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;