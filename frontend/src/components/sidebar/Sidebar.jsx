import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import { BsChatDots } from "react-icons/bs";

const Sidebar = () => {
    
	return (
		<div className='border-r border-white/10 p-6 flex flex-col bg-gradient-to-b from-gray-800/95 to-gray-900/95 backdrop-blur-xl min-w-[300px] shadow-2xl'>
			<h2 className='text-3xl font-bold text-white mb-6 flex items-center gap-3'>
				<BsChatDots className="text-sky-400 drop-shadow-lg" />
				<span className='bg-gradient-to-r from-sky-400 via-blue-500 to-blue-600 bg-clip-text text-transparent drop-shadow'>
					Messages
				</span>
				<div className='w-2 h-2 rounded-full bg-sky-400 animate-pulse shadow-lg shadow-sky-400/50'></div>
			</h2>
			
			<div className="hover:scale-[1.02] transition-transform duration-300">
				<SearchInput />
			</div>

			<div className='divider px-3 my-6 before:bg-white/5 after:bg-white/5 before:shadow-lg after:shadow-lg'></div>
			
			<div className='flex-1 overflow-auto custom-scrollbar pr-2 hover:pr-1 transition-all duration-300'>
				<Conversations />
			</div>

			<div className='divider px-3 my-6 before:bg-white/5 after:bg-white/5 before:shadow-lg after:shadow-lg'></div>
			
			<div className="hover:scale-[1.02] transition-transform duration-300">
				<LogoutButton />
			</div>
		</div>
	);
};
export default Sidebar;