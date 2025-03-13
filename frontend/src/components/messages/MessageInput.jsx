import { BsSend } from "react-icons/bs";

const MessageInput = () => {
	return (
		<form className='px-4 my-3'>
			<div className='relative w-full'>
				<input
					type='text'
					className='w-full p-3 pl-4 pr-12 rounded-lg bg-white backdrop-blur-lg border border-gray-300 text-gray-900 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 placeholder:text-gray-500 shadow-xl'
					placeholder='Send a message...'
				/>
				<button 
					type='submit' 
					className='absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-600 backdrop-blur-lg text-white shadow-xl active:scale-95'
				>
					<BsSend className='w-5 h-5' />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;