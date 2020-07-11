import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyBF-LE9cRxnjEDGmkbL35dQGAV2527wTvk",
  authDomain: "crwn-db-88bbb.firebaseapp.com",
  databaseURL: "https://crwn-db-88bbb.firebaseio.com",
  projectId: "crwn-db-88bbb",
  storageBucket: "crwn-db-88bbb.appspot.com",
  messagingSenderId: "1053086644079",
  appId: "1:1053086644079:web:a2239827306b634088da9a"
}

export const createUserProfileDocument = async (userAuth: firebase.User | null, additionalData?: Object) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  // if the user don't exists, store the user in the database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (err) {
      console.log('error creating user', err.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// make a google provider and allow the user to select
// a google account on login
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
