import React from 'react'
import styled from 'styled-components'
import UserDetail from '../components/user-detail/user-detail.component'

const Container = styled.div`
  margin-top: 120px;
  margin-left: 100px;
  height: 60vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
   
`

const UserDetailPage = () => {
  return (
    <div>
      <Container>
       <UserDetail />
      </Container>
    </div>
  )
}

export default UserDetailPage
