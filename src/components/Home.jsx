import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Navbar from "./Navbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Discount from "./Discount";
import Card from "./Card";
import { TbWorldShare } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { GoGift } from "react-icons/go";


function Home() {
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
    <Box sx={{ overflowX: "hidden" }}>

      <Grid
        container
        justify="space-around"
        gap={4}
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "row",
          marginLeft: 2,
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: "black",
            borderRadius: 8,
            height: "93vh",
          }}
          xs={12}
          md={6}
          lg={3.8}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 7,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: 2, marginLeft: 9 }}
            >
              Blast Past Fast.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 9,
              }}
            >
              IPhone 12 Pro
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 9,
              }}
            >
              It’s A Leap Year.
            </Typography>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#3190ae",
                marginLeft: 9,
                fontWeight: "bold",
                width: "50%",
                padding: 2.5,
                borderRadius: 10,
                marginTop: 5,
                backgroundImage:
                  "linear-gradient(to right, #5bbad2 ,#44a7c7,#328ba3, #529d88)",
              }}
            >
              Shop By Category
            </Button>
            <img
              src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-21.png"
              style={{ marginTop: 32 }}
              height={300}
              width={450}
            ></img>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "#fe6e49",
            borderRadius: 8,
            height: "93vh",
          }}
          xs={12}
          md={6}
          lg={3.8}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 0,
              marginTop: 7,
            }}
          >
            <img
              src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-1.png"
              height={500}
              width={450}
              style={{ marginTop: -198 }}
            ></img>
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: 1, marginLeft: 9 }}
            >
              Noise Cancelling
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: "white", fontWeight: "bold", marginLeft: 9 }}
            >
              Beats Solo
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: "white", fontWeight: "bold", marginLeft: 9 }}
            >
              Wireless-Pro
            </Typography>
            <Button
              sx={{
                color: "white",
                backgroundColor: "black",
                fontWeight: "bold",
                marginLeft: 9,
                width: "50%",
                padding: 2.5,
                borderRadius: 10,
                marginTop: 3,
              }}
            >
              Shop By Category
            </Button>
          </Box>
        </Grid>
        <Grid
          item
          sx={{
            backgroundColor: "black",
            borderRadius: 8,
            height: "93vh",
          }}
          xs={12}
          md={6}
          lg={3.8}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 7,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: 2, marginLeft: 9 }}
            >
              Macbook Pro
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 9,
              }}
            >
              More Power.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 9,
              }}
            >
              Wakes Instantly.
            </Typography>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#3190ae",
                marginLeft: 9,
                fontWeight: "bold",
                width: "50%",
                padding: 2.5,
                borderRadius: 10,
                marginTop: 5,
                backgroundImage:
                  "linear-gradient(to right,#a02581,#f90665, #fd0638,#fe5d49 ,#fe4437, #feb213)",
              }}
            >
              Shop By Category
            </Button>
            <img
              src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-22.png"
              style={{ marginTop: 32 }}
              height={300}
              width={450}
            ></img>
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        justify="space-around"
        gap={4}
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "row",
          marginLeft: 2,
        }}
      >
        <Grid
          item
          sx={{
            backgroundColor: "#86888c",
            borderRadius: 8,
            height: "98vh",
          }}
          xs={12}
          md={6}
          lg={3.8}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 7,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: 2, marginLeft: 9 }}
            >
              Blast Past Fast.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 9,
              }}
            >
              IPhone 12 Pro
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 9,
              }}
            >
              It’s A Leap Year.
            </Typography>
            <Button
              sx={{
                color: "white",
                marginLeft: 9,
                fontWeight: "bold",
                width: "50%",
                padding: 2.5,
                borderRadius: 10,
                marginTop: 5,
                backgroundColor: "black",
              }}
            >
              Shop By Category
            </Button>
            <img
              src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-20.png"
              style={{ marginTop: 32 }}
              height={340}
              width={"100%"}
            ></img>
          </Box>
        </Grid>

        <Grid
          container
          rowGap={6}
          sx={{
            borderRadius: 8,
            display: "flex",
            flexDirection: "row",
          }}
          xs={12}
          md={6}
          lg={4.8}
        >
          <Grid
            xs={12}
            md={6}
            lg={12}
            item
            sx={{
              height: "46vh",
              backgroundColor: "#dfdfdf",
              borderRadius: 12,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 0,
                marginTop: 7,
              }}
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: "black",
                    marginBottom: 1,
                    marginLeft: 9,
                    width: "80%",
                  }}
                >
                  Quadcopter
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontWeight: "bolder",
                    marginLeft: 9,
                    width: "80%",
                  }}
                >
                  DJI MavicMini
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontWeight: "bolder",
                    marginLeft: 9,
                    width: "80%",
                  }}
                >
                  DroneFlyCam
                </Typography>
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: "white",
                    fontWeight: "bold",
                    marginLeft: 9,
                    width: "80%",
                    padding: 2.5,
                    borderRadius: 10,
                    marginTop: 3,
                  }}
                >
                  Shop By Category
                </Button>
              </Box>
              <Box>
                <img
                  height={420}
                  width={410}
                  style={{ marginLeft: 0, marginTop: -50 }}
                  src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/drone_PNG204.png"
                ></img>
              </Box>
            </Box>
          </Grid>
          <Grid
            xs={12}
            md={6}
            lg={12}
            item
            sx={{
              height: "46vh",
              backgroundColor: "#cf354b",
              borderRadius: 12,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginLeft: 0,
                marginTop: 7,
              }}
            >
              <Box sx={{ width: "100%" }}>
                <Typography
                  variant="h6"
                  sx={{ color: "black", marginBottom: 1, marginLeft: 9 }}
                >
                  wear gadgets
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontWeight: "bolder",
                    marginLeft: 9,
                    width: "100%",
                  }}
                >
                  Wear Gadgets
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontWeight: "bolder",
                    marginLeft: 9,
                    width: "100%",
                  }}
                >
                  Stay Creative.
                </Typography>
                <Button
                  sx={{
                    color: "white",
                    backgroundColor: "black",
                    fontWeight: "bold",
                    marginLeft: 9,
                    paddingLeft: 5,
                    paddingRight: 5,
                    paddingBottom: 2.5,
                    paddingTop: 2.5,
                    borderRadius: 10,
                    marginTop: 3,
                    width: "100%",
                  }}
                >
                  Shop By Category
                </Button>
              </Box>
              <Box>
                <img
                  height={310}
                  width={450}
                  src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/clay-apple-watch-mockup-07.png"
                ></img>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Grid
          item
          sx={{
            backgroundColor: "black",
            borderRadius: 8,
            height: "98vh",
          }}
          xs={12}
          md={6}
          lg={2.8}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 7,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", marginBottom: 2, marginLeft: 5 }}
            >
              Earphone
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 5,
              }}
            >
              Stay Connect.
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontWeight: "bolder",
                fontSize: 40,
                marginLeft: 5,
              }}
            >
              Stay Creative.
            </Typography>
            <Button
              sx={{
                color: "white",
                backgroundColor: "#3190ae",
                marginLeft: 5,
                fontWeight: "bold",
                width: "80%",
                padding: 2.5,
                borderRadius: 10,
                marginTop: 5,
                marginBottom: 12,
                backgroundImage:
                  "linear-gradient(to right, #caa968,#d6bd89 ,#b8995b, #c2a25f)",
              }}
            >
              Shop By Category
            </Button>
            <img
              src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Group-10190.png"
              style={{ marginTop: 22, marginLeft: -30 }}
              height={250}
              width={340}
            ></img>
          </Box>
        </Grid>
      </Grid>

      <Grid container justify="space-around" gap={4}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
            Best Seller Products
          </Typography>
          <Typography sx={{ color: "grey", marginTop: 2, marginBottom: 10 }}>
            There are many variations passages
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {Products.map((product) => {
          return <Card product={product}></Card>;
        })}
      </Box>

      <Grid
        contaier
        gap={6}
        sx={{ display: "flex", flexDirection: "row", marginTop: 10 }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            backgroundColor: "black",
            borderRadius: 8,
            height: "48vh",
            // maxWidth:'400vh'
            marginLeft: 4,
          }}
        >
           <Box sx={{ minWidth: "200vh", display:'flex', flexDirection:'row' }}>
            <Box>
              <Typography sx={{ color: "white", marginLeft: 6, marginTop: 5 }}>
              camera Accessories
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bolder",
                  marginLeft: 6,
                  color: "white",
                  marginTop: 2,
                }}
              >
               Launch Party
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bolder", marginLeft: 6, color: "white" }}
              >
               Nice Photos
              </Typography>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#5a6a97",
                  marginLeft: 6,
                  fontWeight: "bold",
                  padding: 2.5,
                  borderRadius: 10,
                  marginTop: 5,
                }}
              >
                Shop By Category
              </Button>
            </Box>
            <Box>
              <img width={380} height={400} style={{marginLeft:-20,marginTop:-60}}
                src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-15.png"
                alt=""
              />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={12}
          lg={6}
          sx={{
            backgroundColor: "#0c19b7",
            borderRadius: 8,
            height: "48vh",
            // maxWidth:'400vh'
          }}
        >
          <Box sx={{ minWidth: "200vh", display:'flex', flexDirection:'row' }}>
            <Box>
              <Typography sx={{ color: "white", marginLeft: 9, marginTop: 5 }}>
                game Accessories
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bolder",
                  marginLeft: 9,
                  color: "white",
                  marginTop: 2,
                }}
              >
                Enjoy Game
              </Typography>
              <Typography
                variant="h3"
                sx={{ fontWeight: "bolder", marginLeft: 9, color: "white" }}
              >
                High Tech
              </Typography>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#cfc735",
                  marginLeft: 9,
                  fontWeight: "bold",
                  padding: 2.5,
                  borderRadius: 10,
                  marginTop: 5,
                  backgroundImage:
                    "linear-gradient(to right, #cfc735)",
                }}
              >
                Shop By Category
              </Button>
            </Box>
            <Box>
              <img style={{marginLeft:-100, marginTop:40}}
                src="https://demo.phlox.pro/shop-digital-2/wp-content/uploads/sites/274/2021/04/Mask-Group-16.png"
                alt=""
              />
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* <Grid container justify="space-around" gap={4}>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
            Latest Posts
          </Typography>
        </Grid>
      </Grid> */}

      <Grid container justify="center" sx={{display:'flex', flexDirection:'row', justifyContent:'center', marginLeft:5, marginTop:20, marginBottom:15}} >
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{display:'flex', flexDirection:'row'}}>
          <TbWorldShare size={60}/>
          <Box sx={{marginLeft:3}}>
            <Typography variant="h5" sx={{fontWeight:'bold'}}>Free Delivery</Typography>
            <Typography>Free shipping on all order</Typography>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{display:'flex', flexDirection:'row'}}>
          <BiSupport size={60}/>
          <Box sx={{marginLeft:3}}>
            <Typography variant="h5" sx={{fontWeight:'bold'}}>Online support 24/7</Typography>
            <Typography>Support online 24 hours a day</Typography>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{display:'flex', flexDirection:'row'}}>
          <GiReceiveMoney size={60}/>
          <Box sx={{marginLeft:3}}>
            <Typography variant="h5" sx={{fontWeight:'bold'}}>Money return</Typography>
            <Typography>Back guarantee under 7 days</Typography>
          </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Box sx={{display:'flex', flexDirection:'row'}}>
          <GoGift size={60}/>
          <Box sx={{marginLeft:3}}>
            <Typography variant="h5" sx={{fontWeight:'bold'}}>Member discount</Typography>
            <Typography>Onevery order over $120.00</Typography>
          </Box>
          </Box>
        </Grid>
      </Grid>

      {/*discount */}
      <Discount />
    </Box>
  );
}

export default Home;
