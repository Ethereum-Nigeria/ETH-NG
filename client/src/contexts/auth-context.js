import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {

  const [userData, setUserData] = useState([]);
  const [userState, setUserState] = useState({
    name: "",
    email: "",
  });

  const addData = (formEntry) => {
    setUserData([...userData, formEntry]);
  };

  const enableAuth = (payload) => {
    setUserState(payload);
  };
  console.log(userState);

  const logoutUser = async (payload) => {
    try {
      await axios.get('/api/user/logout')
      setUserState(payload)
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <AuthContext.Provider value={{ addData, userState, enableAuth, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
