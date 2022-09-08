/* PAGE: PROFILE
   ========================================================================== */

import { Header } from "components";
import Icons from "assets/icons";
import Styled from "./index.style";
import { useTranslation } from "services/i18n";

const Profile = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header
        leftIcon={<Icons.ArrowLeft />}
        rightIcon={<Icons.Camera />}
        title={t("header.profile")}
      />
      <Styled.Profile></Styled.Profile>
    </>
  );
};

export default Profile;
