/* COMPONENT: CARD
   ========================================================================== */

import Styled from "./card.style";
import cx from "classnames";

interface ICard {
  logo?: any;
  alt?: string;
  title?: string;
  subTitle?: string;
}

interface IProps {
  className?: string;
  data: ICard;
}

const Card = ({ className, data }: IProps) => {
  return (
    <Styled.Card className={cx("card", className)}>
      <img src={data?.logo} alt={data?.alt} className={cx("card-image")} />
      <Styled.Texts>
        <div className={cx("card-title")}>{data?.title}</div>
        <div className={cx("card-sub-title")}>{data?.subTitle}</div>
      </Styled.Texts>
    </Styled.Card>
  );
};

export default Card;
