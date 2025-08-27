import { useState, useEffect } from 'react'

import NavBar from "./navbar/NavBar.tsx"
import TaskForm from "./TaskForm.tsx"
import TaskList from "./TaskList.tsx"
import {useLocalStorage} from "./hooks/useLocalStorage.ts"

import EditModal from "./EditModal.tsx"


interface Task {
    id: string;
    title: string;
    dueDate: string;
    category: Category;

  }
function App() {
const [openModal, setOpenModal] = useState(false);

  const [tasks, setTasks] = useLocalStorage<Task[]>("task", []);

const [edittingTask, setEdittingTask] = useState<Task | null>(null);
const handleEdit = (task)=>{
  setEdittingTask(task)
}
  // add task function
  const addTask = (task: Task)=>{
    setTasks([...tasks, task]);
  };
    console.log(tasks);


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
    console.log(edittingTask);

}
const SaveEdit =(id: string)=>{
  console.log("id");
}
const OpenModal = ()=>{
  setOpenModal(!openModal);
  console.log(openModal);
}
const CloseModal = ()=>{

}
  return (
    <>
      <div className="p-6 lg:px-8">
        <NavBar />
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} onToggle={toggle} onEdit={setEdittingTask} onDelete={deleteTask} />
        <EditModal tasks={edittingTask} onOpen={OpenModal} onClose={()=>setEdittingTask(null)} onEdit={setEdittingTask} onSave={editTask}  />
      </div>
      

    </>
  )
}

export default App
