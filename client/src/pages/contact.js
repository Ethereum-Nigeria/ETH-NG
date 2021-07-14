import Form from '../components/form/form'
import contact from './contact.png'

const Contact = () => {
  return (
    <>
      <section className='contact'>
        <div className='contact-row'>
          
          <div className='contact-left'>
            <Form className='form' />
          </div>

          <div className='contact-right'>
            <img  src={contact} alt='contact' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
