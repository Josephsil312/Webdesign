import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";

function Footer() {
  return (
    <footer>
      <Box 
        px={{ xs: 5, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.primary"
        color="white"
      >
        <Container >
          <Grid container spacing={10}>
          <Grid item xs={12} sm={3}>
              <Box borderBottom={1}>About Company</Box>
              <Box>
                <Link href="/" color="inherit">
                Here you can use rows and columns here to organize your
                footer content.Lorem ipsum dolor sit amet,consectetur
                adipisicing elit. Here you can use rows and columns here
                to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
                </Link>
              </Box>
            </Grid>
          <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Help</Box>
              <Box>
                <Link href="/" color="inherit">
                  About us
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Terms and Condition
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy policy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                 FAQ
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact us
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Session</Box>
              <Box>
                <Link href="/" color="inherit">
                  Sign in
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Forgot password
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Thank you
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Categories</Box>
              <Box>
                <Link href="/" color="inherit">
                 Women
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Men
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Accessories
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                 Gadgets
                </Link>
              </Box>
             
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Social</Box>
              <Box>
                <Link href="/" color="inherit">
                  Facebook
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Twitter
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Youtube
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                 Google plus
                </Link>
              </Box>
              
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
    
  );
}

export default Footer;
