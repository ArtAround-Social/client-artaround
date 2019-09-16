import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPageContainer from '../containers/LandingPageContainer';


export default function App() {
  return(
  <>
    <Router>
      <Route exact path='/' component={LandingPageContainer}></Route>
    </Router>
  </>
  );
}
