
import Task from './Task'


const Tasks = ({task, deleteTask}) => {

  
  return (
    
    <div style= {{textAlign: 'left'}}>
        { task.map((item,i) => {
    
    return ( <Task id={i} task={item} deleteTask = {deleteTask}/>
    )
    })
 
  }
      
    </div>
  )
}
export default Tasks