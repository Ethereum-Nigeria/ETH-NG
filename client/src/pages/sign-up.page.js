import React from 'react'
import styled from 'styled-components'
import SignUp from '../components/sign-up/sign-up.component'

const Container = styled.div`
  margin-top: 100px;
  margin-left: 100px;
  height: 60vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
   
`

const SignupPage = () => {
  return (
    <div>
      <Container>

        <SignUp />
      </Container>
    </div>
  )
}

export default SignupPage
