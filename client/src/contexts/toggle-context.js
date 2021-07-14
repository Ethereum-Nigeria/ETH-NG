import { createContext, useState } from 'react'

export const ToggleContext = createContext()

const ToggleContextProvider = ({ children }) => {
  const [isNavToggle, setIsNavToggle] = useState(false)

  const toggleNav = () => {
    setIsNavToggle(!isNavToggle)
  }

  return (
    <ToggleContext.Provider value={{ toggleNav, isNavToggle }} >
      { children }
    </ToggleContext.Provider>

  )

}

export default ToggleContextProvider