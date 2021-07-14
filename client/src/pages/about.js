import { useContext } from 'react'
import { ToggleContext } from '../contexts/toggle-context'
import aboutImg from './about4.png'

const About = () => {

  const { isNavToggle } = useContext(ToggleContext)
  return (
    <>
      <section className='about'> 
        <div className='about-left'> {/* left col */}
          <img  src={aboutImg} alt='about vector' />
        </div>

        <div className='about-right'> {/* right col */}
          <div className='about-text' style={{marginRight: isNavToggle ? '80px' : '250px', transition: '.5s', wordWrap: 'break-word' }}>
            <h1>About Us</h1>
            <p>
             EthNG is the next acceleration platform seeking to raise a critical mass of web3 engineers
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
