import React from "react";
import { Grid, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import New1 from "../../utils/assets/images/sangrila/slider1.jpg";
import New2 from "../../utils/assets/images/sangrila/slider2.jpg";
import New3 from "../../utils/assets/images/sangrila/slider3.jpg";
import New4 from "../../utils/assets/images/sangrila/slider4.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import FilterSection from "./FilterSection";

export default function Slider() {
     const sliderData = [
       {
         img: "new1",
         name: "Shangri-La Colombo",
         discription:
           "Come with us through the whimsical world of Shangri-La, where your personal paradise awaits.",
       },
       {
         img: "new2",
         name: "Shangri-La Colombo",
         discription:
           "A personal tropical sanctuary set within the heart of the city",
       },
       {
         img: "new3",
         name: "Rooms & Suites",
         discription: "Tastefully designed with the modern traveler in mind",
       },
       {
         img: "new4",
         name: "Shang Palace",
         discription:
           "Celebrate the art of Chinese cuisine in the heart of Colombo",
       },
     ];
  return (
    <div
      style={{
        position: "relative",
        marginTop: "2rem",
      }}
    >
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {sliderData.map((item) => (
          <SwiperSlide style={{ backgroundColor: "#000", height: "95vh" }}>
            {" "}
            <img
              src={
                item.img === "new1"
                  ? New1
                  : item.img === "new2"
                  ? New2
                  : item.img === "new3"
                  ? New3
                  : New4
              }
              alt={"something new"}
              loading="lazy"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "95vh",
                opacity: 0.8,
              }}
            />
            <Grid
              sx={{
                position: "absolute",
                zIndex: 2,
                top: "50%",
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "36px",
                  lineHeight: "48px",
                  fontWeight: 400,
                  color: "#fff",
                }}
              >
                {item.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily:
                    '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                  fontSize: "20px",
                  fontWeight: 500,
                  lineHeight: "28px",
                  color: "#fff",
                }}
              >
                {item.discription}
              </Typography>
            </Grid>
          </SwiperSlide>
        ))}
      </Swiper>
      <FilterSection />
    </div>
  );
}
