import React from "react";

export const About = () => {
  return (
    <>
      <section className="about my-5">
        <div className="container">
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
                <h3>Voluptatem dignissimos provident quasi</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit
                </p>
                <div className="row">
                  <div
                    className="col-md-6 icon-box"
                    data-aos="zoom-in"
                    data-aos-delay={100}
                  >
                    <i className="bx bx-receipt" />
                    <h4>Corporis voluptates sit</h4>
                    <p>
                      Consequuntur sunt aut quasi enim aliquam quae harum
                      pariatur laboris nisi ut aliquip
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="zoom-in"
                    data-aos-delay={200}
                  >
                    <ion-icon name="search-outline"></ion-icon>
                    <h4>Ullamco laboris nisi</h4>
                    <p>
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="zoom-in"
                    data-aos-delay={300}
                  >
                    <i className="bx bx-images" />
                    <h4>Labore consequatur</h4>
                    <p>
                      Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                      maiores omnis facere
                    </p>
                  </div>
                  <div
                    className="col-md-6 icon-box"
                    data-aos="zoom-in"
                    data-aos-delay={400}
                  >
                    <i className="bx bx-shield" />
                    <h4>Beatae veritatis</h4>
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
      {/* <div class="flex md:flex-row flex-col-reverse md:items-stretch items-center justify-center">
        <div class="md:py-20 xl:w-1/2 sm:w-1/2 lg:mr-20 md:mr-6 flex flex-col md:items-end items-center justify-center xl:mr-28">
          <div class="flex flex-col items-center justify-center">
            <h1 class="md:text-5xl text-3xl font-bold text-center text-gray-800 dark:text-white">
              About Us
            </h1>
            <p class="sm:w-96 w-full mt-6 text-base leading-6 text-center text-gray-600 dark:text-gray-200">
              We are here for you to find a job in the fatest way
            </p>
            <div class="md:mt-14 mt-12 flex items-center">
              <div
                class="w-20 h-20 bg-white shadow rounded-full flex mr-5 items-center justify-center"
                role="img"
                aria-label="money"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg1.svg"
                  alt="money"
                />
              </div>
              <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                A phrase is a short selection of words which when put together
                create a concept. There are eight types of phrases.
              </p>
            </div>
            <div class="mt-7 flex flex items-center">
              <div
                class="w-20 h-20 bg-white shadow rounded-full flex mr-5 items-center justify-center"
                role="img"
                aria-label="phone"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg2.svg"
                  alt="phone"
                />
              </div>
              <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                A phrase is a short selection of words which when put together
                create a concept.
              </p>
            </div>
            <div class="mt-7 flex flex items-center">
              <div
                class="w-20 h-20 bg-white shadow rounded-full flex mr-5 items-center justify-center"
                role="img"
                aria-label="ideas"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg3.svg"
                  alt="app"
                />
              </div>
              <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                Whether article spirits new her covered hastily sitting her.
                Money witty
              </p>
            </div>
            <div class="mt-7 flex flex items-center">
              <div
                class="w-20 h-20 bg-white shadow rounded-full flex mr-5 items-center justify-center"
                role="img"
                aria-label="bright ideas"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/about-2-svg4.svg"
                  alt="bulb"
                />
              </div>
              <p class="text-base leading-6 mt-6 text-center text-gray-600 dark:text-gray-200 sm:w-96 w-full">
                A phrase is a short selection of words which when put together
                create a concept.
              </p>
            </div>
          </div>
        </div>
        <div class="py-12 xl:w-1/2 lg:w-1/3 sm:w-1/2">
          <img
            src="https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="image ow a woman studying"
            class="h-full rounded-md object-cover object-center md:block hidden"
          />
          <img
            src="https://i.ibb.co/NT0VJcd/pexels-la-miko-3681591-1.png"
            alt="image ow a woman studying"
            class="h-auto w-auto md:hidden block"
          />
        </div>
      </div> */}
    </>
  );
};
