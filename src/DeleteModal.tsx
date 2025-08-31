

import { motion, AnimatePresence } from "framer-motion"

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  taskName?: string;
}
const DeleteModal:React.FC<DeleteModalProps> = ({isOpen, onClose, onConfirm, taskName})=>{
if(!isOpen) return null;

	return (
<>

<AnimatePresence>
			
	<div 

		className={` modal fixed inset-0 flex items-center justify-center z-10 p-4`}>
		<div id="modal-backdrop" className="dark:backfrop-filter dark:backdrop-blur-md dark:bg-opacity-50 dark:bg-gray-300 bg-gray-800 absolute inset-0  opacity-50 z-20 dark:opacity-80"></div>
		<motion.div 
			initial={{ scale: 0.1, opacity: 0, y: -50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 90 }}
            transition={{ type: "spring", stiffness: 400, damping: 35 }}

			className="backfrop-filter backdrop-blur-md bg-opacity-50  flex flex-col border bg-white shadow-xl z-50 p-5 items-center justify-center border rounded-2xl dark:bg-gray-800 dark:text-white dark:border-none text-center" >
			
				<div className="w-40 lg:w-60 ">
					<img src='./illus.png' className="w-full" />
				</div>
					<h2 className="text-xl">{taskName}</h2>
			<h1 className="border-l-2 border-red-500 bg-red-100 backfrop-filter backdrop-blur-md bg-opacity-50 mb-2 p-1 lg:p-2">Are you sure you want to delete this item</h1>

					<div className="flex flex-row item-center justify-center w-full gap-3">
			<button onClick={()=> onConfirm()} className="shadow-xl  p-4 rounded-xl w-1/2 text-white bg-red-500">Yes</button>
			<button  className="border p-4 rounded-xl w-1/2 text-black bg-gray-300 shadow-lg" onClick={()=>onClose()}>cancel</button>
		</div>

		</motion.div>
	</div>
</AnimatePresence>
	
</>
		)
}

export default DeleteModal