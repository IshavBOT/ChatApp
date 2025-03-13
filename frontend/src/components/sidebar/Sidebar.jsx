// STARTER CODE FOR THIS FILE
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className='border-r border-gray-600/50 p-4 flex flex-col bg-gray-800/95 backdrop-blur-md min-w-[280px] shadow-xl'>
			<h2 className='text-2xl font-bold text-white mb-4 flex items-center gap-2'>
				<span className='bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent'>Messages</span>
				<span className='w-2 h-2 rounded-full bg-sky-500 animate-pulse'></span>
			</h2>
			<SearchInput />
			<div className='divider px-2 my-4 before:bg-gray-600/50 after:bg-gray-600/50 before:shadow-lg after:shadow-lg'></div>
			<div className='flex-1 overflow-auto scrollbar-thin scrollbar-thumb-sky-500 scrollbar-track-gray-700/50 pr-2'>
				<Conversations />
			</div>
			<div className='divider px-2 my-4 before:bg-gray-600/50 after:bg-gray-600/50 before:shadow-lg after:shadow-lg'></div>
			<LogoutButton />
		</div>
	);
};
export default Sidebar;