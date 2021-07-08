import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './Routes.jsx';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes />
        </Router>
    )
}

export default App;