import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function Card({product}) {
  return (
    <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'center', marginLeft:3}}>
      <Grid item xs={12} md={6} lg={3} sx={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "57vh",
            border: "1px solid grey",
            borderRadius: 10,
            ":hover": { boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" },
            minWidth:340, marginBottom:5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={product.image}
              height={230}
              width={257}
            ></img>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              Momentum Phone
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: "bolder" }}>
              $520
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginTop: 1,
                color: "grey",
              }}
            >
              Game Console Control ...
            </Typography>
          </Box>
          <Box>
            <Button
              endIcon={<LocalMallOutlinedIcon />}
              sx={{
                marginLeft: 5,
                marginRight: 5,
                marginTop: 3,
                color: "white",
                padding: 2,
                backgroundColor: "#202bc2",
                width: "80%",
                borderRadius: 10,
                ":hover": {
                  backgroundColor: "#202bc2",
                  color: "white",
                },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Card;
