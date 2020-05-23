//Configurando rotas
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; //O switch garante que apenas uma rota seja chamada por momento
import Logon from './pages/Logon';

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
    <Route path="/" component={Logon} />
    </Switch>
    </BrowserRouter>
  );
}
