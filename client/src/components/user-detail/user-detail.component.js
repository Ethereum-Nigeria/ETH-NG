import { useContext } from 'react'
import { DashboardStyle, Content, ShowContent, HeadContent, ContentBody, ErrorDisplay } from './user-detail.style'
import Loading from '../loading/loading.component'
import { useFetch } from '../../custom/useFetch'
import { AuthContext } from '../../contexts/auth-context'
import { useHistory } from 'react-router-dom'


const UserDetail = () => {

  const { userState, logoutUser } = useContext(AuthContext)
  const {name, email, createdAt } = userState
  const history = useHistory()

  const url = '/api/user'
  const  [ resultState ] = useFetch(url) 


  const { isLoading, fetchError } = resultState

  const handleLogout = () => {
    logoutUser({
      isAuthenticated: false,
      name: '',
      email: '',
      createdAt: ''
    })
    history.push('/home')
  }

  return (
    <DashboardStyle>
      { fetchError ? (
        <ErrorDisplay>
          <p>{ fetchError.message }</p>
        </ErrorDisplay>
      ) : (
        <Content>
          { isLoading ? <Loading />  : (
            <>
              <ShowContent>
                <HeadContent>
                  <h2>Dashboard</h2>
                  { name ? <h2> Hey { name } </h2> : null}
                </HeadContent>
                <ContentBody>
                  <h3>Personal Details</h3>
                  <ul>

                    

                    <li>  
                      { email ? (<> <p>Email</p>  <p><strong> { email }</strong>  </p></>) : null}
                    </li>
                    
                    <li>  
                      { createdAt ? (<> <p>Date Joined</p> <p><strong>{ new Date(createdAt).toDateString() } </strong> </p> </>) : null}
                    </li>
                    
                    <li onClick={ handleLogout }>   
                      <p>Logout</p>
                    </li>

                  </ul>
                 
                 
                </ContentBody>
              </ShowContent>
              
            </>
          ) }
               
      </Content>
      )}
      
    </DashboardStyle>
  )
}

export default UserDetail
