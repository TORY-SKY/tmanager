
import type {Task} from "./Interfaces.ts"
import TaskItem from "./TaskItem.tsx"
import {motion, AnimatePresence} from "framer-motion"
interface TaskListProp {
	tasks: Task[];
	onEdit: (task: Task)=>void;
	onDelete: (tasks: Task)=>void;

}

const TaskList: React.FC<TaskListProp>=({tasks, onEdit, onDelete})=>{

	return(
<>
	<div className="lg:px-40 ">
		 <AnimatePresence>
		<h1 className=" text-2xl item-center text-center dark:text-white">Today's Task</h1>

        	{tasks.map((task)=>(
        		<motion.div

        			 key={task.id}
              initial={{ opacity: 0, y: -20 }}   // when item enters
              animate={{ opacity: 1, y: 0 }}     // animate to normal
              exit={{ opacity: 0, y: 10 }}       // when item leaves
              transition={{ duration: 0.5 }}     // smooth timing
        		>

        		<TaskItem  tasks={task} onEdit={onEdit} onDelete={onDelete}  key={task.id}    />
        			</motion.div>
        		))}


 </AnimatePresence>
	</div>
</>
		)
}
export default TaskList;