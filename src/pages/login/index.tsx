/* PAGE: LOGIN
   ========================================================================== */

import { Button } from "components";
import Images from "assets/images";
import Styled from "./index.style";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "hooks";
import { useTranslation } from "services/i18n";

const Login = () => {
  const { t } = useTranslation();
  const { register, handleSubmit } = useForm();
  const [, setRefreshToken] = useLocalStorage<string | null>(
    "refresh-token",
    null,
  );

  const onSubmit = useCallback(
    (data: any) => {
      setRefreshToken(`${data?.email}-${data?.password}`);
    },
    [setRefreshToken],
  );

  return (
    <Styled.Login>
      <Styled.Logo>
        <Images.Svg.Logo width={64} height={64} />
      </Styled.Logo>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Title>{t("texts.logIn")}</Styled.Title>
        <Styled.Description>{t("texts.logInDescription")}</Styled.Description>
        <Styled.Input
          {...register("email")}
          placeholder={t("placeholders.enterYourEmail")}
        />
        <Styled.Input
          {...register("password")}
          type={"password"}
          placeholder={t("placeholders.password")}
        />
        <Button type={"submit"}>Login</Button>
      </form>
    </Styled.Login>
  );
};

export default Login;
