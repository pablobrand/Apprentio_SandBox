import React, { Component } from 'react';
import './cssComponents/CardHolder.css';
import PropTypes from 'prop-types';
import { BrowserRouter, Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Person from './Person/Person';
//import Routes from './configs/routes';



class CardHolder extends Component {

  //properties
  state ={
    persons:[
      {name: 'Pablo', age: 33},
      {name: 'Juan', age: 35}
    ],
    otherState: 'some other value here!',
    h1Style: {
      color:'red',
      'font-style': 'oblique'
    }
  }

  //methods
  switchNameHandler = (newName) => {
    //console.log('Btn was clicked!');
    this.setState({persons:[
      {name: newName, age: 19},
      {name:'Rick', age: 29}  
      ]
    })
  }

  render() {
    
    //let { myClassPab, myStylePab } = this.props;

    return (
            <div id='Cardholder'>
              <button onClick={this.switchNameHandler.bind(this,'NewNamePablo')}>Switch Name</button>
              <h1 style={this.state.h1Style}>something here</h1>
              <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
              <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
            </div>
    )
  }

}


export default CardHolder;