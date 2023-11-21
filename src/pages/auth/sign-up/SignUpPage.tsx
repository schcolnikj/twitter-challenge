import { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthWrapper from "../../../pages/auth/AuthWrapper";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import LabeledInput from "../../../components/labeled-input/LabeledInput";
import Button from "../../../components/button/Button";
import { ButtonType } from "../../../components/button/StyledButton";
import { StyledH3 } from "../../../components/common/text";
import { useFormik } from "formik";
import { signUpSchema } from "../../../schemas";

interface SignUpData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpPage = () => {
  const [error, setError] = useState<SignUpData>({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const httpRequestService = useHttpRequestService();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
    const onSubmit = async (values: SignUpData) => {
      const data = {email: values.email, username: values.username, name: values.name, password: values.password};
      httpRequestService
        .signUp(data)
        .then(() => navigate("/"))
        .catch((e) => {
          if (e.response.status === 409) {
            
            setError({
              ...error,
              email: "Please check your email, it may be already in use!",
              username: "Please check your username, it may be already in use!",
            })
          }
        });
    };
    

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: onSubmit, 
    validationSchema: signUpSchema,
  })

 
  return (
    <AuthWrapper>
      <div className={"border"}>
        <div className={"container"}>
          <div className={"header"}>
            <img src={logo} alt="Twitter Logo" />
            <StyledH3>{t("title.register")}</StyledH3>
          </div>
          <form onSubmit={handleSubmit} className={"input-container"}>
            <LabeledInput
              required
              placeholder={"Enter name..."}
              title={t("input-params.name")}
              name="name"
              id="name"
              onChange={handleChange("name")}
              value={values.name}
            />
            {errors.name && <span>{errors.name}</span>}
            <LabeledInput
              required
              placeholder={"Enter username..."}
              title={t("input-params.username")}
              name="username"
              id="name"
              onChange={handleChange("username")}
              value={values.username}
            />
            {errors.username && touched && <span>{errors.username}</span>}
            
            <LabeledInput
              required
              placeholder={"Enter email..."}
              title={t("input-params.email")}
              name="email"
              id="email"
              onChange={handleChange("email")}
              value={values.email}
            />
            {errors.email && <span>{errors.email}</span>}

            <LabeledInput
              type="password"
              required
              placeholder={"Enter password..."}
              title={t("input-params.password")}
              name="password"
              id="password"
              onChange={handleChange("password")}
              value={values.password}
            />
            {errors.password && <span>{errors.password}</span>}

            <LabeledInput
              type="password"
              required
              placeholder={"Confirm password..."}
              title={t("input-params.confirm-password")}
              name="confirmPassword"
              id="confirmPassword"
              onChange={handleChange("confirmPassword")}
              value={values.confirmPassword}
            />
            {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
            
          </form>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              text={t("buttons.register")}
              buttonType={ButtonType.FOLLOW}
              size={"MEDIUM"}
              onClick={() => handleSubmit()}
            />
            <Button
              text={t("buttons.login")}
              buttonType={ButtonType.OUTLINED}
              size={"MEDIUM"}
              onClick={() => navigate("/sign-in")}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignUpPage;
