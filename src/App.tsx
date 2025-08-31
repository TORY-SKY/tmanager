import { useState, useEffect } from 'react'

import NavBar from "./navbar/NavBar.tsx"
import DeleteModal from "./DeleteModal.tsx"
import TaskForm from "./TaskForm.tsx"
import TaskList from "./TaskList.tsx"
import {useLocalStorage} from "./hooks/useLocalStorage.ts"
import type {Task} from "./Interfaces.ts";
import EditModal from "./EditModal.tsx"


function App() {

const [darkMode, setDarkMode] = useState<boolean>(false);
  const [tasks, setTasks] = useLocalStorage<Task[]>("task", []);

const [edittingTask, setEdittingTask] = useState<Task | null>(null);
const [taskToDelete, setTaskToDelete] = useState<Task | null>(null);
const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);


useEffect(()=>{
  if(darkMode){
    document.documentElement.classList.add("dark");
  } else{
    document.documentElement.classList.remove("dark")
  }
}
  ,[darkMode])


  // add task function
  const addTask = (task: Task)=>{
    setTasks([...tasks, task]);
  };


  const toggle = ()=>{
    setDarkMode((prev)=>!prev);
  }


const deleteTask = ()=>{
if(taskToDelete){
  setTasks((tasks)=>tasks.filter((tsk)=>tsk.id !== taskToDelete.id));
}
setTaskToDelete(null);
setShowDeleteModal(false);
}


const editTask= (task: Task)=>{
  setTasks((prevTask)=>prevTask.map((t)=>(t.id === task.id ? task : t))
    );
    setEdittingTask(null);


}
const handleDelete = (task: Task)=>{
  setTaskToDelete(task);
  setShowDeleteModal(true);

}
 const cancelDelete = ()=>{
  setTaskToDelete(null);
  setShowDeleteModal(false);
 }

  return (
    <>
      <div className="p-6 lg:px-8 dark:bg-gray-900">
        <NavBar onToggle={toggle} darkMode={darkMode} />
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks}  onEdit={setEdittingTask} onDelete={handleDelete} />
        {edittingTask && <EditModal tasks={edittingTask}  onClose={()=>setEdittingTask(null)}  onSave={editTask}  />}
      </div>
      {<DeleteModal 
        isOpen={showDeleteModal} 
        taskName={taskToDelete?.title} 
        onClose={cancelDelete} 
        onConfirm={deleteTask}
      />}
      {/*<BottomNav />*/}
      

    </>
  )
}

export default App
