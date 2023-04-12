import { Handle, Position } from 'reactflow';


function TextUpdaterNode({ data }) {
  
  const onDragStart = (event, nodeType) => {
    
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';

  };
  // console.log(data.borderColor);
  return (
    <div>
      {/* Handle components should be conditionally rendered depending upon the 'data' values */}
  {  <Handle type="target" position={Position.Top} />}
    <div style={{display: 'flex', flexDirection: 'row' , border:`2px solid ${data.borderColor}`, borderRadius:'0.5rem' , overflow: 'hidden' , cursor:'grab'}} onDragStart={(event) => onDragStart(event, data)} draggable>
        <div className="" style= {{width: '3rem', height: '3rem' , backgroundColor:'' , textAlign: 'center' , display:'flex', alignItems:'center',justifyContent:'center'}}> <span> <b>{data.inputType !== undefined ? data.inputType.toString().toUpperCase() : ''} </b></span> </div> 
        <div className="" style= {{width:'10rem' ,display:'flex', justifyContent:'center',backgroundColor:'rgba(48, 162, 215, 0.21)', alignItems:'center',fontSize:'1rem',paddingInline:'1rem'}}> <b>{data.name === '' ? "Input":data.name} </b> </div>
        <div className="" style= {{width: '3rem', height: '3rem' , backgroundColor:'' , textAlign: 'center' , display:'flex', alignItems:'center',justifyContent:'center'}}><b>{data.outputType !== undefined ? data.outputType.toString().toUpperCase() :'' }</b></div>
    </div>
    <Handle type="source" position={Position.Bottom} id="a" />
  </div>

  );
}
export default TextUpdaterNode;