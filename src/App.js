import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, UserList, Profile } from './Component';

function App() {
  return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/userlist" component={UserList}/>
        <Route exact path="/profile/:seed" component={Profile}/>
      </Switch>
      </BrowserRouter>
  );
}

export default App;
