// import { useEffect,useRef } from "react";
// import useGetMessages from "../../hooks/useGetMessages";
// import MessageSkeleton from "../skeletons/MessageSkeleton";
// import Message from "./Message";
// import useListenMessages from "../../hooks/useListenMessages";

// const Messages = () => {

// 	const {messages , loading} = useGetMessages()
// 	useListenMessages()
// 	const lastMessageRef = useRef()

// 	useEffect(()=>{
// 		setTimeout(()=>{
// 			lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
// 		},100)
// 	},[messages])
	
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>

// 			{!loading && messages.length > 0 && messages.map((message)=>(
// 				<div key={message._id}
// 					ref={lastMessageRef}>

// 					<Message  message={message} />
// 				</div>
// 			))}

// 			{loading && [...Array(3)].map((_,idx)=> <MessageSkeleton key={idx}/>)}
// 			{!loading && messages.length === 0 &&(
// 				<p className="text-center">Send a message to start the conversation</p>
// 			)}
// 		</div>
// 	);
// };
// export default Messages;




import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages = () => {
	const { messages, loading } = useGetMessages();
	useListenMessages();
	const lastMessageRef = useRef();

	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto custom-scrollbar'>
			<div className="flex flex-col space-y-4 py-4">
				{!loading && messages.length > 0 && messages.map((message) => (
					<div 
						key={message._id} 
						ref={lastMessageRef}
						className="animate-fade-in"
					>
						<Message message={message} />
					</div>
				))}

				{loading && [...Array(3)].map((_, idx) => (
					<div key={idx} className="animate-pulse">
						<MessageSkeleton />
					</div>
				))}
				
				{!loading && messages.length === 0 && (
					<div className="flex flex-col items-center justify-center min-h-[200px] rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-8">
						<div className="w-16 h-16 rounded-full bg-sky-500/20 flex items-center justify-center mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
							</svg>
						</div>
						<p className="text-gray-300 text-lg font-medium">Start a New Conversation</p>
						<p className="text-gray-400 text-sm mt-2">Send a message to begin chatting</p>
					</div>
				)}
			</div>
		</div>
	);
};
export default Messages;
// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;
