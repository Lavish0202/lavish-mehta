import React from 'react'
import Navbar from './Navbar'
import {makeStyles} from '@material-ui/core/styles'
import {Card,
Box,Grid,
CardActionArea, CardActions,CardContent,CardMedia,Button,Typography
} from '@material-ui/core';
import project1 from '../twitter-logo.png'
import project2 from '../Corona_img.png'
import project3 from '../clockNote.jpg'
import project4 from '../scheduler.jpg'
import project5 from '../waste.jpg'
import project6 from '../cafe.jpg'


//CSS Styles

const useStyle=makeStyles({
    mainContainer:{
        background:"#70739e",
        height:"100%"
    },
    cardContainer:{
        maxWidth:345,
        margin:"3rem auto"
    }
})


export default function Project() {
    const classes=useStyle();
    return (
        <Box component="div" className={classes.mainContainer}>
          
          <Grid container justify="center" >
              <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project1}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Twitter Simulator
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A typical distributed system client server architecture with thousands of client communicating with a single server through web sockets. The project was in Elixir(Erlang) using functional programming and with phoenix framework for front end design. The simulator supported the functionality like sign-in user, sending live tweet, retweet, follow someone, see and add followers and also use given hashtags and mentions in tweet. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                        
                            <Button color="primary" size="small" onClick={() => window.open("https://github.com/Lavish0202/Twitter-Simulator")}>
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>               
              </Grid>
              <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project2}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Coronavirus Tracker app
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Seeing the global pandemic, I was motivated to design something which can be useful ahead in future also. I tried to design a tracker app using ReactJS which takes data from a REST api and displays the live status of the COVID-19 patiends globally and country based. It also display the recoveries and the casualities around the globe.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            
                            <Button color="primary" size="small" onClick={() => window.open("https://github.com/Lavish0202/CoronaVirus-Tracker")}>
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>               
              </Grid>
              <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project3}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                ClockNote
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                The Human-Computer Interaction Android application project motivated by the usage of context awarness into real life. There were two contexts time and location which were used to silent the phone automatically so that user is not getting disturbed in places like in library, during meetings or classes. There were 2 versions of the app and a research was conducted brings out the passive version which was automated was more useful to users.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            
                            <Button color="primary" size="small" onClick={() => window.open("https://github.com/Lavish0202/Passive_ClockNote")}>
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>               
              </Grid>
              <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project4}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Academic Scheduler
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                A Java based software motivated by the daily problem of doubt class scheduling between the professor and students in the universities and schools.The system automated the free slots of professor theough which student can apply and there will be e-mail confirmation which will confirm there meeting. The system reduced the manual work and daily confusion in scheduling the classes. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Button color="primary"  size="small" onClick={() => window.open("https://github.com/Lavish0202/Academic-Scheduler")}>
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>               
              </Grid>
              <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project5}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Smart Waste Management
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Smart Waste Management system was a attempt to make the waste management sytem to be more organized with people gettong direct access to the dustbin near them. the project used the concepts of IoT and wireless sensors monitoring the waste type and the waste level in bins. The muncipal corporation can also monitor the live data and clear the bins whenever necessary. The android app gives easy access to public and monitor the nearest bin near them in the city.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                        <CardActions>
                            <Button color="primary" size="small" onClick={() => window.open("https://github.com/Lavish0202/smartbin-mobile-app")}>
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>               
              </Grid>
              <Grid item xs={12} sm={8} md={6} >
                <Card className={classes.cardContainer}>
                    <CardActionArea >
                        <CardMedia
                        component="img"
                        alt="Project 1"
                        height="140"
                        image={project6}
                        />
                    
                        <CardContent>
                            <Typography gutterBottom variant="h5">
                                Cafe Website
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                               A user interactive dynamic website for the cafe which uses the concepts of full stack devlopment like Bootstrap, Javascript and database. The app allows user to see the menus, order food, reserve a table for time.
                            </Typography>
                        </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button color="primary" size="small" onClick={() => window.open("https://github.com/Lavish0202/Cafewebsite")}>
                                Live Demo
                            </Button>
                        </CardActions>
                </Card>               
              </Grid>
              
          </Grid>
        </Box>
    )
}
