import React, { Suspense } from 'react';

import Homepage from './components/Homepage.jsx';
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
          <Homepage />
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