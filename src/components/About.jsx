import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import Discount from "./Discount";
import { Button } from "@mui/material";


function About() {
  return (
    <Box sx={{marginTop:5}}>
        <Grid container sx={{ marginLeft:5}}>
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{}}>
                    <Typography  sx={{ border: "1px solid lightgrey", height: "100%" , marginRight:2 }}></Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{marginTop:5,marginLeft:5}}>
            <Grid item xs={12} md={6} lg={5}>
                <Box sx={{marginRight:10, marginBottom:10}}>
                    <Typography variant="h6" sx={{fontWeight:'bolder',marginBottom:3}}>Welcome To Phlox</Typography>
                    <Typography variant="h4" sx={{fontWeight:'bolder',marginBottom:3}}>Who We Are ?</Typography>
                    <Typography sx={{marginBottom:2, color:'grey'}}>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray</Typography>
                    <Typography sx={{marginBottom:2, color:'grey'}}>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray</Typography>
                    <Typography sx={{marginBottom:2, color:'grey'}}>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray</Typography>
                    <Button
              sx={{
                color: "white",
                backgroundColor: "#3190ae",
                fontWeight: "bold",
                width: "50%",
                padding: 2,
                borderRadius: 10,
                marginTop: 3,
                backgroundImage:
                  "linear-gradient(to right,#a02581,#f90665, #fd0638,#fe5d49 ,#fe4437, #feb213)",
              }}
            >
              Contact us
            </Button>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={7}>
                <Box sx={{marginRight:10, marginBottom:10,marginLeft:10}}>
                    <img height={420} width={'100%'} style={{borderRadius:22}} src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png"></img>
                    </Box>
            </Grid>
            
        </Grid>
        <Discount/>
    </Box>
  )
}

export default About