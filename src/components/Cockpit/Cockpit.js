import React from 'react';
import classes from './Cockpit.css';

const Cockpit=(props)=>{
    const assignedClasses=[];
    let btnClass='';

    if(props.showPersons)
    {btnClass=classes.Red;}
    if(props.persons.length<=2)
    {
      assignedClasses.push(classes.red);//classes=['red']
    }
    if(props.persons.length<=1)
    {
      assignedClasses.push(classes.bold);////classes=['red','bold']
    }
    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is realy working!</p>
        <button 
        className={btnClass}
        onClick={props.touglePersonsHandler}>Tougle persons
        </button>
        </div>


    );

};

export default Cockpit;