import React, {useState} from 'react';
import Button from '../header/Button';
// import Task from '../tasks/Task';
import Tasks from '../tasks/Tasks';
import "./AddTask.css"    



const AddTask = () => {
    const [task, setTask] = useState("");
    const [day, setDay] = useState("");
 
    const [arry, setArry] = useState([]);
    const [show, setShow] = useState(true);

    const handleTask = (e) => {
        setTask(e.target.value)

        
    }
    const handleDay = (e) => {
        setDay(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault();
        handleSubmit();
        setTask("");
        setDay("");
    }
        
    const handleSubmit = (e) => {
        // e.preventDefault();
        if (task === "" || day === ""){
            alert("input field can not be empty");
            return;
        }
        if (arry.length){
            const temp = [];
            arry.map((item) => item.task === task ? temp.push(false): temp.push(true))
            if(temp.includes(false)){
                alert("Task already exists");
                return;
               
            
            }
        }
        // setArry( arry.filter((item) => (item !== "" && item.task !== task)))
        setArry([...arry, {task : task, day: day}])
        
        
        
    }
    const deleteTask =(id) => {
        setArry(arry.filter((item, index) => index !== id))
       
      }
    
  return (
    
    <div className="form-container">
        <Button show = {show} setShow = {setShow}/>
        {show ? (<form  >
            <label>Task</label>
            <input type="text" placeholder="Add Task" onChange={handleTask} value={task}/>
            <label>Day & Time</label>
            <input type="text" placeholder="Add Day & Time" onChange = {handleDay} value={day}/>
            <button onClick={handleClick}>Save Task</button>
            
        </form>) : ""}
      
        {  !arry.length ?  (<span >No Tasks to Show</span>)
        
        :   (<Tasks task = {arry} deleteTask = {deleteTask}/>  )}
        

    </div>
    
  )
}

export default AddTask