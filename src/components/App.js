
import React, { useState } from "react";
import './../styles/App.css';

let id = 0;
const App = () => {
  const [inputVal, setInputVal] = useState('');
  const [taskList, setTaskList] = useState([]);

  const addTask = ()=>{
    if(inputVal){
      setTaskList([...taskList, {task: inputVal, id: ++id}]);
      setInputVal('');
      
    } 
  }

  const deleteTask = (id)=>{
    const remainingTasks = taskList.filter((task)=> task.id !== id);
    // console.log('....>',remainingTasks)

    setTaskList(remainingTasks);
  }

  return (
    <div className="container">
      {/* Do not remove the main div */}
      <h1>TO-DO List</h1>
      <div>
        <input onChange={(event)=>{setInputVal(event.target.value)}} value={inputVal}></input>
        <button onClick={()=>{addTask(inputVal)}}>Add Todo</button>
      </div>
      <ul className="items">
        { taskList.length > 0 &&
          taskList.map((obj) => {
            // console.log(obj)
            return(
              <li className="item">
                <p>{obj.task}</p>
                <button onClick={()=>deleteTask(obj.id)}>Delete</button>
              </li>
            )
          })
        }
        
      </ul>
    </div>
  )
}

export default App
