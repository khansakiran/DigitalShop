import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";

function Discount() {
  return (
    <Grid
      container
      sx={{
        marginTop: 8,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 15,
        borderRadius: 12,
      }}
    >
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        sx={{
          height: "80vh",
          backgroundImage:
            "linear-gradient(to right,#7f3284,#ca0880,#fd046c,#fe0734,#fd614b, #fe4137 ,#feac0b,#bfe1fe, #0e74be)",
          borderRadius: 12,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" sx={{ color: "white", marginTop: 15 }}>
            Sign Up Newsletter & Promotions!
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: "white", marginTop: 4, fontWeight: "bolder" }}
          >
            Get 25% Discount
          </Typography>
          <Typography variant="h2" sx={{ color: "white", marginTop: 2 }}>
            On Your Next Purchase
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <TextField
              placeholder="Enter your E-Mail"
              sx={{ borderColor: "none", marginTop: 4, width:600, border:'none',borderRadius:20 }}
            ></TextField>
            <Button
              sx={{
                color: "red",
                backgroundColor: "white",
                fontWeight: "bold",
                borderRadius: 10,
                marginTop:4,
                height:50,
                marginLeft:3,
                width:200
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Discount;
