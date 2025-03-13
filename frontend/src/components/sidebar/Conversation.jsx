import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({conversation, lastIdx, emoji}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();
    const isSelected = selectedConversation?._id === conversation._id;
    const {onlineUsers} = useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    return (
        <>
            <div 
                className={`flex gap-4 items-center rounded-2xl p-4 cursor-pointer transition-all duration-300 group
                    ${isSelected 
                        ? "bg-gradient-to-r from-sky-500 to-sky-400 shadow-lg shadow-sky-500/20" 
                        : "hover:bg-gradient-to-r from-sky-500/10 to-transparent hover:shadow-lg hover:shadow-sky-500/10"}
                    backdrop-blur-sm border border-white/10 hover:border-sky-500/20`
                }
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className={`avatar ${isOnline ? "online" : ""}`}>
                    <div className='w-14 rounded-full ring-2 ring-sky-500 ring-offset-2 ring-offset-gray-800 shadow-xl group-hover:shadow-sky-500/30 transition-all duration-300'>
                        <img
                            src={conversation.profilePic}
                            alt='user avatar'
                            className='object-cover hover:scale-105 transition-transform duration-300'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1 gap-1'>
                    <div className='flex justify-between items-center'>
                        <p className={`font-bold text-lg ${isSelected ? "text-white" : "text-gray-200"}`}>
                            {conversation.fullName}
                        </p>
                        <span className={`text-xs px-3 py-1.5 rounded-full font-medium 
                            ${isSelected 
                                ? "bg-white/20 text-white" 
                                : "bg-gray-700/30 text-gray-400"}`
                        }>
                            {emoji}
                        </span>
                    </div>
                    {isOnline && (
                        <p className={`text-xs ${isSelected ? "text-white/80" : "text-sky-400"}`}>
                            Active Now
                        </p>
                    )}
                </div>
            </div>

            {!lastIdx && (
                <div className='divider my-2 h-0.5 bg-gradient-to-r from-sky-500/10 via-sky-400/5 to-transparent opacity-50' />
            )}
        </>
    );
};
export default Conversation;