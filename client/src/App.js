import Main from './components/main'
import ToggleContextProvider from './contexts/toggle-context';
import ContactContextProvider from './contexts/contact-context';

function App() {
  return (
    <div className="App">
      
        <ToggleContextProvider>
          <ContactContextProvider>
            <Main />  
          </ContactContextProvider>
        </ToggleContextProvider>
      
    </div>
  )
}

export default App;
