
import {useState} from "react";
import { X } from 'lucide-react';

import type {Tasks} from "./interface"

interface ModalProps {
	isOpen: boolean;
	task: Task[];
	onClose: ()=> void;
	onSave: (task: Task) => void;

}

const EditModal:React.FC<ModalProps> = ({OnOpen, tasks, onClose, onSave})=>{
	function handleModal(task: Task){
		

	}
handleModal(tasks);
	return(
<>
	<div className="modal fixed inset-0 flex items-center justify-center z-10 p-4 ">
		<div id="modal-backdrop" className="absolute inset-0 bg-gray-900 opacity-50 z-20"></div>
		<div className="flex flex-col border bg-gray-200 z-50 p-5 items-center justify-center" >
			<nav className="flex items-center justify-between w-full">
				<h1 className="">Edit Task</h1>
				<button className="" onClick={()=>onClose()}><X size={24} /></button>
			</nav>
			<div>
					<input placeholder="Edit Task title" className="w-full border-2 border-gray-300  rounded p-3 bg-transparent my-3 rounded-2xl" />
					<input placeholder="Edit Task Description" className="w-full border-2 border-gray-300  rounded p-3 bg-transparent my-3 rounded-2xl" />
					<button className="float-right bg-green-400 text-white px-3 py-3 rounded-2xl hover:bg-green-500">Save Changes</button>

			</div>
		</div>
	</div>
</>
		)
}

export default EditModal;