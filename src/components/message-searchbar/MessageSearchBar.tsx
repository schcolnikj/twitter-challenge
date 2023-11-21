import React from 'react'
import { MessageInputContainer } from './MessageInputContainer'
import { useFormik } from 'formik'
import { MessageSearchBarInput } from './SearchBarInput';


const MessageSearchBar = () => {


  const { values, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      input: "",
    },
    onSubmit: values => {
      console.log("searching...");
      
    },
  });

  console.log(values);
  

  return (
    <MessageInputContainer>
        <MessageSearchBarInput 
        value={values.input}
        onChange={handleChange("input")}
        placeholder={"search users..."}
        color={'blue'}
        />
    </MessageInputContainer>
  )
}

export default MessageSearchBar