import React, { ChangeEvent, FormEvent } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import {
  SignUpContainer,
  Title
} from './styles'

interface Props {}

interface State {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}

export default class SignUp extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value } as Pick<State, keyof State>)
  }

  handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    const { displayName, email, password, confirmPassword } = this.state

    return (
      <SignUpContainer>
        <Title>I do not have an account</Title>
        <span>Sign up with your email and password</span>

        <form
          className='sign-up-form'
          onSubmit={this.handleSubmit}
        >
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            handleChange={this.handleChange}
            label='Display Name'
            required
          />

          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}
