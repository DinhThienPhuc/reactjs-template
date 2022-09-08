/* PAGE: SEARCH
   ========================================================================== */

import { Header } from "components";
import Icons from "assets/icons";
import Styled from "./index.style";

const Search = () => {
  return (
    <>
      <Header
        hasSearchBox
        hasRightIcon={false}
        leftIcon={<Icons.ArrowLeft />}
      />
      <Styled.Search></Styled.Search>
    </>
  );
};

export default Search;
