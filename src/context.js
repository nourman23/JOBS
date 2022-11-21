import React, { useState, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";
export const AppContext = createContext();

const JobsProvider = (props) => {
  //   console.log(props);
  const [jobs, setJobs] = useState([]);
  const [FilteredJobs, setFilteredJobs] = useState(jobs);

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
        setJobs([...response.data]);
        setFilteredJobs([...response.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  if (FilteredJobs.length == 0) {
    return "loading jobs";
  }
  return (
    <>
      <AppContext.Provider value={{ jobs, FilteredJobs, setFilteredJobs }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};

export default JobsProvider;
