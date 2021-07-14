import Main from './components/main'
import ToggleContextProvider from './contexts/toggle-context';
import ContactContextProvider from './contexts/contact-context';
import AuthContextProvider from './contexts/auth-context';

function App() {
  return (
    <div className="App">
      
        <ToggleContextProvider>
          <ContactContextProvider>
            <AuthContextProvider>
             <Main />  
            </AuthContextProvider>
          </ContactContextProvider>
        </ToggleContextProvider>
      
    </div>
  )
}

export default App;
