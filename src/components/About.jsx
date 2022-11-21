import React from "react";

export const About = () => {
  return (
    <>
      <section className="about my-5">
        <div className="container my-5">
          <div className="row">
            <div
              style={{
                backgroundImage:
                  "url(https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
              }}
              data-aos="fade-right"
              className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start"
            />
            <div className="col-xl-7 pt-4 pt-lg-0 d-flex align-items-stretch">
              <div
                className="content d-flex flex-column justify-content-center"
                data-aos="fade-left"
              >
                <h3>
                  <span style={{ color: "#1976d2" }}> Jobs</span> is here to
                  find your job
                </h3>
                <p>
                  Jobs is an online career network, serving the MENA Region. As
                  an employment website, Jobs serves as a platform that connects
                  employers and job seekers, creating vast opportunities for
                  talented candidates. Having launched many successful job fairs
                  in Jordan, Jobs believes in helping job seekers find jobs that
                  they won’t only excel at, but also grow to love .
                </p>
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <i
                      className="fa fa-duotone fa-magnifying-glass"
                      style={{ color: "#1976d2" }}
                    ></i>
                    <h4>Search for a job</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="zoom-in"
                    data-aos-delay={400}
                  >
                    <i
                      className="fa fa-duotone fa-thumbs-up"
                      style={{ color: "#1976d2" }}
                    ></i>
                    <h4>Apply for the job is suitable for you</h4>
                    <p>
                      Expedita veritatis consequuntur nihil tempore laudantium
                      vitae denat pacta
                    </p>
                  </div>
                </div>
              </div>
              {/* End .content*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
