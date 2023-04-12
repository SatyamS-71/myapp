import React, { useState, useEffect } from 'react';
import './Landing.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';






function Landing() {
  const [workflows, setWorkflows] = useState([]);

  useEffect(() => {
    fetch('https://64307b10d4518cfb0e50e555.mockapi.io/workflow')
      .then(response => response.json())
      .then(data => {setWorkflows(data);
      // console.log(workflows);
          });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' : ''}${day}-${month < 10 ? '0' : ''}${month}-${year}`;
  };



  
  return (
<div>
    < Nav name=""/>
    <div className="landing-container">

      <table className="workflow-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Input Type</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {workflows.map(workflow => (
            <tr key={workflow.id}> 
             <td><Link to = {`/myapp/workflow/${workflow.id}`} state={{id:workflow.id , inputtype : workflow.input_type }} > {workflow.name} </Link></td> 
              <td>{workflow.input_type}</td>
              <td>{formatDate(workflow.createdAt)}</td>
            </tr>
          
          ))}
        </tbody>
      </table>
    </div>
  
    
   </div> 
  );
}

export default Landing;
