/* PAGE: LOGIN
   ========================================================================== */

import { useCallback } from "react";
import { useLocalStorage } from "hooks";

const Login = () => {
  const [, setRefreshToken] = useLocalStorage<string | null>(
    "refresh-token",
    null,
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
