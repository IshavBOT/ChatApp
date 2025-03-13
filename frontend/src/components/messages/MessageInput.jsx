import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
    const [message,setMessage] = useState("")
    const {loading,sendMessage} = useSendMessage()
    const handleSubmit =async (e)=>{
        e.preventDefault();
        if(!message) return
        await sendMessage(message);
        setMessage("")
    }
	return (
		<form onSubmit={handleSubmit} className='px-4 my-3'>
			<div className='relative w-full'>
				<input
					type='text'
					className='w-full p-4 pl-5 pr-12 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-gray-800 focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/40 placeholder:text-gray-500 shadow-2xl transition-all duration-300 hover:border-sky-400'
					placeholder='Type your message here...'
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
				/>
				<button 
					type='submit' 
					className='absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl bg-gradient-to-br from-sky-500 via-sky-600 to-sky-700 backdrop-blur-lg text-white shadow-2xl hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-[52%] active:scale-95 disabled:opacity-70'
                    disabled={loading}
				>
					{loading ? (
                        <div className="loading loading-spinner loading-sm"></div>
                    ) : (
                        <BsSend className='w-5 h-5 hover:rotate-12 transition-transform' />
                    )}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;