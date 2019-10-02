import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './containers/Login';
import Paytcp from './containers/Paytcp';

import { GlobalProvier } from './providers'

function App() {
  return (
    <Router>
      <GlobalProvier>
        <Route exact path="/" component={Login} />
        <Route path="/pay" component={Paytcp} />
      </GlobalProvier>
    </Router>
  );
}

export default App;