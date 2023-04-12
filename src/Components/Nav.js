import React from 'react';
import './Nav.css';

function Nav(props){

return (
    <div className="Nav" >
        {!props.name && <h5 style={{marginLeft:'2rem'}}> Workflows </h5>}
        {props.name && <h5  style={{marginLeft:'2rem'}}> Workflow name : {props.name} </h5> }
    </div>
)


}
export default Nav;