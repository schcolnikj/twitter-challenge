import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import AuthWrapper from "../AuthWrapper";
import LabeledInput from "../../../components/labeled-input/LabeledInput";
import Button from "../../../components/button/Button";
import { ButtonType } from "../../../components/button/StyledButton";
import { StyledH3 } from "../../../components/common/text";
import { useFormik } from "formik";
import { signInSchema } from "../../../schemas";
import { SingInData } from "../../../service";

const SignInPage = () => {
  const httpRequestService = useHttpRequestService();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSubmit = async (values: SingInData) => {
    try {
      const data = {username: values.username, password: values.password}
      await httpRequestService.signIn(data)
      navigate("/")
    } catch (error) {
      navigate('/sign-in');
    }
  };

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: onSubmit,
    validationSchema: signInSchema,
  })

  return (
    <AuthWrapper>
      <div className={"border"}>
        <div className={"container"}>
          <div className={"header"}>
            <img src={logo} alt={"Twitter Logo"} />
            <StyledH3>{t("title.login")}</StyledH3>
          </div>
          <form onSubmit={handleSubmit} className={"input-container"}>
            <LabeledInput
              required
              placeholder={"Enter user..."}
              title={t("input-params.username")}
              name="username"
              id="username"
              onChange={handleChange("username")}
              value={values.username}
            />
            {errors.username && <span>{errors.username}</span>}
            
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
            {errors.password && touched.password && <span>{errors.password}</span>}

            <p className={"error-message"}>{errors && touched && t("error.login")}</p>
          </form>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              text={t("buttons.login")}
              buttonType={ButtonType.FOLLOW}
              size={"MEDIUM"}
              onClick={() => handleSubmit()}
            />
            <Button
              text={t("buttons.register")}
              buttonType={ButtonType.OUTLINED}
              size={"MEDIUM"}
              onClick={() => navigate("/sign-up")}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignInPage;
