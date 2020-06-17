import React from 'react'
import {makeStyles} from '@material-ui/styles';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core'
import GitHub from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Facebook from '@material-ui/icons/Facebook'


const useStyle=makeStyles({
 root:{
    "& .MuiBottomNavigationAction-root":{
        minWidth: 0,
        maxWidth: 250
    },
    "& .MuiSvgIcon-root":{
        fill:"tan",
        "&:hover":{
            fill:"tomato",
            fontSize:"1.8rem"
        }
    }
 },
});
export default function Footer() {
    const classes=  useStyle();
    return (
        
        <BottomNavigation width="auto" style={{background: "#222"}} >
            <BottomNavigationAction className={classes.root} onClick={() => window.open("https://github.com/Lavish0202")}
            style={{padding:0}}
            icon={<GitHub/>}
            />
             <BottomNavigationAction className={classes.root} onClick={() => window.open("https://www.linkedin.com/in/lavish-mehta-050113168/")}
            style={{padding:0}}
            icon={<LinkedIn/>}
            />
             <BottomNavigationAction className={classes.root} onClick={() => window.open("https://www.facebook.com/lavish.mehta.12")}
            style={{padding:0}}
            icon={<Facebook/>}
            />
        </BottomNavigation >
        
    )
}
 