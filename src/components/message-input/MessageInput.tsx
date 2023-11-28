import { useEffect, useState } from 'react';
import { StyledContainer } from '../common/Container';
import LabeledInput from '../labeled-input/LabeledInput';
import { ConfigButton } from '../config-button/ConfigButton';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { useAppSelector } from '../../redux/hooks';
import { Chat } from '../../service';
import { useSocket } from '../../hooks/useSocket';

const MessageInput = () => {
    const { t } = useTranslation();
    const chat: Chat = useAppSelector((state) => state.user.currentChat)
    
    const socket = useSocket();
      
    const onSubmit = () => {
      const to = chat.id;
      console.log('Mensaje enviado!', values.message);
      const message = values.message;
      socket.emit({to, message});
      setFieldValue('message', '')
    }
      
    const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
      initialValues: {
        message: "",
      },
      onSubmit: onSubmit,
    })
   
  return (
    <StyledContainer
        alignItems={'center'}
        flexDirection={'row'}
        justifyContent={'end'}
    >
        <form onSubmit={handleSubmit} >
            <LabeledInput
            required
            placeholder={'Enter your message...'}
            title={t("placeholder.send")}
            name="message"
            id="message"
            onChange={handleChange("message")}
            value={values.message}
            />
        </form>
        <ConfigButton 
            variant={'white'}
            size={'small'}
            color={'blue'}
            type='submit'
            onClick={() => handleSubmit()}
            disabled={values.message.length === 0}
        >
            {t("buttons.send")}
        </ConfigButton>
    </StyledContainer>
  )
}

export default MessageInput