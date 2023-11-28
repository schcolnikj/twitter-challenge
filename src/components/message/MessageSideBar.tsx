import React from 'react'
import { Chat, MessageDTO } from '../../service'
import Message from './Message';

interface SideBarProps {
  chat: Chat;
  message: MessageDTO;
}

const MessageSideBar = ({ message, chat }: SideBarProps) => {
  return (
    <>
        
        <Message key={message.id} message={message} chat={chat} />
    </>
  )
}

export default MessageSideBar