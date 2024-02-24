import { Grid } from '@mui/material';
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from 'react'

export default function navigationbar() {
  return (
    <Grid
      container
      item
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#333333",
        padding: "3px 0",
      }}
    >
      <Grid
        container
        item
        xl={10}
        lg={10}
        md={10}
        sm={12}
        xs={12}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          backgroundColor: "#333333",
        }}
      >
        <Grid
          container
          item
          lg={10}
          md={10}
          sm={11.5}
          xs={11.5}
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "flex",
              sm: "none",
              xs: "none",
            },
            flexDirection: "row",
            justifyContent: "start",
            alignContent: "center",
            backgroundColor: "#333333",
          }}
        >
          <ButtonGroup aria-label="Basic button group">
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              ABOUT <KeyboardArrowDownIcon />
            </Button>
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              ROOMS & SUITES <KeyboardArrowDownIcon />
            </Button>
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              DINING <KeyboardArrowDownIcon />
            </Button>{" "}
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              EXPIRENSE <KeyboardArrowDownIcon />
            </Button>
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              EVENTS <KeyboardArrowDownIcon />
            </Button>
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              GALLERY
            </Button>
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              OFFERS
            </Button>
            <Button
              sx={{
                backgroundColor: "none",
                border: "none",
                color: "#ffffff",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "none",
                  border: "none",
                  cursor: "pointer",
                },
              }}
            >
              MORE <KeyboardArrowDownIcon />
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid
          container
          item
          lg={2}
          md={2}
          sm={11.5}
          xs={11.5}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Grid
            container
            item
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              sx={{
                borderRadius: 0,
                textTransform: "uppercase",
                color: "#ffffff",
                border: "1.5px solid #ffffff",
                padding: "3px 10px",
                fontWeight: 500,
                "&:hover": {
                  cursor: "pointer",
                  border: "1px solid #ffffff",
                },
              }}
              variant="outlined"
            >
              find a hotel
            </Button>{" "}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

