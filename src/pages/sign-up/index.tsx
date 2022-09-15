/* PAGE: LOGIN
   ========================================================================== */

import Images from "assets/images";
import Styled from "./index.style";
import { useCallback } from "react";
import { useSessionStorage } from "hooks";

const Login = () => {
  const [, setRefreshToken] = useSessionStorage<string | null>(
    "refresh-token",
    null,
  );

  const handleLogin = useCallback(() => {
    setRefreshToken("test");
  }, [setRefreshToken]);

  return (
    <Styled.Login>
      <Images.Svg.Logo width={63} height={63} />
      <p>Login page</p>
      <button onClick={handleLogin}>Login</button>
    </Styled.Login>
  );
};

export default Login;
