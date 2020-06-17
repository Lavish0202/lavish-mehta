import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {Box,Typography} from '@material-ui/core'
import Navbar from './Navbar'

const useStyle= makeStyles(theme=>({
    mainContainer:{
        background:"#233"
    },
    timeLine:{
        position:"relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position:"absolute",
            height:"100%",
            border: "1px solid tan",
            right:"40px",
            top:"0"
         },
        "&:after":{
            content:"''",
            display:"table",
            clear:"both"
        },
        [theme.breakpoints.up("md")]:{
            padding:"2rem",
            "&:before":{
                left: "calc(50% - 1px)",
                right: "auto"
            }
        }
        
    },
    timeLineItem:{
        padding:"1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin:"1rem 3rem 1rem 1rem",
	    clear:"both",
        "&:after": {
            content:"''",
            position:"absolute"
        },
        "&:before": {
            content:"''",
            position:"absolute",
            right:" -0.625rem",
            top:"calc(50% - 5px)",
            borderStyle: "solid",
            borderColor:"tomato tomato transparent transparent",
            borderWidth:"0.625rem",
            transform: "rotate(45deg)"
        },
        [theme.breakpoints.up("md")]:{
            width:"44%",
            margin: "1rem",
            "&:nth-of-type(2n)":{
                float:"right",
                margin:"1rem",
                borderColor: "tan"
            },
            "&:nth-of-type(2n):before":{
                right:"auto",
                left:"-0.625rem",
                borderColor:"transparent transparent tomato tomato"
            }

        }
    },
    
   
    timeLineYear:{
        textAlign:"center",
        maxWidth:"9.375rem",
        margin:"0 3rem 0 auto",
        fontSize: "1.8rem",
        background:"tomato",
        color: "white",
        lineHeight:1,
        padding:"0.5rem 0 1rem",
        "&:before":{
            display:"none"
        },
        [theme.breakpoints.up("md")]:{
            textAlign:"center",
            margin:"0 auto",
            "&:nth-of-type(2n)":{
                float: "none",
                margin:"0 auto"
            },
            "&:nth-of-type(2n):before":{
                display:"none",
    
            }
    
        }
    },
    
    
    heading:{
        color:"tomato",
        padding:"3rem 0",
        textTransform:"uppercase"
    },
    subHeading:{
        color:"white",
        padding: "0",
        textTransform:"uppercase"

    }
}));

export default function Resume() {
    const classes=useStyle();
    return (
        <>
           
           <Box component= "header" className={classes.mainContainer} >
            <Typography variant="h4" align ="center" className={classes.heading}>
                TimeLine
            </Typography>
            <Box component="div" className={classes.timeLine}>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2015
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    High School
                </Typography>
                <Typography variant="body1" align="center" style={{color:"tomato",fontWeight:"bold"}}>
                    St. Paul Higher Secondry School
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"tomato", fontStyle:"italic"}}>
                  Accomplished my schooling from prestigious school in my city which gave me directions to work for my future and nurtured me to be determined and hard worker. I started developing and practicing interest toward the coding after 10th standard.
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2015
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    Bachelors of Science(Information Technology)
                </Typography>
                <Typography variant="body1" align="center" style={{color:"tomato",fontWeight:"bold"}}>
                    Medicaps Institute of Science and Technology
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"tomato", fontStyle:"italic"}}>
                  Got admitted to state university in India. My inception for the journey to my dream started. I began exploring fundamentals for my passion in software development with several core subjects like Data Structures, Algorithms and Object Oriented programming. 
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2017
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    Internship (Web developer)
                </Typography>
                <Typography variant="body1" align="center" style={{color:"tomato",fontWeight:"bold"}}>
                    JukeBox Multimedia
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"tomato", fontStyle:"italic"}}>
                  Securing my first internship was one of my milestones in my journey, it helped me gain a lot of exposure with learning and development of project related to full stack development. I worked here on Java Web with backend as SQL. This opportunity lead me to be more detail oriented in my work. I developed my first website for a cafe while working here.
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2018
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    Internship (Software developer)
                </Typography>
                <Typography variant="body1" align="center" style={{color:"tomato",fontWeight:"bold"}}>
                    Engineers2 Software Solutions
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"tomato", fontStyle:"italic"}}>
                  Doing the internship here as software developer helped me learn a lot about SDLC and agile development in Java. It also gave me an opportunity to be a better team worker and understanding my role to contribute towards team goals. I worked here in doing a project for a online quiz system in Java for schools. 
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2019
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    Masters of Science in Computer Science
                </Typography>
                <Typography variant="body1" align="center" style={{color:"tomato", fontWeight:"bold"}}>
                    University of Florida
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"tomato", fontStyle:"italic"}}>
                  One of the incredible milestone into my journey is doing Masters. To broaden up the concepts and take my knowledge to the advance level doing Masters proved to be essential. Several projects I worked in domains like distributed systems, Human-Computer interaction, Advance Data Structures helped me to improve my development and analytical skills. 
                </Typography>
            </Box>
            <Typography variant="h2" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2020
            </Typography>
            <Box component="div" className={classes.timeLineItem}>
                <Typography variant="h5" align="center" className={classes.subHeading}>
                    Internship(Android Developer)
                </Typography>
                <Typography variant="body1" align="center" style={{color:"tomato", fontWeight:"bold"}}>
                    Livestock City inc. (Virginia, US)
                </Typography>
                <Typography variant="subtitle1" align="center" style={{color:"tomato", fontStyle:"italic"}}>
                  Working as a Masters Student at such a growing company with awesome people really gave me an exposure to enhance myself. I worked on Android development here contributing to an application which was in its inception state gave me a chance to understand its life cycle. I also worked with REST api's and databases like Room(SQLite) and Postgre, I followed MVVM model with concepts like databinding to make the app more organized. The experience while working in United States really gave me an opportunity to gain experience with advance and agile environment.
                </Typography>
            </Box>
            </Box>
           
            </Box> 
        </>
    )
}
