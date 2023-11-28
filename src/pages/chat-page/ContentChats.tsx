import React, { useEffect } from 'react'
import { Chat } from '../../service'
import { useAppSelector } from '../../redux/hooks'
import Chats from './Chats'

const ContentChats = () => {
  const chat: Chat | null = useAppSelector((state) => state.user.currentChat)

  return (
    <Chats chat={chat} />
  )
}

export default ContentChats