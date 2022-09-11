/* PAGE: SETTING
   ========================================================================== */

import { useCallback, useMemo } from "react";

import { Header } from "components";
import Icons from "assets/icons";
import { ROUTES } from "utils/constants";
import Styled from "./index.style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "services/i18n";

const SETTING_ITEMS = [
  {
    icon: <Icons.Bell />,
    label: "texts.notification",
  },
  {
    icon: <Icons.FileText />,
    label: "texts.privacy",
  },
  {
    icon: <Icons.Shield />,
    label: "texts.security",
  },
  {
    icon: <Icons.HelpCircle />,
    label: "texts.help",
  },
  {
    icon: <Icons.Book />,
    label: "texts.about",
  },
];

const Setting = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const content = useMemo(() => {
    return SETTING_ITEMS.map((item) => (
      <Styled.Item key={item.label}>
        <Styled.Icon>{item.icon}</Styled.Icon>
        {t(item.label)}
      </Styled.Item>
    ));
  }, [t]);

  const goBack = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  return (
    <>
      <Header
        hasRightIcon={false}
        leftIcon={<Icons.ArrowLeft />}
        title={t("header.settings")}
        onClickLeftIcon={goBack}
      />
      <Styled.Setting>
        <Styled.Paper>{content}</Styled.Paper>
      </Styled.Setting>
    </>
  );
};

export default Setting;
