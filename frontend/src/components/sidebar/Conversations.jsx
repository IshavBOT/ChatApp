import Conversation from "./Conversation";

const Conversations = () => {
	return (
		<div className='py-2 flex flex-col overflow-auto space-y-2'>
			<div className='bg-gradient-to-r from-sky-500/10 to-transparent p-2 rounded-lg'>
				<h3 className='text-sm font-medium text-gray-300 mb-2'>Recent Conversations</h3>
				<div className='space-y-3'>
					<Conversation />
					<Conversation />
					<Conversation />
				</div>
			</div>

			<div className='bg-gradient-to-r from-sky-500/5 to-transparent p-2 rounded-lg'>
				<h3 className='text-sm font-medium text-gray-400 mb-2'>Earlier</h3>
				<div className='space-y-3 opacity-80'>
					<Conversation />
					<Conversation />
					<Conversation />
				</div>
			</div>
		</div>
	);
};
export default Conversations;