import React, {useEffect, useRef,useContext} from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit=(props)=>{
  const toggleBtnRef=useRef(null);
  //toggleBtnRef.current.click(); //aici da eroare deorece referinta catre 
  //buton este necunoscuta
  const authContext=useContext(AuthContext);
  console.log(authContext.authenticated);

  useEffect(//se randeaza dupa fiecare ciclu de incarcare
    ()=>{
      console.log('[cockpit.js] useEffect');
      /// Http requuest....
     // const timer=setTimeout(()=>{
    // 
    toggleBtnRef.current.click();
      return ()=>{
       // clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useeffect');
      };
    },[]//Array vid pentru rularea functiei o singura data atunci cand se incarca paginaa
    //[props.persons]=> functia va fi apelata doer atunci cand va fi modificate o persoana
  );
  useEffect(()=>{
    console.log('[cockpit.js] 2nd useEffect');
    return ()=>{
      console.log('[Cockpit.js]  2nd cleanup work in useeffect');
    };

  });
    const assignedClasses=[];
    let btnClass='';

    if(props.showPersons)
    {btnClass=classes.Red;}
    if(props.personsLength<=2)
    {
      assignedClasses.push(classes.red);//classes=['red']
    }
    if(props.personsLength<=1)
    {
      assignedClasses.push(classes.bold);////classes=['red','bold']
    }
    return(
        <div className={classes.Cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is realy working!</p>
        <button 
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.touglePersonsHandler}>Tougle persons
        </button>
        <button onClick={authContext.login}>Log in</button>
      
        </div>


    );

};

export default React.memo(Cockpit);//React.memo() -> randeaza elementele numai daca acestea au fost
                                      ///modificate(props)