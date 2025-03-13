const Message = () => {
    return (
      <div className='chat chat-end'>
        <div className='chat-image avatar'>
          <div className='w-10 rounded-full ring ring-sky-500 ring-offset-2 ring-offset-gray-800 shadow-xl'>
            <img
              alt='User avatar'
              src={
                "https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              }
              className="object-cover"
            />
          </div>
        </div>
        <div className={'chat-bubble rounded-2xl text-white bg-gradient-to-r from-sky-500 to-sky-600 shadow-xl backdrop-blur-sm border border-sky-500/20'}>
          Hi! What is up?
        </div>
        <div className='chat-footer opacity-70 text-xs flex gap-2 items-center text-gray-300'>
          <span className='bg-gray-700/30 px-2 py-1 rounded-full'>12:42</span>
          <span className="text-sky-400">✓</span>
        </div>
      </div>
    );
  };
  
  export default Message;