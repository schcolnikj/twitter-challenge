import React from 'react'
import { StyledContainer } from '../../components/common/Container'
import { StyledH3, StyledP } from '../../components/common/text';
import { ConfigButton } from '../../components/config-button/ConfigButton';
import { useTranslation } from 'react-i18next';

const LandingMessage = () => {
    const { t } = useTranslation();
    return (
        <StyledContainer
            alignItems={'center'}
            display={'flex'}
            gap={'8px'}
            marginBottom={'80px'}
        >
            <StyledContainer
                textAlign={'center'}
                display={'flex-col'}
                gap={'8px'}
            >
            <StyledH3>
                Select a message
            </StyledH3>
            <StyledP primary={false} >
                Choose from your existing conversations, start a new one, or just keep swimming.
            </StyledP>
            </StyledContainer>
            <ConfigButton
                variant={'fulfilled'}
                size={'large'}
                type='submit'
                onClick={() => {}}
            >
                {t("buttons.message")}
            </ ConfigButton>
        </StyledContainer>
    )
}

export default LandingMessage