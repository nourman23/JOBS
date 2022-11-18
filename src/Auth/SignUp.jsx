import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const patterns = {
  email: /(\w{4,}).?-?_?(\w{2,})?@([a-z\d]+).com/,
  password: /^[\w]{8,20}$/,
};
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
// let Users = [];
export const SignUp = () => {
  const [cookies, setCookie] = useCookies(["currentUser"]);
  const [allUsers, setAllusers] = useCookies([]);

  const [allUsersArray, setAllusersArray] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = () => {
    let email = document.getElementById("email").value;
    let name = document.getElementById("firstName").value;
    let password = document.getElementById("password").value;
    let ConfirmPassword = document.getElementById("ConfirmPassword").value;

    if (
      patterns.email.test(email) &&
      patterns.password.test(password) &&
      password == ConfirmPassword
    ) {
      console.log("tets");
      if (checkEmail(email)) {
        let newUser = { name: name, email: email, password: password };
        setAllusersArray([...allUsersArray, newUser]);
        console.log(allUsersArray);
        setCookie("currentUser", newUser, { path: "/" });
        setAllusers("AllUsers", [...allUsersArray, newUser], { path: "/" });
        navigate("/Home");
      } else {
        MySwal.fire({
          icon: "error",
          title: "Oops...",
          text: "This Email is already used",
          denyButtonColor: "#8E05C2",
        });
      }
    } else {
      MySwal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid Password or Email pattern ",
        denyButtonColor: "#8E05C2",
      });
    }
  };

  function checkEmail(E) {
    console.log("userrrrr");
    let rightUser = allUsersArray?.filter((user) => {
      if (user.email == E) return true;
    });
    // console.log(rightUser);
    if (rightUser[0] == null) {
      return true;
    }

    return false;
  }
  // const [cookies, setCookie] = useCookies(["user"]);
  // const [users, setUsers] = useState([]);
  // function User(thFname, thLname, themail, thpassword) {
  //   let Fname = thFname;
  //   let Lname = thLname;
  //   let email = themail.toLowerCase();
  //   let password = thpassword;

  //   return {
  //     firstName: Fname,
  //     lastName: Lname,
  //     email: email,
  //     password: password,
  //   };
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const data = new FormData(event.currentTarget);
  //   let firstName = document.getElementById("firstName").value;
  //   let lastName = document.getElementById("lastName").value;
  //   let email = document.getElementById("email").value;
  //   let password = document.getElementById("password").value;
  //   let confPassword = document.getElementById("ConfirmPassword").value;
  //   let user = new User(firstName, lastName, email, password);
  //   setUsers([...users, user]);
  //   setCookie("Users", JSON.stringify(users), { path: "/" });

  //   // setCookie("Users", JSON.stringify(Users));
  // };
  // console.log(cookies);
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
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="conPassword"
                  label="Confirm Password"
                  type="password"
                  id="ConfirmPassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              onClick={handleSubmit}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/SignIn" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};
