import { Grid } from "@mui/material";
import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export default function FilterSection() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        display: { md: "flex", sm: "none", xs: "none" },
        justifyContent: "center",
        alignContent: "center",
        position: "absolute",
        bottom: "30px",
        zIndex: 2,
      }}
    >
      <Grid
        container
        xl={10}
        lg={10}
        md={11}
        sm={11.5}
        spacing={1}
        sx={{
          padding: "0.5rem",
          position: "relative",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: "3.2rem",
            backgroundColor: "#ffffff",
            opacity: 0.5,
            width: "100%",
            position: "absolute",
            zIndex: -1,
          }}
        >
          .
        </Grid>
        <Grid container item xs={4} padding={"0.5rem"}>
          <Grid
            container
            item
            sx={{
              backgroundColor: "#ffffff",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignContent: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignContent: "center",
              }}
            >
              <p>
                &nbsp;&nbsp;
                <CalendarMonthOutlinedIcon />
              </p>
              <p>&nbsp;Feb 24, 2024</p>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                backgroundColor: "#ffffff",
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignContent: "center",
              }}
            >
              <p>
                | &nbsp;&nbsp;
                <CalendarMonthOutlinedIcon />
              </p>
              <p>&nbsp;Feb 25, 2024</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item xs={3.5} padding={"0.5rem"}>
          <Grid
            item
            sx={{
              backgroundColor: "#ffffff",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignContent: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <p>
              &nbsp;&nbsp;
              <PermIdentityIcon />
            </p>
            <p>&nbsp;1 Room, 1 Adults, 0 Childern</p>
          </Grid>
        </Grid>
        <Grid container item xs={3} padding={"0.5rem"}>
          <Grid
            item
            sx={{
              backgroundColor: "#ffffff",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignContent: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <p>
              &nbsp;&nbsp;
              <SellOutlinedIcon />
            </p>
            <p>&nbsp;Special code</p>
          </Grid>
        </Grid>
        <Grid container item xs={1.5} padding={"0.5rem"}>
          <Grid
            item
            sx={{
              backgroundColor: "#876A20",
              color: "#ffffff",
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            <p>Search</p>
          </Grid>
        </Grid>
        {/* <Grid item xs={4}>
          <div
            style={{
              borderRadius: 0,
              textTransform: "capitalize",
              backgroundColor: "#ffffff",
              color: "#000",
              lineHeight: "10px",
              marginLeft: "0.5rem",
              fontSize: "16px",
              padding: "0.5rem",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#252776",
              },
            }}
          >
            <p style={{ textAlign: "start" }}> 1 Room, 1 Adults, 0 Childern</p>
          </div>
        </Grid>
        <Grid item xs={3.5}>
          <div
            style={{
              borderRadius: 0,
              textTransform: "capitalize",
              backgroundColor: "#ffffff",
              color: "#000",
              lineHeight: "10px",
              fontSize: "16px",
              padding: "0.5rem",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#252776",
              },
            }}
          >
            <p style={{ textAlign: "start" }}>
              <PermIdentityIcon />
              &nbsp; 1 Room, 1 Adults, 0 Childern
            </p>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div
            style={{
              borderRadius: 0,
              textTransform: "capitalize",
              backgroundColor: "#ffffff",
              color: "#000",
              lineHeight: "10px",
              fontSize: "16px",
              padding: "0.5rem",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#252776",
              },
            }}
          >
            <p style={{ textAlign: "start" }}>Special code</p>
          </div>
        </Grid>
        <Grid
          item
          xs={1.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "flex-end",
          }}
        >
          <div
            style={{
              borderRadius: 0,
              width: "100%",
              textTransform: "capitalize",
              backgroundColor: "#252776",
              color: "#ffffff",
              lineHeight: "10px",
              fontSize: "16px",
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#252776",
              },
            }}
          >
            <p style={{ textAlign: "center" }}>Search</p>
          </div>
        </Grid> */}
      </Grid>
    </Grid>
  );
}
