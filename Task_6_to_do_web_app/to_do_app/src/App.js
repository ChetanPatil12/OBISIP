
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  const handleChange = (event) =>{
      setNewTask(event.target.value);
  };


  const addTask = () =>{
    const task = {
      id: todoList.length === 0?1: todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      
    };
      setTodoList([...todoList, task]);
  };
  const deleteTask = (id) =>{
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addtask">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="list">
        {todoList.map((task) =>{ 
          return <div> 
            <p>{task.taskName}</p>
            <button onClick={()=> deleteTask(task.id)}>X</button>
          </div>;
        })
        }
      </div>
      
    </div>
  );
}

export default App;
