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
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// export const signInWithGoogle = async () => {
//   try {
const provider = new firebase.auth.GoogleAuthProvider();
//     await firebase.auth().signInWithPopup(provider);
//   } catch (error) {
//     alert(error.message);
//   }
// };
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
// firebase 6.0.2
// firebase 8.5.4
// npm i firebase@6.0.2
