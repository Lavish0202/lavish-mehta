import React from 'react';
import './App.css';
import Home from './components';
import CssBaseline from '@material-ui/core/CssBaseline'
import Resume from './components/Resume';
import {Route} from 'react-router-dom'
import Project from './components/Project';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar'

function App() {
  return (
    <>
   <CssBaseline/>
   <Navbar/>
   <Route exact path="/" component={Home} />
   <Route path="/resume" component={Resume} />
   <Route path="/projects" component={Project} />
   <Route path="/contact" component={Contacts} />

   </>
  );
}

export default App;
