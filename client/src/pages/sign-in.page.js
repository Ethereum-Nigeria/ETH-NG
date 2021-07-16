import React from 'react'
import styled from 'styled-components'
import SignIn from '../components/sign-in/sign-in.component'

const Container = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  height: 60vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
   
`

const SignInPage = () => {
  return (
    <div>
      <Container>
        <SignIn />
      </Container>
    </div>
  )
}

export default SignInPage
