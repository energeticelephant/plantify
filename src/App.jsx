import React from "react";
import {
  CssBaseline,
  Container,
  Card,
  Grid,
  Paper,
  Box,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "./components/AppBar.jsx";
import backgroundImage from "./assets/banner.png";
import baccarat from "./assets/flowers.jpeg";
import blackjack from "./assets/pottedplant.jpg";
import roulette from "./assets/tools.jpeg";
import slots from "./assets/ikebana.jpg";
import { Margin } from "@mui/icons-material";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <section id="home">
        <Container
          maxWidth="100vw"
          sx={{
            textAlign: "center",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover", // Ensures the image covers the container
            backgroundPosition: "center", // Centers the image
            backgroundRepeat: "no-repeat", // Prevents the image from repeating
            height: "100vh", // Adjust the height as needed
            width: "100vw", // Ensure the width covers the viewport
            display: "flex", // Use flexbox to align items
            alignItems: "center", // Center items vertically
            justifyContent: "center", // Center items horizontally
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "white",
            textDecoration: "none",
            padding: [2, 3, 4],
          }}
        >
        </Container>
      </section>
      <section id="games">
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            textAlign="center"
            fontSize={{
              xs: "1rem", // 1.5rem font size on extra-small screens
              sm: "1.5rem", // 2rem font size on small screens
              md: "1.5rem", // 2.5rem font size on medium screens
              lg: "2rem", // 3rem font size on large screens
              xl: "2.5rem",
            }}
            fontWeight={700}
            color="inherit"
            textDecoration="none"
            marginTop={4}
          >
            Check Out Our Products!
          </Typography>
          <Grid
            container
            rowSpacing={3}
            spacing={8}
            marginTop={2}
            sx={{ textAlign: "start" }}
            display={{ xs: "flex", sm: "flex", md: "flex", lg: "flex" }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={roulette}
                    alt="Roulette"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Gardening Tools
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Gardening tools are essential items used for cultivating plants and maintaining gardens, including shovels, rakes, pruners, etc.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={baccarat}
                    alt="Baccarat"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Flowers
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Flowers are vibrant and fragrant plants that enhance any space with their beauty and variety, making them perfect for gifts, decorations, etc.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={blackjack}
                    alt="Blackjack"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Potted Plants
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Potted plants are versatile and decorative, ideal for indoor and outdoor spaces, offering a touch of greenery and elegance to any environment while being easy to care for and maintain.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={slots}
                    alt="Slots"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Ikebana
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Ikebana is the traditional Japanese art of flower arrangement, focusing on harmony, balance, and simplicity, creating stunning and meaningful displays that celebrate the beauty of nature.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="aboutus">
        <Container maxWidth="lg" sx={{ marginTop: "5px" }}>
          <Typography
            variant="h3"
            textAlign="center"
            fontSize={{
              xs: "1rem", // 1.5rem font size on extra-small screens
              sm: "1.5rem", // 2rem font size on small screens
              md: "1.5rem", // 2.5rem font size on medium screens
              lg: "2rem", // 3rem font size on large screens
              xl: "2.5rem",
            }}
            fontWeight={700}
            color="inherit"
            textDecoration="none"
            marginTop={4}
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            fontSize={{
              xs: "1rem", // 1.5rem font size on extra-small screens
              sm: "1.5rem", // 2rem font size on small screens
              md: "1.5rem", // 2.5rem font size on medium screens
              lg: "2rem", // 3rem font size on large screens
              xl: "2.5rem",
            }}
            fontWeight={400}
            color="inherit"
            textDecoration="none"
            marginTop={2}
          >
            Plantify is a one-stop shop for all your gardening needs, offering a wide range of products, from gardening tools and flowers to potted plants and Ikebana arrangements. COMING SOON!
          </Typography>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
