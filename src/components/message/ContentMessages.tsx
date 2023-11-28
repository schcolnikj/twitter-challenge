import { useEffect } from 'react';
import Messages from './Messages';
import { User } from '../../service';
import { useGetChats } from '../../hooks/useGetChats';

const ContentMessages =  () => {
  const { chats } = useGetChats(); 
  return (
    <Messages chats={chats} />
  )
}

export default ContentMessages