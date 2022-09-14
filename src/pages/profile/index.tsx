/* PAGE: PROFILE
   ========================================================================== */

import { useCallback, useMemo } from "react";

import Icons from "assets/icons";
import Images from "assets/images";
import { ROUTES } from "routes";
import Styled from "./index.style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "services/i18n";

const PROFILES_ITEMS = [
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
  },
];

const Profile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const content = useMemo(() => {
    return PROFILES_ITEMS.map((item) => (
      <Styled.Item key={item.label}>
        <Styled.Icon>{item.icon}</Styled.Icon>
        {item.label ? t(item.label) : item.key}
      </Styled.Item>
    ));
  }, [t]);

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
