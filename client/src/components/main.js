import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbar'
import About from '../pages/about'
import Contact from '../pages/contact'
import SignUp from '../pages/signup'


import Section from './section'

const Main = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={ Section } />
          <Route path='/about'  component={ About } />
          <Route path='/contact' component={ Contact } />
          <Route path='/signup'  component={ SignUp } />

        </Switch>
      </Router>
    </>
  )
}

export default Main
