import React from 'react';
import { BrowserRouter,Routes, Route, Link, NavLink } from 'react-router-dom';

import Landing from './Components/Landing';
// import WorkflowDesigner from './Components/WorkflowDesigner.js';
import Drop from './Components/Drop.js'
// import home from './index.html' 


function App() {
  return (
    <BrowserRouter basename ="myapp" >
      <Routes>
        <Route path="/" element={ <Link to="/workflow" > Goto Workflow </Link> }/> 
        <Route path="/workflow" element={ <Landing /> } />
        <Route path="/workflow/:id" element={<Drop />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
