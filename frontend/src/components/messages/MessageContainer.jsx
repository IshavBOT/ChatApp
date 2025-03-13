// import { useEffect } from "react";
// import useConversation from "../../zustand/useConversation";
// import Conversation from "../sidebar/Conversation";
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";
// import {TiMessages} from "react-icons/ti"
// import { useAuthContext } from "../../context/AuthContext";

// const MessageContainer = () => {
//     const {selectedConversation,setSelectedConversation} = useConversation()
//     useEffect(()=>{
//         return setSelectedConversation(null)
//     },[setSelectedConversation])

// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			{!selectedConversation ? <NoChatSelected /> :(
//                 <>

            
// 				{/* Header */}
// 				<div className='bg-gradient-to-r from-sky-500/10 to-transparent px-6 py-4 mb-4 backdrop-blur-md border-b border-gray-600/50 shadow-lg'>
// 					<div className='flex items-center gap-4'>
// 						<div className='avatar online'>
// 							<div className='w-12 rounded-full ring ring-sky-500 ring-offset-2 ring-offset-gray-800'>
// 								<img
// 									src={selectedConversation.profilePic}
// 									alt='user avatar'
// 									className='object-cover hover:scale-105 transition-transform duration-300'
// 								/>
// 							</div>
// 						</div>
// 						<div>
// 							<h3 className='font-bold text-lg text-gray-200'>{selectedConversation.fullName}</h3>
// 							{/* <p className='text-sm text-white-400'>Active Now</p> */}
// 						</div>
// 					</div>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
//             )}
// 		</div>
// 	);
// };

// const NoChatSelected = () => {
//     const {authUser} = useAuthContext()
//     return (
//       <div className='flex items-center justify-center w-full h-full'>
//         <div className='px-6 py-8 text-center rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'>
//           <div className='flex flex-col items-center gap-3'>
//             <div className='w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center'>
//               <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 text-sky-500' fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//               </svg>
//             </div>
//             <p className='text-xl font-semibold text-gray-200'>Welcome 👋 {authUser.fullName.toUpperCase()} ❄</p>
//             <p className='text-gray-400 text-sm'>Select a chat to start messaging</p>
//             <TiMessages className='text-3xl md:text-6xl text-center' />
//           </div>
//         </div>
//       </div>
//     );
//   };
// export default MessageContainer;



import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='md:min-w-[450px] flex flex-col'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='bg-slate-500 px-4 py-2 mb-2'>
						<span className='label-text'>To:</span>{" "}
						<span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;