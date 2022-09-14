/* PAGE: PROFILE
   ========================================================================== */

import { useCallback, useMemo } from "react";

import Icons from "assets/icons";
import Images from "assets/images";
import { ROUTES } from "routes";
import Styled from "./index.style";
import { useNavigate } from "react-router-dom";
import { useSessionStorage } from "hooks";
import { useTranslation } from "services/i18n";

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [, setRefreshToken] = useSessionStorage<string | null>(
    "refresh-token",
    null,
  );

  const profileItems = useMemo(
    () => [
      {
        icon: <Icons.User />,
        label: null,
        key: "username",
      },
      {
        icon: <Icons.Mail />,
        label: null,
        key: "email",
      },
      {
        icon: <Icons.LogOut />,
        label: "texts.logOut",
        onClick: () => {
          setRefreshToken(null);
        },
      },
    ],
    [setRefreshToken],
  );

  const content = useMemo(() => {
    return profileItems.map((item) => (
      <Styled.Item key={item.label} onClick={item?.onClick}>
        <Styled.Icon>{item.icon}</Styled.Icon>
        {item.label ? t(item.label) : item.key}
      </Styled.Item>
    ));
  }, [profileItems, t]);

  const goBack = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  return (
    <>
      <Styled.Header
        leftIcon={<Icons.ArrowLeft />}
        rightIcon={<Icons.Camera />}
        title={t("header.profile")}
        onClickLeftIcon={goBack}
      />
      <Styled.Profile>
        <Styled.AvatarBackground>
          <Styled.Avatar>
            <img src={Images.Jpg.Avatar} />
          </Styled.Avatar>
        </Styled.AvatarBackground>
        <Styled.Paper>{content}</Styled.Paper>
      </Styled.Profile>
    </>
  );
};

export default Profile;
