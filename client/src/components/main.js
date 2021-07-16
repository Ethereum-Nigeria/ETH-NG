import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './navbar'
import About from '../pages/about'
import Contact from '../pages/contact'
import SignUpPage from '../pages/sign-up.page'
import SignInPage from '../pages/sign-in.page'
import UserDetailPage from '../pages/user-detail.page'



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
          <Route exact path='/user/signup'  component={ SignUpPage } />
          <Route exact path='/user/auth'  component={ SignInPage } />
          <Route path='/user/dashboard' exact component={ UserDetailPage } />

        </Switch>
      </Router>
    </>
  )
}

export default Main
