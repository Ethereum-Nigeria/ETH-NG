import { useState, useContext } from 'react'
import {  useHistory, Link } from 'react-router-dom'
import axios from 'axios'

import Input from './input'
import Button from './button'
import { AuthContext } from '../../contexts/auth-context'
import { FormContainer, Alternative } from './sign-in.style'


axios.defaults.withCredentials = true


const initialFormState = {
  email: '',
  password: '',
}

const SignIn = () => {
  const { addData, enableAuth } = useContext(AuthContext)
  const [ formEntry, setFormEntry ] = useState(initialFormState)
  const [ requestError, setRequestError ] = useState(null)

  const { email, password } = formEntry 

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
    const endPoint = '/user/auth'
    try {
      const result = await axios.post(endPoint, formEntry)

      console.log(result)
      const { data: { validationErrors, name, email, msg } } = result
      console.log(msg)
      console.log(requestError)
       console.log(validationErrors)

      setFormErrors(validationErrors)
      setRequestError(msg)
      console.log(requestError)
      
      if(!validationErrors  && !msg) {
        setFormEntry(initialFormState) 
        enableAuth({
          name,
          email,
          isAuthenticated: true
        })
        history.push('/user/dashboard')
      }
    } catch(err) {
        // console.log(err.message)
        
      return setRequestError(`Invalid login credentials: ${err.message}`)
      
    }
  }
  return (
    <> 
      <FormContainer>
        <form onSubmit={ handleSubmit }> 

        <h1>Sign In</h1>
        
          { formErrors && formErrors.length === 4 ? <small className='warning'> All fields are required</small>  : (
            
            <ul>       
              {formErrors && formErrors.map((error, index) => {
            
                const {msg, param} = error
                if( param === 'email' || param === 'password'  ) {
                  return <small key={index} className='warning' > { msg }</small>
                } return ''
              } )}
            </ul>
          )}
          { requestError !== '' ? <small>{ requestError }</small> : null}
          <Input  type='text' placeholder='Enter Email' name='email'  onChange={ handleChange } value={email} />
          <Input  type='text' placeholder='Enter Password' name='password'  onChange={ handleChange } value={password} />
          
          <Button  value='Sign In' />


        </form>
        <Alternative>
          <p>Don't have an account?</p> 
          <Link to='/user/signup'>Sign Up</Link>
        </Alternative>
      </FormContainer>
      
       
    </>
  )
}

export default SignIn
