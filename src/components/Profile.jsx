import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

let CoockiesSavedJobs = [];
export const Profile = () => {
  const { FilteredJobs } = React.useContext(AppContext);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [UserSavedJobs, setUserSavedJobs] = React.useState([]);
  React.useEffect(() => {
    CoockiesSavedJobs.push(
      cookies?.savedJobs.filter((job) => {
        return cookies?.currentUser.email === job.email;
      })
    );
    console.log(CoockiesSavedJobs[0]);
    let arr = CoockiesSavedJobs[0].map((j) => {
      return j.jobId;
    });
    console.log(" arr");
    let array = FilteredJobs.filter((job) => {
      return arr.includes(job._id);
    });
    setUserSavedJobs([...array]);
  }, []);

  console.log(UserSavedJobs);
  return (
    <Container
      sx={{
        minHeight: "100vh",
        width: "85%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <h2 className="text-center m-5 pt-5">
        Hello
        <span style={{ color: "#1976d2" }}> {cookies?.currentUser.name}</span>
      </h2>
      <h4 className="m-5">Your Saved Jobs : </h4>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          flexWrap: "wrap",
          //   justifyContent: "start",
          marginLeft: "",
        }}
      >
        {UserSavedJobs?.map((job, i) => {
          return (
            <>
              <ListItem
                alignItems="flex-start"
                sx={{
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
                  margin: "10px",
                  width: "300px",
                  flexDirection: "column",
                }}
              >
                <ListItemAvatar>
                  <CardMedia
                    component="img"
                    sx={{ width: "90px" }}
                    image={
                      "https://static.devitjobs.us/logo-images/" + job.logoImg
                    }
                    alt="Paella dish"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={job.company}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {job.name}
                      </Typography>
                      <br />
                      {job.jobType}
                    </React.Fragment>
                  }
                />
                <a
                  href={job.redirectJobUrl}
                  className="btn text-decoration-underline"
                  target="blank"
                >
                  Apply
                </a>
              </ListItem>
              {/* <Divider variant="inset" component="li" /> */}
            </>
          );
        })}
      </List>
    </Container>
  );
};
