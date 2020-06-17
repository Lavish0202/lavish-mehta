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
            <Typed  strings={["My name is : Lavish Mehta"]} typeSpeed={55}/>
            </Typography>
            <br/>
            <Typography className={classes.subtitle} variant="h5">
            <Typed  strings={["Android developer", "Software developer", "Full Stack developer", "Web Developer"]}
             typeSpeed={45} backSpeed={60} loop/>
            </Typography>
            <Typography className={classes.title} style={{color:"#bad6d9"}} variant="h7">
            <Typed  strings={["I am a Masters student on my journey to be a software developer."]} 
            typeSpeed={30} />
            </Typography>
            <br/>
            <Typography className={classes.title} style={{color:"#bad6d9"}} variant="h7">
            <Typed  strings={["I am a quick learner, hardworker, cheerful and coding enthusiast"]} 
            typeSpeed={30} />
            <br/>
            </Typography>
            <Typography className={classes.title} style={{color:"#bad6d9"}} variant="h7">
            <Typed  strings={["I love playing soccer, cricket, going to trek and listening calm music"]} 
            typeSpeed={30} />
            </Typography>
            <br/>
            <Typography className={classes.title} style={{color:"#bad6d9"}} variant="h7">
            <Typed  strings={["Professionally seeking for a company with challanging roles and responsibility"]} 
            typeSpeed={30}  />
            </Typography>
            <br/>
            <Typography className={classes.title} style={{color:"#bad6d9"}} variant="h7">
            <Typed  strings={["Open for companies with friendly environment and great work values"]} 
            typeSpeed={30}  />
            </Typography>
            
        </Box>
    )
}
