import React,{useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
AppBar, Toolbar ,ListItem , IconButton ,Avatar ,ListItemText , Divider ,List , Typography ,Box, ListItemIcon} from '@material-ui/core';
import {
    Home, Apps ,ContactMail , MenuOpen , AssignmentInd, 
} from '@material-ui/icons';
import avatar from '../Avatar.jpg'
import MobileMenu from '@material-ui/core/Drawer';
import {Link} from 'react-router-dom';
import Footer from './Footer';


//CSS styling
const useStyle= makeStyles(theme=>({
    menuSlider:{
        width: 250,
        height:"100%",
        background: '#511'
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width:theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem:{
        color: "#fcb39d"
    }
}));

const menuItems=[{
    listicon:<Home/>,
    listtext: "Home",
    listpath: "/"
},
{
    listicon:<AssignmentInd/>,
    listtext: "Resume",
    listpath: "/resume"
    },
{
    listicon:<Apps/>,
    listtext: "My Projects",
    listpath:"/projects"
},
{
    listicon:<ContactMail/>,
    listtext: "Contact Me",
    listpath: "/contact"
            },
]

const Navbar = () => {
    const [state, setstate]= useState({
        right:false
    });
    const toggleSlider=
    ((slider,open)=>()=>{setstate({...state,[slider]: open});
    });


    const classes= useStyle();
    const sideList= slider=>(
        <Box className={classes.menuSlider} component='div' onClick={toggleSlider(slider,false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Lavish Mehta" />
            <Divider/>
            <List>
                {menuItems.map((item,key)=>(
            <ListItem button key={key} component={Link} to={item.listpath}>
                <ListItemIcon className={classes.listItem}>
                    {item.listicon}
                </ListItemIcon>
                <ListItemText  className={classes.listItem} primary={item.listtext}/>
            </ListItem>
            ))}
            </List>

        </Box>

    );
    return (
        
        <>
        <Box component="nav">
            <AppBar position="static" style={{ background: '#040624'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right",true)}>
                    <MenuOpen style={{color: 'tomato', height: '60px'}}/>
                    
                    </IconButton>
                    <Typography variant="h5" style={{color: 'tan'}}onClick={toggleSlider("right",true)}>
                            Main Menu
                    </Typography>
                    <MobileMenu anchor="right" open={state.right} onClose={toggleSlider("right",false)}>
                        {sideList("right")}
                        <Footer/>
                    </MobileMenu>
                    
                </Toolbar>
         </AppBar>
        </Box>
        </>

                    );
};

export default Navbar
