

import {useState, useEffect} from "react"
import { v4 as uuidv4 } from 'uuid';
// import {ChevronDown} from "lucide-react"

type Category = "Work" | "Personal" | "Study";
	export interface Task {
		id: string;
		title: string;
		dueDate: string;
		category: Category;

	}
	interface TaskFormProperty{
		addTask: (task: Task) => void;
	}
const TaskForm: React.FC<TaskFormProperty> =({addTask})=>{
	const [title, setTitle] = useState();
	const [category, setCategory] = useState<Category>("Work");
	const [dueDate, setDueDate] = useState("");
	const [description, setDescription] = useState("");
	const handleSubmit = (e: React.FormEvent) =>{
		e.preventDefault();

		const newTask: Task = {
			id: uuidv4(),
			title,
			category,
			dueDate,
			description,
			completed: false,

		}
		addTask(newTask)
		setTitle("");
		setCategory("")
		setDescription("")
		
	}

	
	return(
	<>
	<div className="py-8 w-full  mx-auto mx-w-md mx-w-lg  ">
	<div className="w-full lg:w-md mx-auto  lg:px-40 ">
		<h1>Task Name</h1>
		<form onSubmit={handleSubmit} className="flex flex-col w-full gap-3 lg:px-5">
			<div className="task input">
				<input type="text" 
					value={title}
					onChange={(e)=>{setTitle(e.target.value)}}

				placeholder="Input task" 
				className="p-2 w-100 focus:outline-none border-2 rounded-2xl w-full hover:none focus:border-green-400"
				required />
			</div>
			{/* Date and category div */}
			<div className="date flex flex-row gap-3 item-center justify-between">
			{/* Date div */}
				<div  className="date w-full flex-1 item-center border-2 rounded-2xl">
					<input type="date" value={dueDate} onChange={(e)=>{setDueDate(e.target.value as dueDate)}} className="w-full bg-transparent p-2 rounded focus:outline-none focus:ring-0 focus:border-green-500"
				placeholder="Input task" 
				
				required />
				</div>
				<div className="date flex flex-1 border-2 w-full  p-2 item-center justify-between rounded-2xl">
					<select value={category} onChange={(e)=>{setCategory(e.target.value as category)}} className="w-full hover:none focus:border-green-400  bg-transparent justify-center flex mx-auto dark:bg-gray-800">
						<option>Category</option>
						<option>Work</option>
   						<option>Personal</option>
    					<option>Study</option>
					</select>
				</div>

			</div>
			<div className="description-input-div rounded rounded-2xl">
				<h1>Description</h1>
				<textarea type="text rounded rounded-2xl"
					value={description} onChange={(e)=>{setDescription(e.target.value as description)}}
				 placeholder="Describe your task" className="w-full border-2 p-2 hover:none focus:border-green-400" />
			</div>
			<div className="Add-task-button w-full">
				<button className=" w-full bg-green-400 p-2 text-white rounded-2xl">Create Task</button>
			</div>
		</form>
	</div>
</div>

	</>
	)
}
export default TaskForm;