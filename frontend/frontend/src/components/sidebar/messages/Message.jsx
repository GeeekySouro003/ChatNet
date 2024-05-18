import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img alt='Tailwind CSS Chat bubble component'
                src={'https://avatar.iran.liara.run/public'} />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hello!Thala for a reason?</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10:55</div>
    </div>
  )
}

export default Message