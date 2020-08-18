import React, { Component } from 'react';
import classes from './App.css';
//import styled from 'styled-components';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import ErrorBoundary from '../components/ErrorBoundarry/ErrorBoundary';

// const StyledButton=styled.button`
// background-color:${props=>props.alt? 'red':'green'};
// color: white;
// font: inherit;
// border: 1px solid blue;
// padding: 8px;
// cursor: pointer;
// &:hover {
//   background-color: ${props=>props.alt? 'salmon':'lightgreen'};
//   color: black;
// `;

class App extends Component {
  state ={
    persons:[
      {id:'a1', name:'Max',age:28},
      {id:'a2', name:'Manu',age:29},
      {id:'a3', name:'Teo',age:21}

    ],
    otherState: 'some other value',
    showPersons: false
  }
  nameChangedHandler=(event,id)=>{
    const personIndex= this.state.persons.findIndex(p=>{

      return p.id=== id;
    });
    const person= {
      ...this.state.persons[personIndex]
    };
    //alternativa pentru copierea persoanei gasite
   // const person=Object.assign({},this.state.persons[personIndex]);
   person.name=event.target.value;
   const persons =[...this.state.persons];
   persons[personIndex]=person;
    this.setState({ persons: persons});
  }
deletePersonHandler=(personIndex)=>{
//const persons=this.state.persons.slice(); creaza o copie a array-ului
const persons=[...this.state.persons];//creaza o copie a array-ului
persons.splice(personIndex,1);
this.setState({persons: persons});

}
  touglePersonsHandler=()=>{
const doesShow=this.state.showPersons;
this.setState({showPersons: !doesShow});
  }
  render() {
    let persons=null;
    if(this.state.showPersons){
      persons= <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          />;
        
    }
    return (
      <div className={classes.App}>
        <Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                touglePersonsHandler={this.touglePersonsHandler}
        />
      {persons}
      </div>
   
    );
  }
}

export default App;
