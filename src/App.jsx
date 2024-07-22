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
import backgroundImage from "./assets/background.png";
import baccarat from "./assets/Baccarat-1.jpg";
import blackjack from "./assets/Blackjack-1.jpg";
import roulette from "./assets/Roulette-1.jpg";
import slots from "./assets/Slots-1.jpg";
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
          <Box
            sx={{
              padding: 4,
              color: "white",
              textAlign: "center",
              width: {
                xs: "100%", // 100% width on extra-small screens
                sm: "80%", // 80% width on small screens
                md: "60%", // 60% width on medium screens
                lg: "80%", // 40% width on large screens
                xl: "30%", // 30% width on extra-large screens
              },
              fontSize: {
                xs: "1rem", // 1.5rem font size on extra-small screens
                sm: "1rem", // 2rem font size on small screens
                md: "1.5rem", // 2.5rem font size on medium screens
                lg: "2rem", // 3rem font size on large screens
                xl: "2.5rem", // 3.5rem font size on extra-large screens
              },
            }}
          >
            <h1>EXPERIENCE THE THRILL</h1>
            <p>The Number 1 Gaming Platform:</p>
          </Box>
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
            Check Out Our Upcoming Games!
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
                      Roulette
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A casino game where players bet on where a ball will land
                      on a spinning wheel divided into numbered and colored
                      sections.
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
                      Baccarat
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A card game where players bet on the outcome of the hand,
                      trying to predict whether the player's or the banker's
                      hand will be closer to a value of nine.
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
                      Blackjack
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A card game where players aim to have a hand value closer
                      to 21 than the dealer's without exceeding 21.
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
                      Slots
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      A game of chance played on a machine with spinning reels,
                      where players win by matching symbols on pay lines.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section id="aboutus">
        <Container maxWidth="lg" sx={{marginTop:'5px'}}>
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
            BETWAGER is an online platform providing casino games for your
            entertainment. More services will be coming soon. Stay tuned!
          </Typography>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
