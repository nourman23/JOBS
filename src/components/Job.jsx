import React, { useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
let jobs = [];

function Job(props) {
  const job = props.job;
  // console.log(props.job);
  const [cookies, setCookie] = useCookies("currentUser");
  const [email, setEmail] = useState();
  const [savedJobsCookies, setSavedJobsCookies, removeSavedJobsCookies] =
    useCookies("savedJobs");
  const navigate = useNavigate();
  let arr = savedJobsCookies?.savedJobs?.map((j) => {
    return j.jobId;
  });
  let emails = savedJobsCookies?.savedJobs?.map((j) => {
    return j.email;
  });

  React.useEffect(() => {
    setEmail(cookies?.currentUser?.email);
    let i = document.getElementById(job._id);
    if (
      arr?.includes(job._id) &&
      emails?.includes(cookies?.currentUser?.email)
    ) {
      i.name = "bookmark";
      i.style.color = "#ffc761";
    }
  }, []);

  const handleSavedIcon2 = (id) => {
    let jobId = id;

    let newJob = { email: cookies?.currentUser?.email, jobId: jobId };
    console.log(newJob.email);
    if (cookies?.currentUser == "undefined" || cookies?.currentUser == null) {
      navigate("/SignIn");
    } else {
      //for save job
      let i = document.getElementById(id);
      if (!arr?.includes(jobId)) {
        jobs.push(newJob);
        setSavedJobsCookies("savedJobs", jobs, { path: "/" });
      }

      //for icon style
      if (i.name == "bookmark-outline") {
        i.name = "bookmark";
        i.style.color = "#ffc761";
      } else {
        i.name = "bookmark-outline";
        i.style.color = "black";
        removeJob(savedJobsCookies?.savedJobs, id);
      }
    }
  };

  function removeJob(savedjobs, id) {
    let JobsAfterDelete = savedjobs.filter((j) => {
      return j.jobId != id;
    });
    removeSavedJobsCookies("savedJobs");
    setSavedJobsCookies("savedJobs", JobsAfterDelete, { path: "/" });
  }
  // console.log(savedJobsCookies);
  return (
    <div className="card m-2 shadow col-lg-5 col-md-5 col-sm-12 col-12">
      <div className="card-body">
        <ion-icon
          name="bookmark-outline"
          class="theIcon"
          id={job._id}
          style={{ cursor: "pointer", fontSize: "25px" }}
          onClick={() => handleSavedIcon2(job._id)}
        ></ion-icon>
        <p className="float-lg-end text-center flex ">
          {job.activeFrom.split("T")[0]} <br /> {job.jobType}
        </p>
        <img
          src={"https://static.devitjobs.us/logo-images/" + job.logoImg}
          width="20%"
        />
        <p className="card-title w-100">
          <b> {job.company}</b> <br />( {job.name} ) - {job.expLevel}
        </p>
        <small>
          <i className="fa-solid fa-location-dot" style={{ color: "grey" }}></i>{" "}
          {job.address}
        </small>
        <br />
        <a
          href={job.redirectJobUrl}
          className="btn text-light float-right"
          target="blank"
          style={{ backgroundColor: "#795548" }}
        >
          Apply
        </a>
      </div>
    </div>
  );
}
export default Job;
