/* HEADER COMPONENT
   ========================================================================== */

import { Icons, Input } from "components";
import { ReactNode, useMemo, useState } from "react";

import Styled from "./header.style";
import cx from "classnames";
import { getPartOfTheDay } from "utils/helpers";
import { useTranslation } from "services/i18n";

interface IProps {
  leftIcon?: ReactNode | string;
  rightIcon?: ReactNode | string;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
  title?: ReactNode | string;
  className?: string;
  hasSearchBox?: boolean;
  onClickLeftIcon?: () => void;
  onClickRightIcon?: () => void;
}

const Header = ({
  leftIcon,
  rightIcon,
  hasLeftIcon = true,
  hasRightIcon = true,
  title,
  className,
  hasSearchBox = false,
  onClickLeftIcon,
  onClickRightIcon,
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
          placeholder={t("placeholders.searchHere")}
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
        <div
          className={cx("header-icon", "header-icon__left")}
          onClick={onClickLeftIcon}
        >
          {customLeftIcon}
        </div>
        {customTitle}
        <div
          className={cx("header-icon", "header-icon__right")}
          onClick={onClickRightIcon}
        >
          {customRightIcon}
        </div>
      </Styled.Wrap>
    </Styled.Header>
  );
};

export default Header;
