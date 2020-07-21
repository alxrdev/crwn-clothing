import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import firebase, { auth, createUserProfileDocument } from './firebase/firebase.utils'

import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/actions'
import { User, UserActionTypes } from './redux/user/types'

import { selectCurrentUser } from './redux/user/selectors'

import Header from './components/header'
import HomePage from './pages/homepage'
import ShopPage from './pages/shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up'

import './App.css'
import { RootState } from './redux/root-reducer'

interface Props {
  setCurrentUser: (u: User | null) => UserActionTypes
  currentUser: User | null
}

interface State {}

class App extends React.Component<Props, State> {
  private unsubscribeFromAuth: firebase.Unsubscribe | null = null

  componentDidMount () {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        
        userRef?.onSnapshot(snapShot => {
          const data = snapShot.data() as User

          this.props.setCurrentUser({
            id: snapShot.id,
            displayName: data.displayName,
            email: data.email,
            createdAt: data.createdAt
          })
        })
      } else {
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount () {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth()
  }

  render () {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInAndSignUpPage />
              )}
            />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state: RootState) => ({
  currentUser: selectCurrentUser(state)
})

const mapDispatchToProps = (dispatch: Dispatch<UserActionTypes>) => ({
  setCurrentUser: (user: User | null) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
