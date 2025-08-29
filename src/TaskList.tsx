
import type {Task} from "./Interfaces.ts"
import TaskItem from "./TaskItem.tsx"
import {motion, AnimatePresence} from "framer-motion"
interface TaskListProp {
	tasks: Task;
	onEdit: (task: Task)=>void;
	onDelete: (id: string)=>void;
	onToggle: (id: string)=>void;
}

const TaskList: React.FC<TaskListProp>=({tasks, onEdit, onDelete, onToggle})=>{

	return(
<>
	<div className="lg:px-40 ">
		 <AnimatePresence>
		<h1 className="font-noto">Today's Task</h1>

        	{tasks.map((task)=>(
        		<motion.div

        			 key={task.id}
              initial={{ opacity: 0, y: -10 }}   // when item enters
              animate={{ opacity: 1, y: 0 }}     // animate to normal
              exit={{ opacity: 0, y: 10 }}       // when item leaves
              transition={{ duration: 0.3 }}     // smooth timing
        		>

        		<TaskItem  tasks={task} onEdit={onEdit} onDelete={onDelete} onToggle={onToggle} key={task.id}    />
        			</motion.div>
        		))}


 </AnimatePresence>
	</div>
</>
		)
}
export default TaskList;