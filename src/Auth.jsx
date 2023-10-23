import { useContext } from "react";
import AuthContext from "./context/auth-context";
function Auth() { 
    const {status, login} = useContext(AuthContext);
    console.log(status);
  return <div>
    <h1>Are you logged in ?</h1>
    {status ? <p>OOO I Already Logged In</p> : <p>NO</p>}
    <button onClick={login}>Login</button>
  </div>;
}

export default Auth;
