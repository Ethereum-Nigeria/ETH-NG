import { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Input from './input'
import Button from './button'
import TextArea  from './text-area'
import { ContactContext } from '../../contexts/contact-context'

const Form = () => {
  const history = useHistory()
  const { addUserDetails } = useContext(ContactContext)
  const initialFormState = {
    name: '',
    email: '',
    message: '',
  }

  const [ formEntry, setFormEntry ] = useState(initialFormState)

  const { name, email, message } = formEntry 

  const handleChange = (e) => {
    const { value, name } = e.target
    setFormEntry(formEntry => ({...formEntry, [name]: value}))
  }

  
  
  const [formErrors, setFormErrors ] = useState([])
  const [ requestError, setRequestError ] = useState('')
  
  const endPoint = '/contact'  

  const handleSubmit = async e => {
    
    e.preventDefault()
    addUserDetails(formEntry)

    try {
      const { data: responseData }= await axios.post(endPoint, formEntry)
      const { validationError } = responseData
      console.log(validationError)

      const { errors } = responseData
      setFormErrors(errors) 
      console.log(formErrors)
      if(!validationError) {
        setFormEntry(initialFormState)
        history.push('/home')
      }
      
    } catch (err) {
      setRequestError(err)
    }
  }
  
  return (
    <>
      <form onSubmit={ handleSubmit }> 

        <h1>Contact Us</h1>
       
        { formErrors && formErrors.length > 3 ? <small>All fields are required</small>  : (
          <ul>       
          {formErrors && formErrors.map((error, index) => {
            
            const {msg, param} = error
            if(param === 'name' || param === 'email' || param === 'message') {
              return <small key={index} > { msg }</small>
            } return ''
          } )}
          </ul>
        )}
        { requestError ? <small> {requestError.message } </small> : null}
        <Input type='text' placeholder='Enter name'  name='name' onChange={ handleChange } value={name} />
        <Input  type='text' placeholder='Enter email' name='email' onChange={ handleChange } value={email} />
        <TextArea value={message} name='message' placeholder='Leave message...' onChange={handleChange} />
        <Button  placeholder='Submit' />
      </form>
    </>
  )
}

export default Form
