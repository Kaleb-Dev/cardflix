import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Pages/Home/index';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import VideoCadastro from './components/Pages/VideoCadastro'
import CategoriaCadastro from './components/Pages/CategoriaCadastro'
import Page404 from './components/Pages/Page404'

//Browser router fica em volta do App
//Switch funciona como um if que verifica a página a ser carregada
//Route específica a página carregada e o seu caminho
//ESSA BIBLIOTECA APENAS MOSTRA O CONTEÚDO NA PÁGINA AO INVÉS DE CARREGAR TODA
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/cadastro/video" component={VideoCadastro}/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cadastro/categoria" component={CategoriaCadastro}></Route>
      <Route path="/" component={Page404}></Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);