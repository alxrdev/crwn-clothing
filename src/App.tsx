import React from 'react'
import { Switch, Route } from 'react-router-dom'
import firebase, { auth, createUserProfileDocument } from './firebase/firebase.utils'
import User from './entities/user'

import './App.css'

import Header from './components/header'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up'

interface Props {}

interface State {
  currentUser: User | null
}

class App extends React.Component<Props, State> {
  private unsubscribeFromAuth: firebase.Unsubscribe | null = null

  constructor (props: Props) {
    super(props)

    this.state = {
      currentUser: null
    }
  }

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef?.onSnapshot(snapShot => {
          const data = snapShot.data() as User

          this.setState({
            currentUser: {
              id: snapShot.id,
              displayName: data.displayName,
              email: data.email,
              createdAt: data.createdAt
            }
          }, () => console.log(this.state))
        })
      } else {
        this.setState({ currentUser: userAuth })
      }
    })
  }

  componentWillUnmount () {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App
