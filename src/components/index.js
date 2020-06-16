import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Particles from 'react-particles-js';
import {makeStyles} from '@material-ui/core/styles'

const useStyle=makeStyles({
ParticleContainer:{
    position:"absolute",
    opacity: "0.5"
}
})

const Home = () => {
    const classes= useStyle();
    return (
        <div>
        <Navbar/> 
        <Header/>
        <Particles canvasClassName={classes.ParticleContainer}
        params={{
            particles:{
                number:{
                value:40,
                density:{
                    enable:true,
                    value_area:900
                    }
                },
                shape:{
                    type:"circle",
                    stroke:{
                        width: 1,
                        color: "#fffff"
                    }
                },
                size:{
                    value: 5,
                    random:true,
                    anim:{
                        enable:true,
                        speed:6,
                        size_min: 0.1,
                        sync:false
                    }
                },
                opacity:{
                    value:1,
                    random:true,
                    anim:{
                        enable:true,
                        speed:1,
                        opacity_min:0.1,
                        sync:true
                    }
                }
        }
        }}/>
        </div>
    )
}

export default Home
