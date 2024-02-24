import React, { useState, useEffect } from "react";
import footerstart from "../../utils/assets/images/cinnamon/make-yourself-pattern.png";
import footerbg2 from "../../utils/assets/images/cinnamon/footer-bg2.png";
import BottomImg from "../../utils/assets/images/cinnamon/bottomimg.png";

import "./footerstyle.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Button, Grid } from "@mui/material";

export default function Footer() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
    // eslint-disable-next-line
  }, [window.scrollY]);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Grid
      container
      xs={12}
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Grid container item xs={12} position={"relative"}>
        <Grid item xs={12}>
          <img src={BottomImg} alt="cinnamon" width={"100%"} height={"auto"} />
        </Grid>
        <Grid item xs={12} sx={{ position: "absolute", bottom: "-10px" }}>
          <img
            src={footerstart}
            alt="cinnamon"
            width={"100%"}
            height={"auto"}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            position: "absolute",
            bottom: "-5px",
            right: "20px",
            color: "#fff",
          }}
        >
          {showScrollTopButton && (
            <button className="scrollbtn" onClick={scrollTop}>
              <p style={{padding:0,margin:0}}>
                <KeyboardArrowUpOutlinedIcon />
              </p>
              Scroll up
            </button>
          )}
        </Grid>
      </Grid>
      <Grid
        container
        item
        xs={10}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "start",
          alignContent: "space-between",
        }}
      >
        <Grid
          container
          item
          md={3}
          sm={12}
          sx={{
            textAlign: "start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignContent: "space-between",
          }}
        >
          <Grid item padding={"2rem 0"}>
            <p className="fhead">Corporate information</p>
            <p className="fsub">Cinnamon Hotels & Resorts</p>
            <p className="fsub">John Keells Group</p>
          </Grid>
          <Grid item padding={"2rem 0"}>
            <p className="fhead">Blogs</p>
            <p className="fsub">Cinnamon Ublog</p>
          </Grid>
          <Grid item padding={"2rem 0"}>
            <p className="fhead">Careers</p>
            <p className="fsub">Careers</p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={3}
          sm={12}
          sx={{
            textAlign: "start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignContent: "space-between",
          }}
        >
          <Grid item padding={"2rem 0"}>
            <p className="fhead">News and Awards</p>
            <p className="fsub">News</p>
            <p className="fsub">Awards</p>
          </Grid>
          <Grid item padding={"2rem 0"}>
            <p className="fhead">Corporate Governance</p>
            <p className="fsub">CSR</p>
          </Grid>
        </Grid>
        <Grid
          container
          item
          md={3.7}
          sm={12}
          sx={{
            textAlign: "start",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignContent: "space-between",
          }}
        >
          <Grid item padding={"2rem 0"}>
            <p className="fhead">Data Privacy & Security Policy</p>
            <p className="fsub">Terms & Conditions</p>
            <p className="fsub">Privacy Statement</p>
          </Grid>
          <Grid item padding={"2rem 0"}>
            <p className="fhead">Get In Touch</p>
            <p className="fsub">info@cinnamonhotels.com</p>
            <p className="fsub">Hotel Contact Information</p>
          </Grid>
          <Grid item padding={"2rem 0"}>
            <p className="fhead">Follow Us</p>
            <Grid
              container
              sx={{ display: "flex", flexDirection: "row", fontSize: "2rem" }}
            >
              <Grid className="fsubicon">
                <FacebookIcon fontSize="large" />
              </Grid>
              <Grid className="fsubicon">
                <TwitterIcon fontSize="large" />
              </Grid>{" "}
              <Grid className="fsubicon">
                <LinkedInIcon fontSize="large" />
              </Grid>{" "}
              <Grid className="fsubicon">
                <InstagramIcon fontSize="large" />
              </Grid>{" "}
              <Grid className="fsubicon">
                <YouTubeIcon fontSize="large" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item sx={{ textAlign: "start" }}>
          <p className="fhead" padding={"1rem 0"}>
            Get Cinnamon in your inbox
          </p>
          <Grid className="emailsubmit" sx={{ width: {} }}>
            <input
              className="emailinput"
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <Button className="emailsubmitbtn">
              <ArrowForwardIosIcon />
            </Button>
          </Grid>{" "}
        </Grid>
      </Grid>
      <Grid>
        <img src={footerbg2} alt="cinnamon" width={"100%"} height={"auto"} />
      </Grid>
    </Grid>
  );
}
