import { Link } from "react-router-dom"

import Logo from "./logo"
import About from '../pages/about'
import Contact from "../pages/contact"


const Section = () => {
  
  return (
    <>
      <section className='header' >
        <div className='container'>
          <Logo />

          <div className='header-text'>
            <h1>Bridging the gap to building on Ethereum and web3 accessiblity</h1>

            <span className='span'></span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam mollitia, error quod quae adipisci blanditiis sed itaque! Totam, earum, doloribus inventore molestias, porro quia distinctio voluptatem error quibusdam dicta quo? </p>

            <Link className='common-btn' to='/user/signup' >Get Started</Link>
          </div>
        </div>
      </section>
      <About />
      <Contact />

    </>
  )
}

export default Section
