
import { MessageDTO } from '../../service'
import { StyledP } from '../../components/common/text';
import StyledMessageContainer from './StyledMessageContainer';

interface ChatProps {
  message: MessageDTO;
  user1Id: string;
  user2Id: string;
}

const ChatMessage = ({ message, user1Id, user2Id }: ChatProps) => {
  
  return (
    <StyledMessageContainer
      backgroundColor=' #dfe2e4 '
      borderColor='none'
      textAlign={user2Id === message.senderId ? 'left' : 'right'}
    >
      <StyledP
        primary
      >
        {message.body}
      </StyledP>
    </StyledMessageContainer>
  )
}

export default ChatMessage