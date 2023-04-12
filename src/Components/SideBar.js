import React,{useCallback , useState} from 'react';
import ReactFlow, { addEdge, applyEdgeChanges, applyNodeChanges } from 'reactflow';
import 'reactflow/dist/style.css';
import './index.css';
import { Handle, Position } from 'reactflow';



export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify(nodeType));
    event.dataTransfer.effectAllowed = 'move';
   
  };
  const [page , setPage] = React.useState(1);
  const [modulesData ,setModulesData ] = React.useState([]);
  React.useEffect(()=>{
    fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/modules?page=${page}&limit=5`)
    .then(res => res.json())
    .then(data => setModulesData(data));
  } , [page] )

  function increase(){
    setPage(data => data+1 )
  }
  function decrease(){
    setPage(data => data-1 === 0 ?1 :data-1 )
  }
  

 const temp = modulesData.map(module =>{
    return {
        id:module.id,
        type:'default',
        name: module.name,
        inputType:module.input_type,
        outputType:module.output_type,
        position:{x:100 , y : 100}
    }
    })
    
  const [nodes, setNodes] = React.useState(temp);
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
   




  return (
    
    <div style={{display:'flex', flexDirection:'column' , gap:'2rem' , padding:'2rem' , justifyContent:'center', alignItems:'center' , border:'1px solid #6173fa' ,boxShadow:''}  }> 
    <div style={{display: 'flex', flexDirection: 'column' , border:'2px solid #6173fa', borderRadius:'0.2rem' , overflow: 'hidden' , height:'4rem',width:'15rem' ,textAlign:'center' ,JustifyContent:'center'}}> <b> Modules </b> </div>
    {
    temp.map((node) =>{ 
        return (
          <div style={{}} className="">
          <Handle type="target" position={Position.Top} />
          <div className="" style={{display: 'flex', flexDirection: 'row' , border:'2px solid #6173fa', borderRadius:'0.5rem' , overflow: 'hidden' , cursor:'grab'}} onDragStart={(event) => onDragStart(event, node)} draggable>
              <div className="" style= {{width: '3rem', height: '3rem' , backgroundColor:'' , textAlign: 'center' , display:'flex', alignItems:'center',justifyContent:'center'}}> <span> <b>  {node.inputType.toUpperCase()} </b></span> </div> 
              <div className="" style= {{width:'10rem' ,display:'flex', backgroundColor:'rgba(48, 162, 215, 0.21)',justifyContent:'center', alignItems:'center',justifyContent:'center' ,fontSize:'0.8rem' ,border:'1.5px solid #6173fa'}}> {node.name} </div>
              <div className="" style= {{width: '3rem', height: '3rem' , backgroundColor:'' , textAlign: 'center' , display:'flex', alignItems:'center',justifyContent:'center'}}><b>{node.outputType.toUpperCase() }</b> </div>
          </div>
          <Handle type="source" position={Position.Bottom} id="a" />
        </div>
        )
    })
    }
    <div>
      <button className ="butn" onClick={decrease}> Left </button>  
      {(page-1) !== 0&& (page-1) > 0 && <button  className="butn val" onClick={() => setPage(page-1)}><b>{page-1}</b></button> }  {page > 0 && <button className ="butn val main" onClick={() => setPage(page+1)}><b>{page}</b></button> }  {page+1 > 0 && <button className ="butn val" onClick={() => setPage(page+1)}><b> {page+1}</b></button>}
    <button className = "butn" onClick={increase}> Right </button>
    </div>
    </div>
  );
};
