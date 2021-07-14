import { useContext } from "react"
import { Link } from "react-router-dom"

import Logo from "./logo"
import About from '../pages/about'
import Contact from "../pages/contact"
import { AuthContext } from "../contexts/auth-context"


const Section = () => {
  const { userState } = useContext(AuthContext)
  const { isAuthenticated, name } = userState 



  return (
    <>
      <section className='header' >
        <div className='container'>
          <Logo />

          <div className='header-text'>
            { isAuthenticated ? <h3>{ `Welcome ${name}`}</h3>: null}
            <h1>Bridging the gap to building on Ethereum and web3 accessiblity</h1>

            <span className='span'></span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam mollitia, error quod quae adipisci blanditiis sed itaque! Totam, earum, doloribus inventore molestias, porro quia distinctio voluptatem error quibusdam dicta quo? </p>

            <Link className='common-btn' to='/signup' >Get Started</Link>
    

          </div>
        </div>
      </section>
      <About />
      <Contact />

    </>
  )
}

export default Section
