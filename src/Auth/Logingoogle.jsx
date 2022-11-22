import React, { useEffect } from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { RefreshTokenSetup } from "./RefreshTokenSetup";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const clientId =
  "638453071832-ili8lrmlocuu963brufjsjkhka8023b0.apps.googleusercontent.com";
export const Logingoogle = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const onSuccess = (res) => {
    // console.log("Login Success: currentUser:", res.profileObj);
    setCookie("currentUser", res.profileObj, { path: "/" });
    navigate("/");

    RefreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      "Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz"
    );
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
};
