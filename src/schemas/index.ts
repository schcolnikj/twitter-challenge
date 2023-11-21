import * as yup from 'yup';

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

export const signInSchema = yup.object().shape({
    username: yup.string().min(3).required('Required'),
    password: yup.string().min(5).required('Required')
})

export const signUpSchema = yup.object().shape({
    name: yup.string().min(3).required(),
    username: yup.string().min(3).required(),
    email: yup.string().email().required(),
    password: yup.string().matches(passwordRegex, { message: "Please choose a stronger password" }).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Passwords must match! ")
})