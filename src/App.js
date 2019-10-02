import React from 'react';
import Login from './containers/Login';
import Paytcp from './containers/Paytcp';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  
  return (
    <Router>
        <Route exact path="/" component={Login} />
        <Route path="/pay" component={Paytcp} />
    </Router>
  );
}

export default App;