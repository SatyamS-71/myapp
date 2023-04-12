// import React from 'react';
// import { Handle, Position } from 'reactflow';

// export default function Node(props){


//     const onDragStart = (event, nodeType) => {
//         console.log(nodeType);
//         event.dataTransfer.setData('application/reactflow', nodeType);
//         event.dataTransfer.effectAllowed = 'move';
//       };

// const node = 
//       <div>
//     <Handle type="target" position={Position.Top} />
//     <div style={{display: 'flex', flexDirection: 'row' , border:'2px solid #b46fe8', borderRadius:'0.5rem' , overflow: 'hidden'}} onDragStart={(event) => onDragStart(event, props)} draggable>
//         <div className="" style= {{width: '3rem', height: '3rem' , backgroundColor:'#8e1ce6' , textAlign: 'center' , display:'flex', alignItems:'center',justifyContent:'center'}}> <span> <b>  {props.inputType.toUpperCase()} </b></span> </div> 
//         <div className="" style= {{width:'10rem' ,display:'flex', justifyContent:'center', alignItems:'center',justifyContent:'center' ,fontSize:'0.8rem'}}> {props.name} </div>
//         <div className="" style= {{width: '3rem', height: '3rem' , backgroundColor:'#8e1ce6' , textAlign: 'center' , display:'flex', alignItems:'center',justifyContent:'center'}}><b>{props.outputType.toUpperCase() }</b> </div>
//     </div>
//     <Handle type="source" position={Position.Bottom} id="a" />
//   </div>


// return node;

// }