import React, { Component } from "react";
// import './App.css';
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Box, CardActions, Container, Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import {
  CardActionArea,
  CardMedia,
  CardContent,
  Button,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Route, Switch, Redirect } from "react-router-dom";
import { render } from "@testing-library/react";
import NavBar from "./components/navbar";
import About from "./components/about";
import Blog from "./components/blog";
import Home from "./components/home";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },

  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3155&q=80')`,
    height: "500px",
    backgroundPosition: "centertop",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "3rem",
  },

  blogsContainer: {
    paddingTop: theme.spacing(3),
  },

  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
  },

  card: {
    maxWidth: "100%",
  },

  media: {
    height: 240,
  },

  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" color="#fff">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tina Kovacova
          </Typography>
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
      {/* <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                <Typography variant='h6' color='primary' >
                    Tina Kovacova
                </Typography>
            </Toolbar>
        </AppBar> */}
      <Box className={classes.hero}>
        <Box> Welcome to my [budding] Digital Garden</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          My Work
        </Typography>
        <p>
          This is an experiment in authenticity and learning. Most of my work is
          "work in progress", but still, here are a few things I'd like to share
          with the world.
        </p>
        <br></br>
        <br></br>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1493382051629-7eb03ec93ea2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2850&q=80"
                  title="A seedling in the middle of the desert"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Digital Garden
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    You might have heard of digital gardening - bits and scraps
                    of your own learning, shared with the world. This is where I
                    share and publish some of them.
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
                        {/* <Box className={classes.button}></Box>
                    </CardActions> */}
              <CardActions>
                <Button size="small" color="primary" disabled="true">
                  Demo
                </Button>
                <Button size="small" color="primary" disabled="true">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1495434942214-9b525bba74e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  title="A music app recommending only the loveliest of songs"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Spotify Music Recommender
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Here's my favourite machine learning project - I hope you
                    find a song you love!
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
                        {/* <Box className={classes.button}></Box>
                    </CardActions> */}
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href="https://bw-spotify.netlify.app/"
                  target="_blank"
                >
                  Demo
                </Button>
                <Button size="small" color="primary" disabled="true">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.unsplash.com/photo-1604608678051-64d46d8d0ffe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  //   https://images.unsplash.com/photo-1484528215557-1395a4b4b8a6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  title="A Snow Fox"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                  ></Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    There are a few more exciting ideas I hope to materialize -
                    and well - they'll be ready when they're done :)
                  </Typography>
                </CardContent>
              </CardActionArea>
              {/* <CardActions className={classes.cardActions}>
                        {/* <Box className={classes.button}></Box>
                    </CardActions> */}
              {/* <CardActions>
                        <Button size="small" color="primary">
                        Demo
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

// ROUTES - FULLY FUNCTIONAL 🎉
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavBar />
//         <div className="content">
//           <Switch>
//             // We want to order the routes from most specific to most generic
//             ones
//             <Route path="/about" component={About} />
//             <Route path="/blog" component={Blog} />
//             <Route path="/" component={Home} />
//             {/* <Redirect to="not-found" /> - TODO: add this later */}
//           </Switch>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
