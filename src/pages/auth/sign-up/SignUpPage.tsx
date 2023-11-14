import type { ChangeEvent } from "react";
import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthWrapper from "../../../pages/auth/AuthWrapper";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import LabeledInput from "../../../components/labeled-input/LabeledInput";
import Button from "../../../components/button/Button";
import { ButtonType } from "../../../components/button/StyledButton";
import { StyledH3, StyledP } from "../../../components/common/text";

interface SignUpData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpPage = () => {
  const [data, setData] = useState<Partial<SignUpData>>({});
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

  const handleChange =
    (prop: string) => (event: ChangeEvent<HTMLInputElement>) => {
      setData({ ...data, [prop]: event.target.value });
    };
  const handleSubmit = async () => {
    const { confirmPassword, ...requestData } = data;
    httpRequestService
      .signUp(requestData)
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

  return (
    <AuthWrapper>
      <div className={"border"}>
        <div className={"container"}>
          <div className={"header"}>
            <img src={logo} alt="Twitter Logo" />
            <StyledH3>{t("title.register")}</StyledH3>
          </div>
          <div className={"input-container"}>
            <LabeledInput
              required
              placeholder={"Enter name..."}
              title={t("input-params.name")}
              onChange={handleChange("name")}
            />
            {error.name.length ? <span>{error.name}</span> : null}
            <LabeledInput
              required
              placeholder={"Enter username..."}
              title={t("input-params.username")}
              onChange={handleChange("username")}
            />
            {error.username.length ? <span>{error.username}</span> : null}            
            <LabeledInput
              required
              placeholder={"Enter email..."}
              title={t("input-params.email")}
              onChange={handleChange("email")}
            />
            {error.email.length ? <span>{error.email}</span> : null}
            <LabeledInput
              type="password"
              required
              placeholder={"Enter password..."}
              title={t("input-params.password")}
              onChange={handleChange("password")}
            />
            <LabeledInput
              type="password"
              required
              placeholder={"Confirm password..."}
              title={t("input-params.confirm-password")}
              onChange={handleChange("confirmPassword")}
            />
            
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              text={t("buttons.register")}
              buttonType={ButtonType.FOLLOW}
              size={"MEDIUM"}
              onClick={handleSubmit}
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
