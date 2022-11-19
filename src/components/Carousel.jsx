import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
export const TheCarousel = () => {
  var items = [
    {
      imageUrl:
        "https://images.pexels.com/photos/4050320/pexels-photo-4050320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://media.istockphoto.com/id/1279104620/photo/top-view-of-a-white-desktop-concept-job-search.jpg?s=612x612&w=0&k=20&c=Ow_kvA2wQ4rLlqX_oFHgpjLb1JMKyPQKLOPzbu6w6qw=",
    },
    {
      imageUrl:
        "https://www.incimages.com/uploaded_files/image/1920x1080/getty_510482146_200010002000928055_393268.jpg",
    },
    {
      imageUrl:
        "http://www.jobs4na.com/wp-content/uploads/2022/10/jobsearch.jpeg",
    },
  ];

  return (
    <>
      <Carousel
        interval={4500}
        animation="slide"
        duration={800}
        className="shadow-xl"
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

function Item(props) {
  return (
    <Paper className="bg-dark text-white">
      <div style={{ height: "80vh" }}>
        <img
          width="100%"
          height="100%"
          src={props.item.imageUrl}
          alt=""
          className="z-1"
          style={{ filter: "brightness(40%)" }}
        />
      </div>
      <div
        className="w-100 h-50 flex flex-column justify-content-center align-items-center"
        style={{ position: "absolute", top: "35%" }}
      >
        <h2>Search For Your Job Dream </h2>
        <a href="#search" className="">
          <button
            className="btn text-white z-10 "
            style={{
              backgroundColor: "#1976d2",
            }}
          >
            Search
          </button>
        </a>
      </div>
    </Paper>
  );
}
