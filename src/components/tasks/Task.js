import React, {useState} from 'react';
import { MdCancel } from "react-icons/md";
import "./Task.css"
const Task = ({task, deleteTask, id}) => {
  const [done, setDone] = useState(false);
  
  const handleDone = (e) => {
      setDone(!done);

  }
 
  return (
    
    <div style={{fontFamily: ' "Helvetica Neue",Helvetica,Arial'}}>
      
        
        <div className="mapContainer" onClick={handleDone} id={id} style={{borderLeft: done ? ('5px solid purple') : "none"}}>
                    <h2> {done ?  (<del>{task.task}</del>):task.task }</h2>
                     <p>{done ? (<del>{task.day}</del>): task.day}</p>      
                     <MdCancel  onClick={() => deleteTask(id)} className="icon" />
                </div>
    
    </div>
  )
}

export default Task