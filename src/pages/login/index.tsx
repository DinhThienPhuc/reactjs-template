/* PAGE: LOGIN
   ========================================================================== */

import { useCallback } from "react";
import useSessionStorage from "hooks/useSessionStorage";

const Login = () => {
  const [, setRefreshToken] = useSessionStorage<string | null>(
    "refresh-token",
    null
  );

  const handleLogin = useCallback(() => {
    setRefreshToken("as");
  }, [setRefreshToken]);

  return (
    <>
      <p>Login page</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
