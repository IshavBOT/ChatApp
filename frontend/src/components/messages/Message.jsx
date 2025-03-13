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
//     );
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
	const bubbleBgColor = fromMe ? "bg-blue-500" : "";

	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName}`}>
			<div className='chat-image avatar'>
				<div className='w-10 rounded-full'>
					<img alt='Tailwind CSS chat bubble component' src={profilePic} />
				</div>
			</div>
			<div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
			<div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
		</div>
	);
};
export default Message;