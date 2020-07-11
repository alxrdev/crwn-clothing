import React, { FormEvent, ChangeEvent } from 'react'

import FormInput from '../form-input'
import CustomButton from '../custom-button'

import { signInWithGoogle } from '../../firebase/firebase.utils'

import './styles.scss'

interface Props {}

interface State {
  email: string
  password: string
}

class SignIn extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget
    this.setState({ [name]: value } as Pick<State, keyof State>)
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    this.setState({ email: '', password: '' })
  }

  render () {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <FormInput
            type='password'
            name='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />

          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={ signInWithGoogle }  isGoogleSignIn>Sign in with google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
