import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliar';
import AuthContext from '../context/auth-context';

import ErrorBoundary from '../components/ErrorBoundarry/ErrorBoundary';

class App extends Component {
  constructor(props){
    super(props);
    console.log('App.js -- constructor');
    this.state ={
      persons:[
        {id:'a1', name:'Max',age:28},
        {id:'a2', name:'Manu',age:29},
        {id:'a3', name:'Teo',age:21}
        
  
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
    }

  }
  // Zona de functii LifeCycle
  static getDerivedStateFromProps(props,state){
    console.log('[App.js ] getDerivedStateFromProps',props);
    return state;
  }

  // componentWillMount(){
  //   console.log('App.js componentWillmonth');
  // }

  componentDidMount(){
console.log(' [App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nestState){
    console.log('[App,js] shouldComponentUpdate');
    return true;
  }
  componentDidUpdate(){

    console.log('[App.js] componentDidupdate');
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
    this.setState((prevState,props)=>{
    return { persons: persons, changeCounter: prevState.changeCounter +1};}
    );
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
  tougleCockpit=()=>{
    this.setState({showCockpit: !this.state.showCockpit});
  }
  loginHandler=()=>{
    this.setState({authenticated:true});

  }
  render() {
    console.log('App.js Render');
    let persons=null;
    if(this.state.showPersons){
      persons= <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
          />;
        
    }
    return (
      <Aux >
        <button onClick={this.tougleCockpit}>Show Cockpit</button>
        {/* componenta pentru context  */}
        <AuthContext.Provider 
        value={{authenticated: this.state.authenticated, 
        login: this.loginHandler}}
        >
       {this.state.showCockpit?(<Cockpit 
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.persons.length}
                touglePersonsHandler={this.touglePersonsHandler}
        />):null}
      {persons}
      </AuthContext.Provider>
      </Aux>
   
    );
  }
}

export default withClass(App,classes.App);
