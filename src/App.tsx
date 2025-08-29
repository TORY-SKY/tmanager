import { useState } from 'react'

import NavBar from "./navbar/NavBar.tsx"
import TaskForm from "./TaskForm.tsx"
import TaskList from "./TaskList.tsx"
import {useLocalStorage} from "./hooks/useLocalStorage.ts"
import type {Task} from "./Interfaces.ts";
import EditModal from "./EditModal.tsx"


function App() {


  const [tasks, setTasks] = useLocalStorage<Task[]>("task", []);

const [edittingTask, setEdittingTask] = useState<Task | null>(null);
  // add task function
  const addTask = (task: Task[])=>{
    setTasks([...tasks, task]);
  };


  const toggle = (id: string)=>{
    setTasks(tasks.map((tsk)=>(tsk.id === id ? {...tsk, completed: !tsk.completed}: tsk)));
  }
const deleteTask = (id: string)=>{
setTasks(()=>tasks.filter((tsk)=>tsk.id !== id))
}


const editTask= (task: Task)=>{
  setTasks(tasks.map((prev)=>(prev.id === task.id ? task: prev))
    );
    setEdittingTask(null);


}

  return (
    <>
      <div className="p-6 lg:px-8">
        <NavBar />
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} onToggle={toggle} onEdit={setEdittingTask} onDelete={deleteTask} />
        {edittingTask && <EditModal tasks={edittingTask}  onClose={()=>setEdittingTask(null)}  onSave={editTask}  />}
      </div>
      {/*<BottomNav />*/}
      

    </>
  )
}

export default App
