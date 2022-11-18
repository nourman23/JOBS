import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Job from "./Job";
import axios from "axios";
import Box from "@mui/material/Box";
import { Pagination, Typography } from "@mui/material";
import { Select, Option } from "@material-tailwind/react";
let arr = [];
export const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [ByType, setByType] = useState("All");
  const [ByLevel, setByLevel] = useState("All");
  const [search, setSearch] = useState("");
  const [FilteredJobs, setFilteredJobs] = useState([]);

  // pagination
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `https://devitjobs.us/api/jobsLight`,
      headers: {
        Accept: "application/vnd.api+json",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setJobs([...response.data]);
        setFilteredJobs([...response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    console.log(arr);
    arr = jobs.filter((job) => {
      return job.name.toLowerCase().includes(search.toLowerCase().trim());
    });

    if (ByType == "All") {
      if (ByLevel != "All") {
        arr = arr.filter((job) => {
          return job.expLevel == ByLevel;
        });
      }
    } else {
      if (ByLevel == "All") {
        arr = arr.filter((job) => {
          return job.jobType == ByType;
        });
      } else {
        arr = arr.filter((job) => {
          return job.jobType == ByType && job.expLevel == ByLevel;
        });
      }
    }

    setFilteredJobs([...arr]);
  }, [search, ByType, ByLevel]);
  const handleSelectType = (e) => {
    setByType(e);
  };
  const handleSelectLevel = (e) => {
    setByLevel(e);
  };

  // if (FilteredJobs.length == 0) {
  //   return (
  //     <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
  //       <Spinner animation="border" />
  //     </div>
  //   );
  // } else
  return (
    <>
      <div className="flex w-100 justify-content-center my-3">
        <div className="form-floating w-50 ">
          <input
            type="search"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="floatingInput">Search for a job ..</label>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        <div className="w-25 mx-2">
          <Select
            label="Filter By Experience Level"
            onChange={(e) => handleSelectLevel(e)}
          >
            <Option value="All" selected>
              All
            </Option>
            <Option value="Junior">Junior</Option>
            <Option value="Senior">Senior</Option>
            <Option value="Regular">Regular</Option>
            <Option value="Lead">Lead</Option>
          </Select>
        </div>
        <div className="w-25 mx-2">
          <Select
            label="Filter By Job Type"
            onChange={(e) => handleSelectType(e)}
          >
            <Option value="All" selected>
              All
            </Option>
            <Option value="Full-Time">Full-Time</Option>
            <Option value="Part-Time">Part-Time</Option>
            <Option value="Contract">Freelance/Contract</Option>
          </Select>
        </div>
      </div>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ minHeight: "40vh" }}
      >
        {/* .filter((_, count) => count < 20) */}
        {FilteredJobs ? (
          FilteredJobs.filter((_, count) => count < 20).map((job, i) => {
            if (job.redirectJobUrl) {
              return <Job key={i} job={job} />;
            }
          })
        ) : (
          <h1 className="text-center"> Not Found</h1>
        )}
      </div>
    </>
  );
};