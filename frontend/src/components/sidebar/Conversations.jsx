import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {

    const {loading,conversations} =  useGetConversations();
    console.log("Conversations:",conversations)
	return (
		<div className='py-2 flex flex-col overflow-auto space-y-2'>
			<div className='bg-gradient-to-r from-sky-500/10 to-transparent p-2 rounded-lg'>
				<h3 className='text-sm font-medium text-gray-300 mb-2'>All Users</h3>
				<div className='space-y-3'>
					{conversations.map((conversation,idx)=>(
                        <Conversation 
                        key={conversation._id}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIdx={idx == conversation.length - 1}
                        />
                    ))}
				</div>
			</div>

			{/* <div className='bg-gradient-to-r from-sky-500/5 to-transparent p-2 rounded-lg'>
				<h3 className='text-sm font-medium text-gray-400 mb-2'>Earlier</h3>
				<div className='space-y-3 opacity-80'>
					<Conversation />
					<Conversation />
					<Conversation />
				</div>
			</div> */}
		</div>
	);
};
export default Conversations;