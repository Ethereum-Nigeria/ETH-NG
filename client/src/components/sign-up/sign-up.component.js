import { useState, useContext } from 'react'
import {  useHistory } from 'react-router-dom'
import axios from 'axios'

import Input from './input'
import Button from './button'
import { AuthContext } from '../../contexts/auth-context'
import { FormContainer } from './sign-up.style'

axios.defaults.withCredentials = true


const initialFormState = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () => {
  const { addData, userState, enableAuth } = useContext(AuthContext)
  const [ formEntry, setFormEntry ] = useState(initialFormState)

  const { name, email, password, confirmPassword } = formEntry 
  console.log(formEntry)

  const handleChange = e => {
    const { value, name } = e.target
    setFormEntry(formEntry => ({...formEntry, [name]: value}))
  }
  
  const [formErrors, setFormErrors ] = useState([])
  const history = useHistory()


  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    addData(formEntry)
    const endPoint = '/user/register'
    try {
      const { data: { validationErrors, name, email } } = await axios.post(endPoint, formEntry)
       console.log(validationErrors)

      setFormErrors(validationErrors)
      
      console.log(validationErrors)

      if(!validationErrors) {
        setFormEntry(initialFormState) 
        enableAuth({
          name,
          email

        })
        history.push('/')
      }
    } catch(err) {
      console.error(err)
    }
  }
  
  return (
    <> 
      <FormContainer>
        <form onSubmit={ handleSubmit }> 

        <h1>Sign up here</h1>
        
          { formErrors && formErrors.length === 4 ? <small className='warning'> All fields are required</small>  : (
            
            <ul>       
              {formErrors && formErrors.map((error, index) => {
            
                const {msg, param} = error
                if(param === 'name' || param === 'email' || param === 'password' || param === 'confirmPassword' ) {
                  return <small key={index} className='warning' > { msg }</small>
                } return ''
              } )}
            </ul>
          )}
          <Input type='text' placeholder='Enter Name'  name='name' onChange={ handleChange } value={name} autoFocus />
          <Input  type='text' placeholder='Enter Email' name='email'  onChange={ handleChange } value={email} />
          <Input  type='text' placeholder='Enter Password' name='password'  onChange={ handleChange } value={password} />
          <Input  type='text' placeholder='Confirm Password' name='confirmPassword'  onChange={ handleChange } value={confirmPassword} />
          
          <Button  value='Sign Up' />


        </form>

        
      </FormContainer>
      
       
    </>
  )
}

export default SignUp
