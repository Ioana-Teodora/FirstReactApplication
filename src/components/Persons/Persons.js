import React,{PureComponent} from 'react';
import Person from './Person/Person';
//PureComponent implementeaza functia shouldComponentUpdate pentru
//a se asigura ca nu se randeaza elementele nemodificate in DOM
class Persons extends PureComponent {
    // static getDerivedStateFromProps(props,state){
    //     console.log('[Persons.js] getDerivedStateFromProps ');
    //     return state;

    // }
    // componentWillReceiveProps(props){
    //     console.log('[Persons.js] componentWillReceiveProps',props);
    // }

    // shouldComponentUpdate(nextProps,nextState){
    //     console.log('[Persons.js]  shouldComponentUpdate');
    //     //realizam update numai daca vectorul de persoane se modifica

    //     if(nextProps.persons !== this.props.persons ||
    //          nextProps.changed!== this.prrops.changed ||
    //           nextProps.click!== this.props.click)
    //     {return true;}else
    //     {
    //         return false;
    //     }
      
    // }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log('[Persons.js] getSnapshotBeforeUpdate');  
        return {message: 'Snapshot!'};
    }
    // componentWillUpdate(){

    // }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate ');
        console.log(snapshot);
    }

    componentWillUnmount(){

        console.log('[Persons.js] componentWillUnmount')
    }
    render(){
    console.log('[Persons.js] rendering....');
    
    return this.props.persons.map((person,index)=>{
    
    return( 
             <Person 
        click={()=>this.props.clicked(index)}
        name={person.name} 
        age={person.age}
        changed={(event)=>this.props.changed(event,person.id)}
        key={person.id } 
       
        />
);});
};};
export default Persons;