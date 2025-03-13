// import { useAuthContext } from "../../context/AuthContext";
// import { extractTime } from "../../utils/extractTime";
// import useConversation from "../../zustand/useConversation";

// const Message = ({message}) => {
//     const {authUser}= useAuthContext()
//     const {selectedConversation}= useConversation()
//     const fromMe = message.senderId === authUser._id;
//     const formattedTime = extractTime(message.createdAt)
//     const chatClassName = fromMe ? 'chat-end' : 'chat-start';
//     const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
//     const bubbleBgColor = fromMe ? 'bg-blue-500' : '';
//     const shakeClass = message.shouldShake ? "shake" :""
//     return (
//       <div className={`chat ${chatClassName}`}>
//         <div className='chat-image avatar'>
//           <div className='w-10 rounded-full ring ring-sky-500 ring-offset-2 ring-offset-gray-800 shadow-xl'>
//             <img
//               alt='User avatar'
//               src={profilePic}
//               className="object-cover"
//             />
//           </div>
//         </div>
//         <div className={`chat-bubble rounded-2xl text-white shadow-xl ${bubbleBgColor} ${shakeClass} pb-2` }>
//           {message.message}
//         </div>
//         <div className='chat-footer opacity-70 text-xs flex gap-2 items-center text-gray-300'>
//           <span className='bg-gray-700/30 px-2 py-1 rounded-full'>{formattedTime}</span>
//           <span className="text-sky-400">✓</span>
//         </div>
//       </div>
//     
//   };
  
//   export default Message;

import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe 
		? "bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600" 
		: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-12 rounded-full ring-2 ring-sky-500 ring-offset-2 ring-offset-gray-900 shadow-lg'>
					<img 
						alt='User avatar'
						src={profilePic}
						className="object-cover"
					/>
				</div>
			</div>
			<div 
				className={`chat-bubble text-white shadow-xl backdrop-blur-lg 
					${bubbleBgColor} ${shakeClass} pb-2 
					border border-white/10
					rounded-2xl`}
			>
				{message.message}
			</div>
			<div className='chat-footer opacity-80 text-xs flex gap-2 items-center text-gray-300'>
				<span className='text-[10px]'>{formattedTime}</span>
				<span className="text-sky-400 drop-shadow-md">✓</span>
			</div>
		</div>
	);
};
export default Message;