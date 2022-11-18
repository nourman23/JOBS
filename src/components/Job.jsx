import React from "react";

function Job(props) {
  const job = props.job;
  //   console.log(props.job);
  return (
    <>
      <div className="card w-2/5 m-2 shadow">
        <div className="card-body">
          <p className="float-lg-end text-center flex ">
            {/* <ion-icon
              name="timer-outline"
              style={{ color: "grey", fontSize: "25px" }}
            ></ion-icon> */}
            {job.activeFrom.split("T")[0]} <br /> {job.jobType}
          </p>
          <img
            src={"https://static.devitjobs.us/logo-images/" + job.logoImg}
            width="20%"
          />
          <p className="card-title ">
            <b> {job.company}</b> <br />( {job.name} ) - {job.expLevel}
          </p>
          <small>
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "grey" }}
            ></i>{" "}
            {job.address}
          </small>
          <br />
          {/* <div className="w-75">
            Technologies :
            {job.technologies.map((technology, i) => {
              return (
                <span className="btn" key={i}>
                  {technology}
                </span>
              );
            })}
          </div> */}
          <a
            href={job.redirectJobUrl}
            className="btn btn-dark text-light float-right"
            target="blank"
          >
            Apply
          </a>
        </div>
      </div>
    </>
  );
}
export default Job;
