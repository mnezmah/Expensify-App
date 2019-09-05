<<<<<<< HEAD
import { firebase, googleAuthProvider } from '../firebase/firebase'


export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
=======
import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ( {
  type: 'LOGIN',
  uid
});

export const startLogin = () => { 
  return () => {firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
>>>>>>> 314442f1bb91add33cd0a720d0a80d9dd71895d8
};