import React from 'react';
import { Chat } from "../../service";
import { StyledContainer } from "../common/Container";
import Loader from "../loader/Loader";
import Message from './Message';
import MessageSideBar from './MessageSideBar';

interface ChatsProps {
    chats: Chat[];
}

const Messages = ({ chats }: ChatsProps) => {
  return (
    <StyledContainer>
        {chats
            .filter((chat: Chat, index: number, self: Chat[]) => {
                return self.findIndex((c) => c.id === chat.id) === index;
            })
            .map((chat: Chat) => (
                <MessageSideBar key={chat.id} chat={chat} message={chat.messages} />
                // <Message key={message.id} body={message.body} />
            ))
        }
    </StyledContainer>
  )
}

export default Messages

