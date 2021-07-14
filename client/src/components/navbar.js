import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ToggleContext } from '../contexts/toggle-context'

import Hamburger from './hamburger'


const Navbar = () => {
  const { toggleNav, isNavToggle } = useContext(ToggleContext)


  return (
    <>
      <nav className={isNavToggle ? 'show-bar' : 'hide-bar'}> 
        <ul className='navlinks'> 
          
          <li><NavLink to='/' className='link' >Home</NavLink> </li>
          <li><NavLink to='/about' className='link' >About</NavLink> </li>
          <li><NavLink to='/contact' className='link' >Contact</NavLink> </li>
        </ul>
      </nav>
      <Hamburger toggleNav={toggleNav} />
    </>
  )
}

export default Navbar
