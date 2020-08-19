import React,{Component, Fragment} from 'react';
// import styled from 'styled-components';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxiliar';

import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
class Person extends Component  {
    constructor(props){
        super(props);
        this.inputElementRef=React.createRef();

    }
    static contextType= AuthContext;//pentru accesarea contextului
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(this.context.authenticated);

    }

    render(){
console.log('person.js --rendering...');
    return (
        // <div className="Person" style={style}>
        <Aux>
    {/* //        <AuthContext.Consumer>
    //            {
    //                (context)=>  context.authenticated?<p>Authenticated!</p>:<p>Please log in</p>
    //            }
    //        </AuthContext.Consumer> */}
    {this.context.authenticated?<p>Authenticated!</p>:<p>Please log in</p>
    }
           
            <p onClick={this.props.click}>I'm  {this.props.name} and I am {this.props.age} years old! </p>
            <p>{this.props.children}</p>
            <input 
            // ref={(inputEl)=>{this.inputElement=inputEl}}
            ref={this.inputElementRef}
            type="text" onChange={this.props.changed} value={this.props.name}/>
        </Aux>
        
    )
};};
//ajutam utilizatorul cu adnotatii despre componentele noastre create
//ii oferim atat parametri cat si tipul acestora
Person.propTypes={
click: PropTypes.func,
name: PropTypes.string,
age: PropTypes.number,
changed: PropTypes.func
};

export default withClass(Person,classes.Person);