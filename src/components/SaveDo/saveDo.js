import { Grid, Typography } from "@mui/material";
import React from "react";
import New1 from "../../utils/assets/images/hilton/new1.png";
import New2 from "../../utils/assets/images/hilton/new2.png";
import New3 from "../../utils/assets/images/hilton/new3.png";
import New4 from "../../utils/assets/images/hilton/new4.png";
import New5 from "../../utils/assets/images/hilton/new5.png";
import New6 from "../../utils/assets/images/hilton/new6.png";
import "./newdo.css";

export default function SaveDo() {
  const saveData = [
    {
      img: "new1",
      discription: "Join Hilton Honors & Get Up to 3,000 Points",
    },
    {
      img: "new2",
      discription: "Advance Purchase Discount – save up to 17%",
    },
    {
      img: "new3",
      discription: "Multiply Your Points",
    },
    {
      img: "new4",
      discription: "Free Bonus Points at new hotels",
    },
    {
      img: "new5",
      discription: "Park & Stay",
    },
    {
      img: "new6",
      discription: "Experience the Stay",
    },
  ];

  return (
    <Grid container xs={12} className="savedomain" marginBottom={"3rem"}>
      <Grid container item className="savedoheading" xs={11}>
        <Grid container item xs={12}>
          <Typography
            sx={{
              fontSize: "36px",
              lineHeight: "40px",
              color: "#104C97",
              fontWeight: 700,
            }}
          >
            Save more, do more
          </Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography
            sx={{
              fontSize: "18px",
              lineHeight: "25px",
              color: "#121212",
              fontWeight: 400,
              margin: "1.5rem 0 1rem 0",
            }}
          >
            Choose from our exclusive offers, and get more from your next stay.
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} className="savedomain">
        <Grid container spacing={2} item xs={11}>
          {saveData.map((item) => (
            <Grid item md={4} sm={6} xs={12} className="cardImage1">
              <Grid item xs={12} className="cardImage">
                <img
                  src={
                    item.img === "new1"
                      ? New1
                      : item.img === "new2"
                      ? New2
                      : item.img === "new3"
                      ? New3
                      : item.img === "new4"
                      ? New4
                      : item.img === "new5"
                      ? New5
                      : New6
                  }
                  className="savedoimage"
                  alt={"something new"}
                  loading="lazy"
                />
                <Grid className="cardText">{item.discription}</Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
