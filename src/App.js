import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

import Landing from './Components/Landing';
// import WorkflowDesigner from './Components/WorkflowDesigner.js';
import Drop from './Components/Drop.js'
// import home from './index.html' 


function App() {
  return (
    <div style={{paddingInline:'8rem'}}>
    <BrowserRouter basename ="/myapp" >
      <Routes>
        {/* <Route path="/" element={<div> home </div>}/> */}
        <Route path="/workflow" element={ <Landing /> } />
        <Route path="/workflow/:id" element={<Drop />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
