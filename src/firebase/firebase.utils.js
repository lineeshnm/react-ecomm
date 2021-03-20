import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBUVo65t7Cu-Bxn5ejtcRSR9q6-ruWbWqs",
    authDomain: "prime-script-241521.firebaseapp.com",
    databaseURL: "https://prime-script-241521.firebaseio.com",
    projectId: "prime-script-241521",
    storageBucket: "prime-script-241521.appspot.com",
    messagingSenderId: "203281726906",
    appId: "1:203281726906:web:4eca570d506bb343f27183"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData})
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;