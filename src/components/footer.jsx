import React from "react";
import { Box, Container, Typography, IconButton, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="body1">Follow us on social media</Typography>
            <IconButton href="https://twitter.com/wedgerbets" target="_blank">
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="body2" color="text.secondary">
              {"© "}
              <RouterLink
                to="/"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Plantify
              </RouterLink>{" "}
              {new Date().getFullYear()}
              {"."}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Link
              component={RouterLink}
              to="/aboutus"
              style={{ color: "inherit", margin: "0 8px" }}
            >
              About Us
            </Link>
            <Link
              href="mailto:sales@plantify.dev"
              style={{ color: "inherit", margin: "0 8px" }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "mailto:sales@plantify.dev";
              }}
            >
              <EmailIcon sx={{ verticalAlign: 'middle', mr: 0.5 }} />
              sales@plantify.dev
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;