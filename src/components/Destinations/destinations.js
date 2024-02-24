import { Grid, Typography, Button } from "@mui/material";
import New1 from "../../utils/assets/images/hilton/hakuraa.png";
import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./destination.css";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
        minWidth: 180,
        height: 300,
    width:400,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));


export default function Destinations() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
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
          sm={12}
          xs={11}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "BodoniStd-BookItalic, serif",
              color: "#77328B",
              fontStyle: "italic",
              fontSize: { sm: "60px", xs: '50px' },
              lineHeight: "77px",
              fontWeight: 500,
            }}
          >
            Our Destinations
          </Typography>
          <Button
            id="demo-customized-button"
            variant="outlined"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            disableElevation
            onClick={handleClick}
            sx={{
              padding: "1rem",
              borderRadius: 0,
              textTransform: "capitalize",
              color: "#876A20",
              border: "1px solid #D3D4E4",
              margin: "1rem 0 5rem 0",
              "&:hover": {
                cursor: "pointer",
                border: "1px solid #D3D4E4",
              },
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                fontFamily: "BodoniStd-BookItalic, serif",
                color: "#77328B",
                fontStyle: "italic",
                fontSize: "20px",
                lineHeight: "20px",
                fontWeight: 500,
              }}
            >
              <div>Cinnamon Velifushi Maldives</div>{" "}
              <div>
                <KeyboardArrowDownIcon />
              </div>
            </div>
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            height={"5rem"}
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Life
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Grand Colombo
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Lakeside Colombo
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Red Colombo
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Bentota Beach
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Bey Beruwala
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Hikka Tranz by Cinnamon
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Wild Yala
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Trinco Blu by Cinnamon
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Citadel Kandy
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Lodge Habarana
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Habarana Village by Cinnamon
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Velifushi Maldives
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Hakuraa Huraa Maldives
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Cinnamon Dhonveli Maldives
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              Ellaidhoo Maldives by Cinnamon
            </MenuItem>
          </StyledMenu>
        </Grid>
        <Grid
          container
          item
          md={5.6}
          sm={10}
          xs={11}
          sx={{
            position: { md: "relative", sm: "staic" },
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Grid container item md={12} sm={6.5} xs={11}>
            <img
              src={New1}
              alt={"something new"}
              loading="lazy"
              width={"100%"}
              height={"auto"}
            />
          </Grid>
          <Grid
            container
            item
            md={6}
            sm={5}
            xs={11}
            boxShadow={3}
            sx={{
              position: { md: "absolute", sm: "staic" },
              right: "-33%",
              top: "15%",
              backgroundColor: "#ffffff",
              padding: "4rem 2rem",
            }}
          >
            <Typography
              sx={{
                fontFamily: "BodoniStd-BookItalic, serif",
                color: "#77328B",
                fontStyle: "italic",
                fontSize: "30px",
                lineHeight: "30px",
                fontWeight: 500,
                textAlign: "start",
                paddingBottom: "3rem",
              }}
            >
              Cinnamon Hakuraa Huraa Maldives
            </Typography>
            <Typography
              sx={{
                fontFamily: "BodoniStd-BookItalic, serif",
                color: "#1B1B1B",
                fontStyle: "none",
                fontSize: "17px",
                lineHeight: "24px",
                fontWeight: 400,
                textAlign: "start",
              }}
            >
              Cinnamon Hakuraa Huraa Maldives with its white roofed Water
              Bungalows set knee-deep in crystal waters of the lagoon is a
              vision of the stay promised.
            </Typography>
            <Button
              sx={{
                borderRadius: 0,
                fontFamily: "BodoniStd-BookItalic, serif",
                fontStyle: "italic",
                textTransform: "capitalize",
                backgroundColor: "#252776",
                color: "#ffffff",
                lineHeight: "29px",
                fontSize: "20px",
                margin: "1rem 0",
                padding: "1rem 1.5rem",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Discover more
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
