import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {Box,Grid,Typography,Button, TextField} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import Navbar from './Navbar'
import * as emailjs from 'emailjs-com'
import Footer from './Footer'

const useStyle=makeStyles(theme=>({
    form:{
        top:"50%",
        left:"50%",
        transform:"translate(-50% , -50%)",
        position:"absolute"
    },
    button:{
        marginTop:"1rem",
        color:"#b33319",
        borderColor:"#b33319"
    }
}));

const InputField=withStyles({
    root:{
        "& label.Mui-focused":{
            color:"tomato"
        },
        "& label":{
            color:"white"
        },
        "& .MuiOutlinedInput-root":{
            "& fieldset":{
                borderColor:"tan"
            },
            "&:hover fieldset":{
                borderColor:"tan"
            },

            "&.Mui-focused fieldset":{
            borderColor:"tan"
        },
        }
    }
})(TextField);

function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_from', e.target, 'user_DvM1PFvAONg7eDm8zLa2K')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

const Contacts = () => {
    const classes= useStyle();
    return (
        <Box component="div" style={{background:"#172630", height:"100vh"}}>
            <Navbar/>
           <Grid container justify="center">
                <Box component="form" className={classes.form} onSubmit={sendEmail}>
                    <Typography variant="h5" style={{color:"#b33319", textAlign:"center", fontWeight:"bold", textTransform:"uppercase"}}>
                        Hiring or any query contact me
                    </Typography>
                    <InputField fullWidth={true} label="Name" name="user_name" variant="outlined" margin="dense" required="true" size="medium" inputProps={{style:{color:"white"}}}/>
                    <br />
                    <InputField fullWidth={true} label="Email" name="user_email" variant="outlined"  margin="dense" required="true" size="medium" inputProps={{style:{color:"white"}}}/>
                    <br />
                    <InputField fullWidth={true} label="Company" name="company" variant="outlined" required="true" margin="dense" size="medium" inputProps={{style:{color:"white"}}}/>
                    <br />
                    <InputField fullWidth={true} label="Message" name="message" variant="outlined" required="true" margin="dense" size="medium" inputProps={{style:{color:"white",height:"80px"}}}/>
                    <br />
                    <Button type="submit" variant="outlined" className={classes.button} fullWidth={true} endIcon={<SendIcon/>}>
                        Contact Me
                    </Button>
                    <br /> <br/>
                    <Footer/>
                </Box>   
            </Grid> 
        </Box>
    )
}

export default Contacts
