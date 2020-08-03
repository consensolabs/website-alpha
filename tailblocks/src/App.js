import React from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import NoMatchPage from './Pages/404';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/team'>
            <Team />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route component={NoMatchPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
