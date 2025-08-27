import {useState} from 'react';

import type {Task} from "/Interfaces.ts"
import TaskItem from "./TaskItem.tsx"

interface TaskListProp {
	tasks: Task;
	onEdit: (task: Task)=>void;
	onDelete: (id: string)=>void;
	onToggle: (id: string)=>void;
}

const TaskList: React.FC<TaskListProp>=({tasks, onEdit, onDelete, onToggle})=>{
	const [open, setOpen] = useState(false);
const DeleteItem = ()=>{
setOpen(!open)

}

	return(
<>
	<div className="lg:px-40 ">
		<h1>Today's Task</h1>

        	{tasks.map((task)=>(
        		<TaskItem  tasks={task} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} key={task.id}    />
        			
        		))}


	</div>
</>
		)
}
export default TaskList;