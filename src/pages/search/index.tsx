/* PAGE: SEARCH
   ========================================================================== */

import { Card, Header, Icons } from "components";
import { useCallback, useMemo } from "react";

import Logos from "assets/logos";
import { ROUTES } from "routes";
import Styled from "./index.style";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "services/i18n";

const mock = [
  {
    logo: Logos.Facebook,
    alt: "facebook",
    title: "thienphuc.bk13@gmail.com",
    subTitle: "Lorem ipsum dolor sit amet",
  },
  {
    logo: Logos.TPBank,
    alt: "tpbank",
    title: "New diets are ready check it out",
    subTitle: "Lorem ipsum dolor sit amet",
  },
  {
    logo: Logos.VPBank,
    alt: "vpbank",
    title: "New diets are ready check it out",
    subTitle: "Lorem ipsum dolor sit amet",
  },
  {
    logo: Logos.BIDV,
    alt: "bidv",
    title: "New diets are ready check it out",
    subTitle: "Lorem ipsum dolor sit amet",
  },
  {
    logo: Logos.GMail,
    alt: "gmail",
    title: "thienphuc.bk13@gmail.com",
    subTitle: "Lorem ipsum dolor sit amet",
  },
  {
    logo: Logos.ICloud,
    alt: "icloud",
    title: "New diets are ready check it out",
    subTitle: "Lorem ipsum dolor sit amet",
  },
  {
    logo: Logos.Paypal,
    alt: "paypal",
    title: "New diets are ready check it out",
    subTitle: "Lorem ipsum dolor sit amet",
  },
  {
    logo: Logos.Savy,
    alt: "savy",
    title: "New diets are ready check it out",
    subTitle: "Lorem ipsum dolor sit amet",
  },
];

const Search = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const goBack = useCallback(() => {
    navigate(ROUTES.HOME);
  }, [navigate]);

  const listSearch = useMemo(() => {
    return mock.map((data) => <Card key={data.alt} data={data} />);
  }, []);

  return (
    <>
      <Header
        hasSearchBox
        hasRightIcon={false}
        leftIcon={<Icons.ArrowLeft />}
        onClickLeftIcon={goBack}
      />
      <Styled.Search>
        <Styled.SearchResult>
          {t("texts.result")}
          {":"}
        </Styled.SearchResult>
        <div>{listSearch}</div>
      </Styled.Search>
    </>
  );
};

export default Search;
