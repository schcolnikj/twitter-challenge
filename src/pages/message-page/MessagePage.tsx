import { StyledContainer } from '../../components/common/Container';
import { StyledH5 } from '../../components/common/text';
import MessageInfo from './MessageInfo';
import { useAppSelector } from '../../redux/hooks';
import ContentMessages from '../../components/message/ContentMessages';
import ChatPage from '../chat-page/ChatPage';
const MessagePage = () => {
  const user = useAppSelector((state) => state.user)

  return (
    <>
        <StyledContainer
            borderBottom={'1px solid #ebeef0'}
            padding={'16px'}
        >
            <StyledH5>Messages</StyledH5>
           <StyledContainer
            alignItems={'center'}
            padding={'24px 0 0 0'}
            flexDirection={'row'}
           >
              <ContentMessages />
             <MessageInfo username={user.username} />
            </StyledContainer> 
        </StyledContainer>
        <StyledContainer width={'100%'} borderLeft={'1px solid #ebeef0'} alignItems={'center'} flexDirection={'row'} padding={'24px 0 0 24px'} >
          <ChatPage />
        </StyledContainer>
    </>
  )
}

export default MessagePage