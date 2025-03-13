import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation,lastIdx,emoji}) => {

    const  {selectedConversation,setSelectedConversation}= useConversation()

    const isSelected = selectedConversation?._id === conversation._id
    const {onlineUsers} = useSocketContext()
    const isOnline = onlineUsers.includes(conversation._id)
	return (
		<>
			<div className={`flex gap-4 items-center hover:bg-gradient-to-r from-sky-500/10 to-transparent rounded-xl p-4 cursor-pointer transition-all duration-300 group backdrop-blur-sm border border-transparent hover:border-sky-500/20 hover:shadow-lg hover:shadow-sky-500/10
                ${isSelected ? "bg-sky-500" : ""}`
            }
                onClick={()=>setSelectedConversation(conversation)}
            >
				<div className={`avatar ${isOnline ? "online" : ""}`}>
					<div className='w-12 rounded-full ring ring-sky-500 ring-offset-2 ring-offset-gray-800 shadow-xl group-hover:shadow-sky-500/30 transition-all duration-300'>
						<img
							src={conversation.profilePic}
							alt='user avatar'
							className='object-cover hover:scale-105 transition-transform duration-300'
						/>
					</div>
				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between items-center'>
						<p className='font-bold text-gray-200'>{conversation.fullName}</p>

						<span className='text-xs text-gray-400 bg-gray-700/30 px-2 py-1 rounded-full'>{emoji}</span>
					</div>
				</div>
			</div>

			 {!lastIdx && <div className='divider my-2 h-px bg-gradient-to-r from-sky-500/10 to-transparent' />}
		</>
	);
};
export default Conversation;