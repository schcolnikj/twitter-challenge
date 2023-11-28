import { StyledContainer } from "../common/Container";
import { StyledTweetContainer } from "../tweet/TweetContainer";
import { Chat, MessageDTO, User } from "../../service";
import { setChat } from "../../redux/user";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface MessageProps {
    chat: Chat;
    message: MessageDTO;
}

const Message = ({ message, chat }: MessageProps) => {
    const dispatch = useAppDispatch();
    const currentChat: Chat | null = useAppSelector((state) => state.user.currentChat)

    const handleStateChange = () => {
        currentChat === chat ? 
            dispatch(setChat(null)) 
        : 
            dispatch(setChat(chat));
    };

    return (
        <StyledTweetContainer>
            <StyledContainer
             style={{ width: "100%" }}
             flexDirection={"row"}
             alignItems={"center"}
             justifyContent={"center"}
             maxHeight={"48px"}
             onClick={() => {handleStateChange()}}
            > 
                <img src={chat.user2.profilePicture} />

                <p> 
                    @{chat.user2.username} : 
                </p>

                <p>
                    {message[0].body}
                </p>
            </StyledContainer>
        </StyledTweetContainer>
    )
}

export default Message;