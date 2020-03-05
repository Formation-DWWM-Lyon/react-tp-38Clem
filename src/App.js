import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, UserList } from './Component';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/userlist" component={UserList}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
