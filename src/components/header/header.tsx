/* HEADER COMPONENT
   ========================================================================== */

import { ReactNode, useMemo, useState } from "react";

import Icons from "assets/icons";
import Input from "components/input/input";
import Styled from "./header.style";
import cx from "classnames";
import { getPartOfTheDay } from "utils/functions";
import { useTranslation } from "services/i18n";

interface IProps {
  leftIcon?: ReactNode | string;
  rightIcon?: ReactNode | string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  title?: ReactNode | string;
  className?: string;
  hasSearchBox?: boolean;
}

const Header = ({
  leftIcon,
  rightIcon,
  hasLeftIcon = true,
  hasRightIcon = true,
  title,
  className,
  hasSearchBox = false,
}: IProps) => {
  const { t } = useTranslation();
  const [value, setValue] = useState<string>("");

  const customTitle = useMemo(() => {
    if (hasSearchBox) {
      return (
        <Input
          className={cx("header-search-box")}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          leftIcon={<Icons.Search />}
        />
      );
    }

    const partOfTheDay = getPartOfTheDay();
    if (!title) {
      return (
        <Styled.Title className={cx("header-title", "header-greeting")}>
          {t("texts.greeting", { name: "Kai", time: partOfTheDay })}
        </Styled.Title>
      );
    }

    return <Styled.Title className={cx("header-title")}>{title}</Styled.Title>;
  }, [hasSearchBox, t, title, value]);

  const customLeftIcon = useMemo(() => {
    if (!hasLeftIcon) {
      return null;
    }
    if (leftIcon) {
      return leftIcon;
    }
    return <Styled.Menu />;
  }, [hasLeftIcon, leftIcon]);

  const customRightIcon = useMemo(() => {
    if (!hasRightIcon) {
      return null;
    }
    if (rightIcon) {
      return rightIcon;
    }
    return <Icons.Bell />;
  }, [hasRightIcon, rightIcon]);

  return (
    <Styled.Header className={cx("header", className)}>
      <Styled.Wrap
        className={cx("header-wrap")}
        hasLeftIcon={hasLeftIcon}
        hasRightIcon={hasRightIcon}
      >
        <div className={cx("header-icon", "header-icon__left")}>
          {customLeftIcon}
        </div>
        {customTitle}
        <div className={cx("header-icon", "header-icon__right")}>
          {customRightIcon}
        </div>
      </Styled.Wrap>
    </Styled.Header>
  );
};

export default Header;
