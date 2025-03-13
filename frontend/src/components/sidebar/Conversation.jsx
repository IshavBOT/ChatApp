const Conversation = () => {
	return (
		<>
			<div className='flex gap-4 items-center hover:bg-gradient-to-r from-sky-500/10 to-transparent rounded-xl p-4 cursor-pointer transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-sky-500/20 hover:shadow-lg hover:shadow-sky-500/10'>
				<div className='avatar online'>
					<div className='w-12 rounded-full ring ring-sky-500 ring-offset-2 ring-offset-gray-800 shadow-xl group-hover:shadow-sky-500/30 transition-all duration-300'>
						<img
							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
							alt='user avatar'
							className='object-cover hover:scale-105 transition-transform duration-300'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between items-center'>
						<p className='font-bold text-gray-200 group-hover:text-sky-400 transition-colors duration-300 group-hover:scale-105 origin-left'>John Doe</p>
						<span className='text-xs text-gray-400 group-hover:text-sky-400 transition-colors duration-300 bg-gray-700/30 px-2 py-1 rounded-full group-hover:bg-sky-500/20'>12:00 PM</span>
					</div>
					<p className='text-gray-400 text-sm truncate group-hover:text-gray-300 transition-colors duration-300 mt-1'>Last message goes here...</p>
				</div>
			</div>

			<div className='divider my-2 h-px bg-gradient-to-r from-sky-500/10 to-transparent' />
		</>
	);
};
export default Conversation;