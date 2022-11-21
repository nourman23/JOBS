import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { NavLink, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const pages = ["Home", "About", "Contact"];
// const settings = ["Profile", "Logout"];

export const Header = () => {
  const [cookies, removeCookie] = useCookies(["currentUser"]);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handelLogout = (e) => {
    // e.preventDefault();
    removeCookie("currentUser");
  };

  return (
    <>
      <AppBar position="sticky" className="theHeader">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/Home"
              style={{ width: "100px" }}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src="https://api.logo.com/api/v2/images?format=webp&logo=logo_8374f3d0-95c3-440d-935c-8f1b2bff2018&width=1000&primary=%23ffffff&secondary=%23ffffff&accent=%23ffffff&background=transparent&tertiary=%23ffffff&fit=contain&u=1668784486"
                alt=""
                className="w-100"
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography>
                      {/* here */}
                      <NavLink
                        to={page}
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        {page}
                      </NavLink>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <img
                src="https://api.logo.com/api/v2/images?format=webp&logo=logo_8374f3d0-95c3-440d-935c-8f1b2bff2018&width=1000&primary=%23ffffff&secondary=%23ffffff&accent=%23ffffff&background=transparent&tertiary=%23ffffff&fit=contain&u=1668784486"
                alt=""
                className="w-25"
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button key={page} sx={{ my: 2, display: "block" }}>
                  {/* here */}
                  <NavLink
                    to={page}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {page}
                  </NavLink>
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              {cookies.currentUser == "undefined" && (
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  <NavLink
                    to="/SignIn"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Login
                  </NavLink>
                </Button>
              )}
              {cookies.currentUser != "undefined" && (
                <>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      {/* <Avatar alt="N" src="/static/images/avatar/2.jpg" /> */}

                      <div className="overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                        <svg
                          className="absolute -left-1 w-12 h-12 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {/* {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))} */}
                    <MenuItem>
                      <NavLink
                        to="/Profile"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Profile
                      </NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink
                        onClick={handelLogout}
                        to="/SignIn"
                        style={{ color: "grey", textDecoration: "none" }}
                      >
                        Logout
                      </NavLink>
                    </MenuItem>
                  </Menu>
                </>
              )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
