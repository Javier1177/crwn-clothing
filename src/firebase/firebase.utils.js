import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCXnW6ujN3-ylOugYgegjbSx34DznXdnRQ',
  authDomain: 'crwn-db1177.firebaseapp.com',
  projectId: 'crwn-db1177',
  storageBucket: 'crwn-db1177.appspot.com',
  messagingSenderId: '529698446628',
  appId: '1:529698446628:web:00b66e45eba4fdac0127b1',
  measurementId: 'G-GRTP190NP7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
