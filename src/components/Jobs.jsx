import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Job from "./Job";
import axios from "axios";
import Pagination from "@mui/material/Pagination";

import { TheCarousel } from "./Carousel";

import { Select, Option } from "@material-tailwind/react";
let arr = [];
export const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [ByType, setByType] = useState("All");
  const [ByLevel, setByLevel] = useState("All");
  const [search, setSearch] = useState("");
  const [FilteredJobs, setFilteredJobs] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [jobPerPage, setJobPerPage] = useState(10);
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const lastJobIndex = currentPage * jobPerPage;
  const firstJobIndex = lastJobIndex - jobPerPage;
  const currentJobs = FilteredJobs.slice(firstJobIndex, lastJobIndex);

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
      <TheCarousel />
      <h3 id="search" className="text-center m-5"></h3>
      <div className="flex w-100 justify-content-center my-5">
        <div className="form-floating w-50 ">
          <input
            type="search"
            className="form-control"
            id="searchInput"
            placeholder="name@example.com"
            onChange={(e) => setSearch(e.target.value)}
          />
          <label htmlFor="searchInput">Search for a job ..</label>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center my-5">
        <div className="w-25 mx-2 col-lg-4 col-md-6 col-sm-8">
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
        <div className="w-25 mx-2 col-lg-4 col-md-6 col-sm-8">
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
      <div className="flex justify-content-center m-5 ">
        <Pagination
          count={Math.ceil(FilteredJobs.length / jobPerPage)}
          color="primary"
          page={currentPage}
          onChange={handleChange}
        />
      </div>
      <div
        className="d-flex flex-wrap justify-content-center"
        style={{ minHeight: "40vh" }}
      >
        {/* .filter((_, count) => count < 20) */}
        {currentJobs ? (
          currentJobs.map((job, i) => {
            // if (job.redirectJobUrl) {
            return <Job key={i} job={job} />;
            // }
          })
        ) : (
          <h1 className="text-center"> Not Found</h1>
        )}
      </div>
      <div className="flex justify-content-center m-5 ">
        <Pagination
          count={Math.ceil(FilteredJobs.length / jobPerPage)}
          color="primary"
          page={currentPage}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
