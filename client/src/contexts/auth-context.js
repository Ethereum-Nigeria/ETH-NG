import { createContext, useState } from 'react'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
  const [userData, setUserData ] = useState([])
  const [ userState, setUserState ] = useState({
    isAuthenticated: false,
    name: '',
    email: ''

  })

  const addData = formEntry => {
    setUserData([...userData, formEntry])
  }

  const enableAuth = payload => {
      setUserState({
          isAuthenticated: true,
          name: payload.name,
          email: payload.email
      })
      console.log(payload)
  }
  console.log(userState)



  return (
    <AuthContext.Provider value={{ addData, userState, enableAuth }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider