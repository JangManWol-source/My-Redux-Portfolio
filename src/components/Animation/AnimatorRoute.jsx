import React from 'react'
import Skills from '../../components/Skills/Skills'
import Projects from '../../components/Projects/Project'
import Contacts from '../../components/Contacts/Contact'
import About from '../../components/About/About'
import Home from '../../components/Home/Home'
import {AnimatePresence} from 'framer-motion'
import { Switch, Route, useLocation } from 'react-router-dom'
const AnimatorRoute = () => {
    const location = useLocation()
  return (
   <AnimatePresence>
     <Switch location={location} key={location.pathname}>
    <Route path={'/'} exact>
      <Home />
    </Route>
    <Route path={'/skills/'}>
      <Skills />
    </Route>
    <Route path={'/projects/'}>
      <Projects />
    </Route>
    <Route path={'/contacts/'}>
      <Contacts />
    </Route>
    <Route path={'/about/'}>
      <About />
    </Route>
  </Switch>
   </AnimatePresence>
  )
}

export default AnimatorRoute