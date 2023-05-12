import { GoogleLogin } from "@react-oauth/google";
import logo from "./logo.svg";
import "./App.css";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />

        <LoginSocialFacebook
          appId="201874862201176"
          onResolve={(response) => {
            console.log(response);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>
      </div>
    </div>
  );
}

export default App;
