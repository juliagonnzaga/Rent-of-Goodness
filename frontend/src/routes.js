//Configurando rotas
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; //O switch garante que apenas uma rota seja chamada por momento
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={Logon} />
    <Route path="/register" component={Register} />
    <Route path="/profile" component={Profile} />
    </Switch>
    </BrowserRouter>
  );
}