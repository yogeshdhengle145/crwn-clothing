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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`$user/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const {displayName, email} = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		}
		catch(error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
} 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;