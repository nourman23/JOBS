import React, { useContext } from "react";
import { useCookies } from "react-cookie";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { AppContext } from "../context";
import { Link } from "react-router-dom";

let CoockiesSavedJobs = [];
export const Profile = () => {
  const { FilteredJobs } = React.useContext(AppContext);
  const [cookies, setCookie, removeCookie] = useCookies();
  const [UserSavedJobs, setUserSavedJobs] = React.useState([]);

  React.useEffect(() => {
    CoockiesSavedJobs.push(
      cookies.savedJobs.filter((job) => {
        return cookies.currentUser[0].email === job.email;
      })
    );
    console.log(CoockiesSavedJobs[0]);
    let arr = CoockiesSavedJobs[0].map((j) => {
      return j.jobId;
    });
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
        width: "75%",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
      }}
    >
      <h2 className="text-center m-5 pt-5">
        Hello
        <span style={{ color: "#1976d2" }}> {cookies.currentUser[0].name}</span>
      </h2>
      <h4 className="m-5">Your Saved Jobs : </h4>
      <Container sx={{ display: "flex", flexWrap: "wrap" }}>
        {UserSavedJobs?.map((job, i) => {
          return (
            <Card sx={{ maxWidth: 245, margin: "10px" }} key={i}>
              <CardMedia
                component="img"
                alt="green iguana"
                // height="70"
                sx={{ height: "150px" }}
                image={"https://static.devitjobs.us/logo-images/" + job.logoImg}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {job.company}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <a
                  href={job.redirectJobUrl}
                  className="btn text-light float-right"
                  target="blank"
                  style={{ backgroundColor: "#795548" }}
                >
                  Apply
                </a>
                {/* <Button size="small">Learn More</Button> */}
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </Container>
  );
};
