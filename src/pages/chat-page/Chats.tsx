import React from 'react';
import { Chat, MessageDTO } from '../../service';
import { StyledContainer } from '../../components/common/Container';
import AuthorData from '../../components/tweet/user-post-data/AuthorData';
import { StyledH3, StyledP } from '../../components/common/text';
import ChatMessage from './Chat';
import MessageInput from '../../components/message-input/MessageInput';
import LandingMessage from './LandingMessage';

interface ChatsProps {
  chat: Chat | null; 
}

const Chats = ({ chat }: ChatsProps) => {
    
    return (
      
      <StyledContainer>
        {
          chat === null ? (
            <LandingMessage />
          ):(
            <StyledContainer>
                <StyledContainer
                style={{ width: "100%" }}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                maxHeight={"2em"}
                marginTop={'20px'}
                >
                <AuthorData
                    id={chat.user2.id}
                    name={chat.user2.name? chat.user2.name : ""}
                    username={chat.user2.username}
                    createdAt={chat.user2.createdAt}
                    profilePicture={chat.user2.profilePicture}
                />
    
                </StyledContainer>
    
                <StyledContainer
                    marginTop={'2em'}
                    display={'flex'}
                    gap={'2em'}
                    overflow={'scroll'}
                >
                    {
                        chat?.messages
                            .map((m: MessageDTO) => (
                                <ChatMessage message={m} user1Id={chat.user1Id} user2Id={chat.user2Id} />
                            ))
                    }
                </StyledContainer>
                <MessageInput />
            </StyledContainer>
          )
        }
      </StyledContainer>
    )
  }

export default Chats