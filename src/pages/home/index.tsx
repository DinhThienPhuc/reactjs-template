/* PAGE: HOME
   ========================================================================== */

import Styled from "./index.style";

const Home = () => {
  return (
    <Styled.Container>
      <p>Home page</p>
      <p>App name: {process.env.REACT_APP_NAME}</p>
    </Styled.Container>
  );
};

export default Home;
