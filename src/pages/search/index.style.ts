/* PAGE STYLE: SEARCH
   ========================================================================== */

import styled from "styled-components";

const Styled = {
  Search: styled.div``,
  SearchResult: styled.div`
    color: ${({ theme }) => theme.colors.black["300"]};
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  `,
};

export default Styled;
