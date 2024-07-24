import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="body1">
              Follow us on social media
            </Typography>
            <IconButton href="https://twitter.com/plantify" target="_blank">
              <TwitterIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Typography variant="body2" color="text.secondary">
              {'© '}
              <Link color="inherit" href="https://yourwebsite.com/">
                PLANTIFY
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} textAlign="center">
            <Link href="#aboutus" color="inherit" sx={{ mx: 1 }}>
              About Us
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
