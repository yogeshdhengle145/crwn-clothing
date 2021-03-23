import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBmmtNsFuf_kXl5JJ76HpDLFI_xP-g715o",
	authDomain: "crwn-db-37c0e.firebaseapp.com",
	projectId: "crwn-db-37c0e",
	storageBucket: "crwn-db-37c0e.appspot.com",
	messagingSenderId: "704530407386",
	appId: "1:704530407386:web:f889955dbe23d405b22ae3",
	measurementId: "G-CXNV1X7XEV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;