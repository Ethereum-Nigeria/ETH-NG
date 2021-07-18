import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/auth-context'
import { ToggleContext } from '../contexts/toggle-context'

import Hamburger from './hamburger'


const Navbar = () => {
  const { toggleNav, isNavToggle } = useContext(ToggleContext)
  const { userState } = useContext(AuthContext)

  console.log(userState)
  

  return (
    <>
      <nav className={isNavToggle ? 'show-bar' : 'hide-bar'}> 
        <ul className='navlinks'> 
          
          <li><NavLink to='/home' className='link' >Home</NavLink> </li>
          <li><NavLink to='/about' className='link' >About</NavLink> </li>
          <li><NavLink to='/contact' className='link' >Contact</NavLink> </li>
        </ul>
      </nav>
      <Hamburger toggleNav={toggleNav} />
    </>
  )
}

export default Navbar
