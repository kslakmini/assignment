import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import "./offer.css";
import Offer1 from "../../utils/assets/images/sangrila/offer1.png";
import Offer2 from "../../utils/assets/images/sangrila/offer2.png";
import Offer3 from "../../utils/assets/images/sangrila/offer3.png";

export default function offers() {
  const offerData = [
    {
      img: "offer1",
      type: "Rooms & Suites",
      discription: "Shangri–La Circle Exclusive Member Rate with Breakfast",
      price: "LKR 55,978.20",
      body: "Exclusive Member Rate with Breakfast for Shangri-La Circle member.",
    },
    {
      img: "offer2",
      type: "Rooms & Suites",
      discription: "Shangri–La Circle Exclusive Member Rate",
      price: "LKR 49,758.40",
      body: "Exclusive Member Rate for Shangri-La Circle member.",
    },
    {
      img: "offer3",
      type: "Dining",
      discription: "Weekend Brunch at Central",
      price: "LKR 50,768.40",
      body: "A global gastronomic journey awaits you with our Weekend brunch at Central.",
    },
  ];
  return (
    <Grid
      container
      xs={12}
      display={"flex"}
      justifyContent={"center"}
      alignContent={"center"}
      paddingTop={"2rem"}
      paddingBottom={"2rem"}
    >
      <Grid
        container
        item
        xs={12}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
      >
        <Typography
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontSize: "28px",
            fontWeight: 400,
            lineHeight: "37px",
            color: "#333333",
          }}
        >
          Offers
        </Typography>
      </Grid>
      <Grid
        container
        item
        md={9}
        sm={11}
        xs={11}
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"center"}
      >
        {offerData.map((item) => (
          <Grid
            container
            item
            md={3.7}
            sm={3.5}
            xs={12}
            sx={{ boxShadow: 2, margin: "2rem 0" }}
          >
            <Grid item xs={12}>
              <img
                src={
                  item.img === "offer1"
                    ? Offer1
                    : item.img === "offer2"
                    ? Offer2
                    : Offer3
                }
                alt={"something new"}
                width={"100%"}
                height={"auto"}
              />
            </Grid>
            <Grid item xs={12} sx={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
              <Typography
                className="offerType"
                sx={{
                  fontFamily:
                    '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  color: "#333333",
                }}
              >
                {item.type}
              </Typography>
              <Typography
                className="offerDiscription"
                sx={{
                  fontFamily:
                    '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: "#333333",
                }}
              >
                {item.discription}
              </Typography>
              <Typography
                className="offerbody"
                sx={{
                  fontFamily:
                    '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  color: "#6c6c6c",
                }}
              >
                {item.body}
              </Typography>
              <Typography
                className="offerprice"
                sx={{
                  fontFamily:
                    '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  color: "#333333",
                }}
              >
                From LKR <span className="offerpricespan">{item.price}</span>{" "}
                Average Per Night
              </Typography>
              <Button
                sx={{
                  fontFamily:
                    '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                  fontSize: "14px",
                  fontWeight: 600,
                  lineHeight: "36px",
                  borderRadius: 0,
                  textTransform: "capitalize",
                  color: "#876A20",
                  border: "1px solid #876A20",
                  marginBottom: "1rem",
                  "&:hover": {
                    cursor: "pointer",
                    border: "1px solid #876A20",
                  },
                }}
                variant="outlined"
              >
                View Details
              </Button>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
