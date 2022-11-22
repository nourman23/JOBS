import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const clientId =
  "707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com";

function Logout() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);

  const onSuccess = () => {
    console.log("Logout made successfully");
    removeCookie("currentUser");

    navigate("/SignIn");
  };
  const inStyle = { color: "red", width: 20, height: 20 };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        icon={false}
        className={"logout-btn"}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
