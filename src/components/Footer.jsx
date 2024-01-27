import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";

function Footer() {
  return (
    <Box sx={{marginTop:5}}>
        <Grid container sx={{marginLeft:5, marginBottom:5}}>
            <Grid item xs={12} md={6} lg={3} >
                <Box>
                    <img src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10047.png"></img>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={2.25}>
                <Box>
                    <Typography variant="h5" sx={{fontWeight:'bolder'}}>Visit Link</Typography>
                    <Typography sx={{marginTop:2, color:'grey'}}>Shop</Typography>
                    <Typography sx={{marginTop:1, color:'grey'}}>Privacy</Typography>
                    <Typography sx={{marginTop:1, color:'grey'}}>Terms & Conditions</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={2.25}>
                <Box>
                    <Typography variant="h5" sx={{fontWeight:'bolder'}}>Company</Typography>
                    <Typography sx={{marginTop:2, color:'grey'}}>Home</Typography>
                    <Typography sx={{marginTop:1, color:'grey'}}>About Us</Typography>
                    <Typography sx={{marginTop:1, color:'grey'}}>Contact Us</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={2.25}>
                <Box>
                    <Typography variant="h5" sx={{fontWeight:'bolder'}}>Contact</Typography>
                    <Typography sx={{marginTop:2, color:'grey'}}>+99 (0) 101 0000 888</Typography>
                    <Typography sx={{marginTop:1, color:'grey'}}>Info@yourdomain.com</Typography>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={2.25}>
                <Box>
                    <Typography variant="h5" sx={{fontWeight:'bolder'}}>Address</Typography>
                    <Typography sx={{marginTop:2, color:'grey'}}>Patricia Amedee 4401</Typography>
                    <Typography sx={{marginTop:1, color:'grey'}}>Waldeck Street Grapevine</Typography>
                    <Typography sx={{marginTop:1, color:'grey'}}>Nashville, Tx 76051</Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{marginTop:10, marginLeft:5, marginBottom:5}}>
            <Grid item xs={12} md={12} lg={12}>
                <Box sx={{}}>
                    <Typography  sx={{ border: "1px solid lightgrey", height: "100%" , marginRight:2 }}></Typography>
                </Box>
            </Grid>
        </Grid>
        <Grid container sx={{marginLeft:5, marginBottom:5}}>
            <Grid item xs={12} md={6} lg={12}>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Typography sx={{color:'grey'}}>© 2023 By Averta. All rights reserved.</Typography>
                    <Box>
                        <FaFacebookF size={20} style={{marginRight:20}}/>
                        <BsInstagram size={20} style={{marginRight:20}}/>
                        <BsTwitter size={20} style={{marginRight:20}}/>
                        <BiLogoLinkedin size={20} style={{marginRight:20}}/>
                    </Box>
                </Box>
            </Grid>
            
        </Grid>
    </Box>
  )
}

export default Footer