


import {useState} from "react"
import {CheckCircle, Circle, Badge, Clock, Edit, Trash2} from "lucide-react"
import type {Task} from "./Interfaces.ts"

import EditModal from "./EditModal.tsx"

interface TaskItemProp {
	onToggle: (id: string)=> void;
	onEdit: (task: Task)=> void;
	onDelete: (id: string)=> void;
	tasks: Task;

}
// {onToggle, onEdit, OnDelete, task}
const TaskItem:React.FC<TaskItemProp> = ({onToggle, onEdit, onDelete, tasks})=>{
const formattedDate = tasks.dueDate;
console.log(formattedDate);
// const newDate = JSON.stringify(formattedDate);
// const StandardDate = newDate.toLocalDateString("en-US", {
// 	month: "short",
// 	day: "numeric",
// 	year: "numeric",
// })

	return (
		<>
		<div className="backdrop-blur-xl bg-white/50 rounded-3xl p-5 shadow-lg  border my-3" >
			<div className="flex flex-row gap-2 mb-4">
					<Circle cursor="pointer" />

				<div className=" flex flex-col gap-2">
				<h1>{tasks.title}</h1>
				<div className="dateDiv flex flex-row  item-center ">
					<Clock size={"20"} className="ah-3 w-3 mr-1 " />
					<span className="">{tasks.dueDate}</span>
				</div>
				</div>

			</div>
			<div className="flex justify-end gap-4 ">
				<button className="rounded-lg border-white/20 text-slate-300 hover:bg-white/10 hover:text-green-600">Check Task</button>
				<button className="hover:bg-gray-100 px-2 rounded" onClick={()=>onEdit(tasks)}><Edit className="h-4 w-4 text-green-600" /></button>
				<button className="hover:bg-gray-100 px-2" title="delete" onClick={()=>onDelete(tasks.id)}><Trash2 className="h-4 w-4 text-black-600 hover:text-red-600 " /></button>
			</div>

		</div>
		
		</>
		)
}

export default TaskItem;