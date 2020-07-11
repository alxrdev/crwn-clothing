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

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// make a google provider and allow the user to select
// a google account on login
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
