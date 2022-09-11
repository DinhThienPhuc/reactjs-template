/* PAGE: SETTING
   ========================================================================== */

import { Header } from "components";
import Icons from "assets/icons";
import Styled from "./index.style";
import { useTranslation } from "services/i18n";

const Setting = () => {
  const { t } = useTranslation();
  return (
    <>
      <Header
        hasRightIcon={false}
        leftIcon={<Icons.ArrowLeft />}
        title={t("header.settings")}
      />
      <Styled.Setting>
        <Styled.Paper></Styled.Paper>
      </Styled.Setting>
    </>
  );
};

export default Setting;
