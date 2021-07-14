import { createContext, useState } from 'react'

export const ContactContext = createContext()

const ContactContextProvider = ({children}) => {
  const [userData, setUserData ] = useState([])

  const addUserDetails = formEntry => {
    setUserData([...userData, formEntry])
  }




  return (
    <ContactContext.Provider value={{ addUserDetails }}>
      { children }
    </ContactContext.Provider>
  )
}

export default ContactContextProvider