import React from 'react';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Box, CardActions, Container, Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { CardActionArea, CardMedia, CardContent, Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#fff'
    },

    hero: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1495195129352-aeb325a55b65?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3155&q=80')`,
        height: '500px',
        backgroundPosition: 'centertop',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontSize: '3rem',
    },

    blogsContainer: {
        paddingTop: theme.spacing(3)
    
    },

    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
    },

    card: {
        maxWidth: '100%',
    },

    media: {
        height: 240,
    },

    cardActions: {
        display: 'flex',
        margin: '0 10px',
        justifyContent: 'space-between',
    }
}))

function App() {
    const classes = useStyles();

  return (
    <div className='App'>
        <AppBar className={classes.appBar} position='static'>
            <Toolbar>
                <Typography variant='h6' color='primary' >
                    Home | Tina Kovacova
                </Typography>
            </Toolbar>
        </AppBar>
        <Box className={classes.hero}>
            <Box>Welcome to my Digital Garden</Box>
        </Box>
        <Container maxWidth='lg' className={classes.blogsContainer}> 
            <Typography variant='h4' className={classes.blogTitle} >
                My Work
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Spotifinder
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Project description goes here
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions className={classes.cardActions}>
                        {/* <Box className={classes.button}></Box> 
                    </CardActions> */}
                    <CardActions>
                        <Button size="small" color="primary">
                        Demo
                        </Button>
                        <Button size="small" color="primary">
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
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Project 2
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Project description goes here
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions className={classes.cardActions}>
                        {/* <Box className={classes.button}></Box> 
                    </CardActions> */}
                    <CardActions>
                        <Button size="small" color="primary">
                        Demo
                        </Button>
                        <Button size="small" color="primary">
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
                        image="/static/images/cards/contemplative-reptile.jpg"
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Project 3
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Project description goes here
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActions className={classes.cardActions}>
                        {/* <Box className={classes.button}></Box> 
                    </CardActions> */}
                    <CardActions>
                        <Button size="small" color="primary">
                        Demo
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
                </Grid>
            </Grid>
        </Container>
    </div>
  );
}

export default App;