import React from 'react'
import {Box,Grid,Typography,Avatar} from '@material-ui/core'
import avatar from '../Avatar.jpg'
import Typed from 'react-typed';
import {makeStyles} from '@material-ui/core/styles'


// Css Styling
const useStyle = makeStyles(theme=>({
    avatar: {
        
        width:theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
        

    },
    title:{
        color:"#001352"
    },
    subtitle:{
        color: "#0b074a",
        marginBottom: "3rem"
    },
    typedContainer:{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:"translate(-50%, -50%)",
        width: "100vw",
        textAlign:"center",
        zIndex:1
    }
}))  


export default function Header() {
    const classes= useStyle();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Lavish Mehta" />

            </Grid>
            <Typography className={classes.title} variant="h4">
            <Typed  strings={["Lavish Mehta"]} typeSpeed={55}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
            <Typed  strings={["Android developer", "Software developer", "Full Stack developer", "Web Developer"]}
             typeSpeed={45} backSpeed={60} loop/>
            </Typography>
            <Typography className={classes.title} style={{color:"white"}} variant="h5">
            <Typed  strings={["Masters student enthusiast to be a better software developer. Totally goal and team oriented. Always like to work smart and get my hands dirty with new technologies with new challanges. Looking to work at a place where I get to learn a lot and have nice people to work around."]} 
            typeSpeed={40}/>
            </Typography>
            
        </Box>
    )
}
