import React from "react";
import Logo from "../../utils/assets/images/sangrila/logo.png";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LanguageIcon from "@mui/icons-material/Language";
import Navigationbar from "./navigationbar";

function NavBar() {

  return (
    <Grid container xs={12}>
      <AppBar
        component="nav"
        sx={{
          background: "white",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          item
          xl={12}
          lg={12}
          md={12}
          sm={12}
          xs={12}
          sx={{
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#F4F5F6",
          }}
        >
          <Grid
            container
            item
            xl={10}
            lg={10}
            md={11.5}
            sm={11.5}
            xs={11.5}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Grid
              container
              item
              xl={3}
              lg={2}
              md={1.5}
              sm={12}
              xs={12}
              sx={{
                justifyContent: { md: "flex-start", sm: "space-between" },
                alignItems: "center",
              }}
            >
              <Grid
                item
                display={{
                  xl: "none",
                  lg: "none",
                  md: "none",
                  sm: "block",
                  xs: "block",
                }}
              >
                <IconButton>
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <img
                  src={Logo}
                  alt="hotels"
                  style={{ height: "2rem",padding:"0.8rem 0" }}
                />
              </Grid>
            </Grid>
            <Grid
              container
              item
              xl={9}
              lg={9.5}
              md={10}
              sx={{
                display: {
                  md: "flex",
                  sm: "none",
                  xs: "none",
                },
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Grid
                container
                item
                sx={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "flex-end",
                }}
              >
                <ButtonGroup aria-label="Basic button group">
                  <Button
                    sx={{
                      fontFamily:
                        '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      backgroundColor: "none",
                      border: "none",
                      color: "#333333",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "none",
                        border: "none",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <PermIdentityIcon fontSize="small" color="#333333" />
                    &nbsp; Sign In
                  </Button>
                  <Button
                    sx={{
                      fontFamily:
                        '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      backgroundColor: "none",
                      border: "none",
                      color: "#333333",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "none",
                        border: "none",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Join Now
                  </Button>
                  <Button
                    sx={{
                      fontFamily:
                        '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      backgroundColor: "none",
                      border: "none",
                      color: "#333333",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "none",
                        border: "none",
                        cursor: "pointer",
                      },
                    }}
                  >
                    Find Reservations
                  </Button>
                  <Button
                    sx={{
                      fontFamily:
                        '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      backgroundColor: "none",
                      border: "none",
                      color: "#333333",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "none",
                        border: "none",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <LanguageIcon fontSize="small" color="#333333" />{" "}
                    &nbsp;Engligh
                  </Button>
                  <Button
                    sx={{
                      fontFamily:
                        '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      backgroundColor: "none",
                      border: "none",
                      color: "#333333",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "none",
                        border: "none",
                        cursor: "pointer",
                      },
                    }}
                  >
                    LKR
                  </Button>
                  <Button
                    sx={{
                      fontFamily:
                        '"Montserrat", Verdana, Helvetica, Arial, sans-serif',
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "18px",
                      backgroundColor: "none",
                      border: "none",
                      color: "#333333",
                      textTransform: "capitalize",
                      "&:hover": {
                        backgroundColor: "none",
                        border: "none",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <SmartphoneIcon fontSize="small" color="#333333" />
                  </Button>{" "}
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
          <Navigationbar />
        </Grid>
      </AppBar>
    </Grid>
  );
}

export default NavBar;
