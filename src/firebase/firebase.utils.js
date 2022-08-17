import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/messaging";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyAUuGeXfKTO54SU5UnPfEMoN_Fd5pn7x1w",
  authDomain: "zod-clothing.firebaseapp.com",
  projectId: "zod-clothing",
  storageBucket: "zod-clothing.appspot.com",
  messagingSenderId: "95207162700",
  appId: "1:95207162700:web:97b5a3e5667d321ce845e9",
  measurementId: "G-JEZQLJNY39",
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
// firebase 6.0.2
// firebase 8.5.4
// npm i firebase@6.0.2
