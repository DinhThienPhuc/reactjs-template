/* PAGE: HOME
   ========================================================================== */

import { Card, Header, Icons, Input } from "components";
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

const Home = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleFocus = useCallback(() => {
    navigate(ROUTES.SEARCH);
  }, [navigate]);

  const listCards = useMemo(() => {
    return mock.map((data) => <Card key={data.alt} data={data} />);
  }, []);

  return (
    <>
      <Header />
      <Styled.Home>
        <Styled.MainTitle>{t("texts.mainTitle")}</Styled.MainTitle>
        <Styled.SearchBox>
          <Input onFocus={handleFocus} leftIcon={<Icons.Search />} />
          <Styled.Scan>
            <Icons.Maximize />
            <Styled.Minus />
          </Styled.Scan>
        </Styled.SearchBox>
        <Styled.Title>{t("texts.title")}</Styled.Title>
        <div>{listCards}</div>
      </Styled.Home>
    </>
  );
};

export default Home;
