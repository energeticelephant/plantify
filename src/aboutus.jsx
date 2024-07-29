import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import backgroundImage from "./assets/banner.png";

function AboutUs() {
  return (
    <section id="aboutus">
      <Container maxWidth="100vw" sx={{
          marginTop: "5px",
          backgroundColor: "#f5f5dc", // Pastel beige color
          padding: "20px",
          borderRadius: "8px", // Optional: to add rounded corners
          height: "100vh",
          width: "100vw",
        }}>
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
        <Grid container spacing={4} sx={{ marginTop: 4 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "100%",
                width: "100%",
                minHeight: "300px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
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
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                textAlign: 'center',
              }}
            >
              Plantify is a one-stop shop for all your gardening needs, offering
              a wide range of products, from gardening tools and flowers to
              potted plants and Ikebana arrangements. 
                <br />
                <br />
              COMING SOON!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default AboutUs;
