import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<div className='relative flex-1'>
				<input 
					type='text' 
					placeholder='Search users...' 
					className='w-full p-2.5 pl-10 rounded-lg bg-gray-700/30 backdrop-blur-lg border border-gray-600/50 text-white focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 placeholder:text-gray-400 shadow-xl transition-all duration-300 hover:bg-gray-700/40'
				/>
				<IoSearchSharp className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-sky-500 transition-colors duration-300' />
			</div>
			<button 
				type='submit' 
				className='p-2.5 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 backdrop-blur-lg transition-all duration-300 text-white shadow-xl hover:shadow-sky-500/30 hover:scale-105 active:scale-95 ring-2 ring-sky-500/40 ring-offset-2 ring-offset-gray-800'
			>
				<IoSearchSharp className='w-5 h-5' />
			</button>
		</form>
	);
};
export default SearchInput;