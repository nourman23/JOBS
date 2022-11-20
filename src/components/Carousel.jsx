import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
export const TheCarousel = () => {
  var items = [
    {
      imageUrl:
        "https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://content.mycareersfuture.gov.sg/wp-content/uploads/2021/02/job-search-singapore-2000x1334-1.png",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://images.pexels.com/photos/5717499/pexels-photo-5717499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      imageUrl:
        "https://www.betterteam.com/images/betterteam-job-posting-template-6000x4000-2020127.jpeg?crop=2:1,smart&width=1200&dpr=2",
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
        <h1 className="" style={{ fontSize: "70px" }}>
          <span style={{ color: "#1976d2" }}>J</span>OBS
        </h1>
        <h2 className="mb-5 ">Search For Your Job Dream </h2>
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
