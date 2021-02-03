import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { Collection } from '../redux/shop/types'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

firebase.initializeApp(config)

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

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any[] | null) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  objectsToAdd?.forEach((obj: Object) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// make a google provider and allow the user to select
// a google account on login
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
