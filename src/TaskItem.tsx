



import {CheckCircle, Circle, Clock, Edit, Trash2} from "lucide-react"
import type {Task} from "./Interfaces.ts"


interface TaskItemProp {
	onEdit: (tasks: Task)=> void;
	onDelete: (id: string)=> void;
	tasks: Task;

}
// {onToggle, onEdit, OnDelete, task}
const TaskItem:React.FC<TaskItemProp> = ({onEdit, onDelete, tasks})=>{

// const newDate = JSON.stringify(formattedDate);
// const StandardDate = newDate.toLocalDateString("en-US", {
// 	month: "short",
// 	day: "numeric",
// 	year: "numeric",
// })

	return (
		<>

		<div className="backdrop-blur-xl bg-white/50 rounded-3xl p-5 shadow-lg  border my-3 dark:bg-gray-800 dark:border-none dark:text-white" >
			<div className="flex flex-row gap-2 mb-4">
					<div>
						{tasks.completed ?<CheckCircle /> : <Circle cursor="pointer" />}
					</div>

				<div className=" flex flex-col gap-2 w-full pr-6">
				<h1 className="text-xl font-notoTC truncate">{tasks.title}</h1>
				<div className="dateDiv flex flex-row  item-center ">
					<Clock size={"20"} className="ah-3 w-3 mr-1 " />
					<span className="text-sm">{tasks.dueDate}</span>
				</div>
				</div>

			</div>
			<div className="flex justify-end  ">
				<button className="hover:bg-gray-100 dark:hover:bg-gray-900 dark:p-2  rounded" onClick={()=>onEdit(tasks)}><Edit className="h-4 w-4 text-green-600" /></button>
				<button className="hover:bg-gray-100 px-2 hover:bg-gray-100 dark:hover:bg-gray-900 dark:rounded" title="delete" onClick={()=>onDelete(tasks.id)}><Trash2 className="h-4 w-4 text-black-600 hover:text-red-600 " /></button>
			</div>

		</div>

		</>
		)
}

export default TaskItem;