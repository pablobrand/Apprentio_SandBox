import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CardHolder from './components/CardHolder';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './configs/routes';
import Pablo from './components/kids/Pablo';
import Joao from './components/kids/Joao';
import Marcus from './components/kids/Marcus';
import Argenis from './components/kids/Argenis';
import Caleb from './components/kids/Caleb';
import Alex from './components/kids/Alex';
import Armando from './components/kids/Armando';
import Ulises from './components/kids/Ulises';


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
            <Route exact path={Routes.KIDS_ALEX} component={Alex} />
            <Route exact path={Routes.KIDS_ARGENIS} component={Argenis} />
            <Route exact path={Routes.KIDS_CALEB} component={Caleb} />
            <Route exact path={Routes.KIDS_ARMANDO} component={Armando} />
            <Route exact path={Routes.KIDS_ULISES} component={Ulises} />
          </div>
        </BrowserRouter>
        <CardHolder/>
      </React.Fragment>
    );
  }
}

export default App;
