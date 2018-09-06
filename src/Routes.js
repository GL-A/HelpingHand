import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './routes/Nav/Nav'

import './Routes.css';
function Home () {
  return(
    <h1>hello</h1>
  )
}


function Wrapper(props) {
  return (
    <div>
      <Nav history={ props.history } />
      <div>
        <Switch>
          <Route exact path="/" component={ Home } />>
          <Route  path="/test" component={ () => <p>hello</p> } />>
          <Route  render={() => <h2>Page not found</h2>} />>
        </Switch>
      </div>
    </div>
  )
}

function Routes(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={ Wrapper } />
    </BrowserRouter>
  )
}

export default Routes;