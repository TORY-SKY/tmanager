import { Home, Calendar, MessageSquare, User, Plus } from "lucide-react";

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md rounded-t-2xl">
      <div className="flex justify-around items-center relative h-16">
        
        {/* Left Icons */}
        <button className="text-blue-500 flex flex-col items-center">
          <Home size={24} />
        </button>
        <button className="text-gray-500 flex flex-col items-center">
          <Calendar size={24} />
        </button>

        {/* Floating Action Button (FAB) */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg">
            <Plus size={28} />
          </button>
        </div>

        {/* Right Icons */}
        <button className="text-gray-500 flex flex-col items-center">
          <MessageSquare size={24} />
        </button>
        <button className="text-gray-500 flex flex-col items-center">
          <User size={24} />
        </button>
      </div>
    </div>
  );
}
