import React, { useState, useEffect } from "react";
import axios from "axios";
export const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [expLevel, setExpLevel] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [FilteredJobs, setFilteredJobs] = useState(jobs);
  const [ByType, setByType] = useState([]);
  const [ByLevel, setByLevel] = useState([]);

  // const App_id ='9cc23206';
  // const App_key ='697312913dda07fbf6333c1f976608cc';
  // https://api.adzuna.com/v1/api/jobs/gb/search/3?app_id=${App_id}&app_key=${App_key}

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://devitjobs.us/api/jobsLight`,
      headers: {
        Accept: "application/vnd.api+json",
      },
      // params: {query: 'Python developer in Texas, USA', num_pages: '1'},
    };

    axios
      .request(options)
      .then(function (response) {
        //   console.log(response.data);
        setJobs(response.data);
        setFilteredJobs(jobs);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  //   console.log(jobs);
  //   console.log(FilteredJobs);

  const filterByLevel = (e) => {
    if (
      (e.target.value !== "All" && ByType) ||
      (e.target.value === "All" && ByType === [])
    ) {
      setByLevel(
        jobs.filter((job) => {
          return job.expLevel === e.target.value;
        })
      );
      setFilteredJobs(ByLevel);
    } else if (
      (e.target.value === "All" && ByType) ||
      (e.target.value !== "All" && ByType === [])
    ) {
      setByLevel(
        FilteredJobs.filter((job) => {
          return job.expLevel === e.target.value;
        })
      );
      setFilteredJobs(ByLevel);
    }
  };
  const filterByJobType = (e) => {
    console.log(ByLevel);
    //     if(e.target.value === 'All')
    //    setFilteredJobs(jobs)
    //     else
    //     {
    //         if(FilteredJobs)
    //         setFilteredJobs( FilteredJobs.filter((job)=>{return job.jobType===e.target.value ;}));
    //         else
    //         setFilteredJobs( jobs.filter((job)=>{return job.jobType===e.target.value ;}));

    //     }
  };
  //   console.log(FilteredJobs);
  return (
    // https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=9cc23206&app_key=697312913dda07fbf6333c1f976608cc
    <>
      <div className="d-flex flex-wrap justify-content-center">
        <input type="search" placeholder="Search for job .." />
        <div>
          Filter By Experience Level :
          <select
            name="expLevel"
            id=""
            // onChange={(e)=>setExpLevel(e.target.value)}
            onChange={(e) => filterByLevel(e)}
          >
            <option value="All" selected>
              All
            </option>
            <option value="Junior">Junior</option>
            <option value="Regular">Regular</option>
            <option value="Senior">Senior</option>
            <option value="Lead">Lead</option>
          </select>
        </div>
        <div>
          Filter By Job Type :
          <select name="jobType" id="" onChange={(e) => filterByJobType(e)}>
            <option value="All" selected>
              All
            </option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Freelance/Contract">Freelance/Contract</option>
            <option value="Internship"></option>
          </select>
        </div>
        {/* <div>Filter</div> */}
        {/* // all jobs , job , job details */}
        {FilteredJobs !== [] ? (
          FilteredJobs.filter((_, count) => count < 20).map((job, i) => {
            if (job.redirectJobUrl) {
              return (
                <div
                  className="card w-50 m-3 shadow"
                  style={{ width: "25rem" }}
                  key={i}
                >
                  <div className="card-body">
                    <p className="float-lg-end text-center flex ">
                      <ion-icon
                        name="timer-outline"
                        style={{ color: "grey", fontSize: "25px" }}
                      ></ion-icon>
                      {job.activeFrom.split("T")[0]} <br /> {job.jobType}
                    </p>
                    <img
                      src={
                        "https://static.devitjobs.us/logo-images/" + job.logoImg
                      }
                      width="20%"
                    />
                    <p className="card-title ">
                      <b> {job.company}</b> -( {job.name} ) - {job.expLevel}
                    </p>
                    <small>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "grey" }}
                      ></i>{" "}
                      {job.address}
                    </small>
                    <br />
                    <div className="w-75">
                      Technologies :
                      {job.technologies.map((technology, i) => {
                        return (
                          <span className="btn" key={i}>
                            {technology}
                          </span>
                        );
                      })}
                    </div>
                    <a
                      href={job.redirectJobUrl}
                      className="btn text-light float-right"
                      target="blank"
                      style={{ backgroundColor: "#21130d" }}
                    >
                      Apply
                    </a>
                  </div>
                </div>
              );
            }
            return <></>;
          })
        ) : (
          <div className="d-flex flex-column m-4 justify-content-center align-items-center">
            gg
          </div>
        )}
      </div>
    </>
  );
};
