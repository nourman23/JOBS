import logo from "./logo.svg";
import "./App.css";

import { Jobs } from "./components/Jobs";
import { Header } from "./components/Header";
import { ToTop } from "./components/ToTop";
import { Footer } from "./components/Footer";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Profile } from "./components/Profile";
import { NotFound } from "./components/NotFound";
import { SignUp } from "./Auth/SignUp";
import { SignIn } from "./Auth/SignIn";
import { Routes, Route } from "react-router-dom";
import React, { useContext } from "react";
import JobsProvider from "./context";

function App() {
  return (
    <div className="App">
      <Header />
      <ToTop />
      {/* <Jobs/> */}
      <JobsProvider>
        <Routes>
          <Route exact path="/" element={<Jobs />}></Route>
          <Route exact path="/Home" element={<Jobs />}></Route>
          <Route exact path="/About" element={<About />}></Route>
          <Route exact path="/Contact" element={<Contact />}></Route>
          <Route exact path="/Profile" element={<Profile />}></Route>
          <Route exact path="/SignUp" element={<SignUp />}></Route>
          <Route exact path="/SignIn" element={<SignIn />}></Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </JobsProvider>
      <Footer />
    </div>
  );
}

export default App;
