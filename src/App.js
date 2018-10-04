import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './configs/routes';
import Pablo from './components/kids/Pablo';
import Joao from './components/kids/Joao';
import Marcus from './components/kids/Marcus';

class App extends Component {
  render() {
    return (

      <React.Fragment>
        <BrowserRouter>
          <div className="App">
            <Header />

            <Route exact path={Routes.HOME} component={Home} />
            <Route exact path={Routes.KIDS_PABLO} component={Pablo} />
            <Route exact path={Routes.KIDS_JOAO} component={Joao} />
            <Route exact path={Routes.KIDS_MARCUS} component={Marcus} />
          </div>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
