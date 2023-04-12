import React, { useState, useRef, useCallback, useMemo } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
  Background,
} from 'reactflow';

import { useLocation } from "react-router-dom";
import 'reactflow/dist/style.css';

import Sidebar from './SideBar';
import Nav from './Nav';
import TextUpdaterNode from './TextUpdaterNode';

import './index.css';



let id = 2;
const getId = () => `${id++}`;

const Drop = () => {

    const location = useLocation();
    const data = location.state;
    const[persondata , setpersondata] = React.useState({id:'' , name:''});

    React.useEffect(() =>{
        fetch(`https://64307b10d4518cfb0e50e555.mockapi.io/workflow/${data.id}`)
        .then(res => res.json())
        .then(data => setpersondata(data))
    } , []);

    const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);
    
    const datatopass = data;
    const initialNodes = [
        {
          id: '1',
          type: 'textUpdater',
          data:  {
            name:'',
            inputType : datatopass.inputtype ,
            outputType : datatopass.outputtype,
            borderColor:'blue',
          } ,
           
          position: { x: 250, y: 50 },
        },
      ];

  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';

  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = JSON.parse(event.dataTransfer.getData('application/reactflow'));
    

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left - 150 ,
        y: event.clientY - reactFlowBounds.top , 
      });


      const newNode = {
        id: getId(),
        type: 'textUpdater',
        position,
        data: {...type , borderColor:'Red'},
      };
     
      setNodes((nds) => nds.concat(newNode));

    },
    [reactFlowInstance]
  );
    const tempnodes = nodes;
    const onConnect = (params) => setEdges((eds) => {
    const {source , target} = params;
    
    const targetNode = tempnodes.find(el => el.id === target);
    
    if(targetNode){
      const updatedData = {...targetNode.data, borderColor: 'blue'};
      const updatedNode = {...targetNode, data: updatedData};
      const updatedElements = tempnodes.map(el => el.id === target ? updatedNode : el);
      setNodes((nds => updatedElements));
    }
    return addEdge(params, eds);
  });


  return (

<div style={{width:'100%', margin:'0'}}>
    <Nav 
    key = {persondata.id}
    name = {persondata.name}
    />
    <div className="" style={{}} >
 
      <ReactFlowProvider>
        
        <div className="" ref={reactFlowWrapper} style={{ display:'flex' , flexDirection:'row',height:'87vh',width:'100%' , border:'2px solid  #6173fa' , boxShadow:''}}>
         <Sidebar />  
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            deleteKeyCode={ ['Backspace' , 'Delete'] }
            nodeTypes = {nodeTypes}
          > 
            <Controls />
            <Background color="" variant ="dots" gap={10} />
          </ReactFlow>
        </div>
       
      </ReactFlowProvider>
    </div>
    </div>
  );
};

export default Drop;
