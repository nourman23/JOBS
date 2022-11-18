import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export const SignIn = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies(["allUsers"]);

  const handelSubmit = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const currentUser = { email: email, password: password };
    if (checkUser()) {
      setCookie("currentUser", currentUser, { path: "/" });
      navigate("/Home");
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Email or password",
        denyButtonColor: "#8E05C2",
      });
    }

    function checkUser() {
      console.log(allUsers);
      let user = allUsers.AllUsers.filter(
        (user) => user.email == currentUser.email
      );
      if (user.length > 0) return true;
    }
  };
  // const navigate = useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   // console.log({
  //   //   email: data.get("email"),
  //   //   password: data.get("password"),
  //   // });
  //   let Users = JSON.parse(localStorage.getItem("Users"));
  //   // console.log(Users);
  //   let TrueUser = Users.filter((user) => {
  //     return (
  //       user.email == data.get("email") && user.password == data.get("password")
  //     );
  //   });
  //   console.log(TrueUser.length > 0);
  //   if (TrueUser.length > 0) {
  //     navigate("/Home");
  //   } else navigate("/SignIn");
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id={"email"}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              // id="password"
              id={"password"}
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={handelSubmit}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
