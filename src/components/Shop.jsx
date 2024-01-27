import React, { useState } from "react";
import { Box, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import LanguageIcon from "@mui/icons-material/Language";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import Card from "./Card";
import Discount from "./Discount";

const BpIcon = styled("span")(({ theme }) => ({
  borderRadius: 3,
  width: 16,
  height: 16,
  boxShadow:
    theme.palette.mode === "dark"
      ? "0 0 0 1px rgb(16 22 26 / 40%)"
      : "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
  backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
  backgroundImage:
    theme.palette.mode === "dark"
      ? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
      : "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
  ".Mui-focusVisible &": {
    outline: "2px auto rgba(19,124,189,.6)",
    outlineOffset: 2,
  },
  "input:hover ~ &": {
    backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
  },
  "input:disabled ~ &": {
    boxShadow: "none",
    background:
      theme.palette.mode === "dark"
        ? "rgba(57,75,89,.5)"
        : "rgba(206,217,224,.5)",
  },
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage:
      "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
      " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
      "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpCheckbox(props) {
  return (
    <Checkbox
      sx={{
        "&:hover": { bgcolor: "transparent" },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      inputProps={{ "aria-label": "Checkbox demo" }}
      {...props}
    />
  );
}

function Shop() {
  const Products = [
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10194.jpg",
    },
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10193-300x291.jpg",
    },
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10203-300x291.jpg",
    },
    ,
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10195-300x291.jpg",
    },
    ,
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10200-300x291.jpg",
    },
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10197-300x291.jpg",
    },
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10202-300x291.jpg",
    },
    {
      image:
        "https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10192-300x291.jpg",
    },
  ];
  return (
    <Box sx={{ marginTop: 5, marginBottom: 10 }}>
      <Grid container sx={{ marginLeft: 5 }}>
        <Grid item xs={12} md={12} lg={12}>
          <Box sx={{}}>
            <Typography
              sx={{
                border: "1px solid lightgrey",
                height: "100%",
                marginRight: 2,
                marginBottom: 8,
              }}
            ></Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          lg={3}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginLeft: 4,
          }}
        >
          <Box sx={{ minWidth: 350 }}>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bolder", marginBottom: 3 }}
              >
                Search
              </Typography>
              <TextField
                placeholder="Search Categories"
                sx={{
                  marginBottom: 2,
                  "& fieldset": { border: "none" },
                  borderRadius: 10,
                  width: "80%",
                  backgroundColor: "#f5f5f7",
                }}
              ></TextField>
              <Button
                endIcon={<SearchOutlinedIcon sx={{}} />}
                sx={{
                  borderRadius: 10,
                  width: "80%",
                  padding: 1.5,
                  backgroundColor: "#202bc2",
                  color: "white",
                  fontWeight: "bold",
                  ":hover": {
                    backgroundColor: "#202bc2",
                    color: "white",
                  },
                }}
              >
                Search
              </Button>
            </Box>
            <Box>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bolder", marginTop: 6, marginBottom: 4 }}
              >
                Categories
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Accessories
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (4)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Cameras & Audio
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (6)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Cameras & Audio
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (6)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Car & Industrial
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (2)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Cameras & Audio
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (6)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    {" "}
                    Headphones
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (7)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Cameras & Audio
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (6)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Laptops
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (3)
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "80%",
                  marginBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <BpCheckbox />
                  <Typography variant="h6" sx={{ color: "#747d8f" }}>
                    Smart Home
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "red", fontWeight: "bold" }}
                  >
                    (1)
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          container
          xs={12}
          md={7}
          lg={9}
          spacing={6}
          sx={{ marginBottom: 10 }}
        >
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bolder", marginBottom: 5 }}
            >
              Featured Products
            </Typography>
          </Grid>

          <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {Products.map((product) => {
              return <Card product={product}></Card>;
            })}
          </Box>
        </Grid>
      </Grid>
      <Discount/>
    </Box>
  );
}

export default Shop;
