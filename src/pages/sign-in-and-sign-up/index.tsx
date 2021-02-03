import React from 'react'

import SignIn from '../../components/sign-in'
import SignUp from '../../components/sign-up'

import { SignInSignUpContainer } from './styles'

const SignInAndSignUpPage = () => (
  <SignInSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInSignUpContainer>
)

export default SignInAndSignUpPage
