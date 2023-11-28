import React from 'react'
import { StyledContainer } from '../../components/common/Container';
import { useAppSelector } from '../../redux/hooks';

interface MessageInfoContainerProps {
    name?: string;
    username: string;
    profilePicture?: string;
}

const MessageInfo = ({
    name, 
    username,
    profilePicture,
}:MessageInfoContainerProps) => {    

    return (
        <StyledContainer gap={"32px"} flex={2} flexDirection={"row"}>
            <StyledContainer justifyContent={"center"}>
                
            </StyledContainer>
        </StyledContainer>
    );
}

export default MessageInfo