

import { X } from 'lucide-react';
import {useState} from "react";
import type {Task} from "./Interfaces.ts";
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {

	tasks: Task[];
	onClose: ()=> void;
	onSave: (editedTask: Task) => void;

}

const EditModal:React.FC<ModalProps> = ({ tasks, onClose, onSave})=>{
	const [editedTask, setEdittedTask] = useState<Task>(tasks);
	return(
<>
<AnimatePresence>
	<div 

		className="modal fixed inset-0 flex items-center justify-center z-10 p-4 ">
		<div id="modal-backdrop" className="absolute inset-0 bg-gray-900 opacity-50 z-20"></div>
		<motion.div 
			initial={{ scale: 0.8, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 90 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}

			className="flex flex-col border bg-white shadow z-50 p-5 items-center justify-center border rounded-2xl" >
			<nav className="flex items-center justify-between w-full mb-2">
				<h1 className="">Edit Task</h1>
				<button className="" onClick={()=>onClose()}><X className="hover:text-red-600" size={24} /><span className="sr-only">close</span></button>
			</nav>
			<div>
					<input placeholder="Edit Task title" 
						className="w-full border-2 border-gray-300  rounded p-3 bg-transparent my-3 rounded-2xl" 
						value={editedTask.title}
						onChange={(e)=>setEdittedTask({...editedTask, title:e.target.value})}
					/>
					<textarea placeholder="Edit Task Description" 
						value={editedTask.description}
						onChange={(e)=>setEdittedTask({...editedTask, description:e.target.value})}
						
						className="w-full border-2 border-gray-300  rounded p-3 bg-transparent my-3 rounded-2xl" />
						
					<button className="float-right bg-green-500 text-white px-3 py-3 rounded-2xl hover:bg-green-600 mx-3"
						onClick={()=>onSave(editedTask)}
					>Save Changes</button>
						<button className="float-right bg-red-400 text-white px-3 py-3 rounded-2xl hover:bg-red-600"
						onClick={()=>onClose()}
					>cancel</button>

			</div>
		</motion.div>
	</div>
</AnimatePresence>

</>
		)
}

export default EditModal;