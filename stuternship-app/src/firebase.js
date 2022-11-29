// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	sendPasswordResetEmail
} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyC6MTBHyRuryYMhiTGWq8bhXsBQHeGTaTg",
	authDomain: "stuternship.firebaseapp.com",
	projectId: "stuternship",
	storageBucket: "stuternship.appspot.com",
	messagingSenderId: "904190730472",
	appId: "1:904190730472:web:a211399e2e917c2b98a95d",
	measurementId: "G-1MBRVWJ0GC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export async function signUp(email, password) {
	return createUserWithEmailAndPassword(auth, email, password);
}

export function googleSignIn() {
	const googleAuthProvider = new GoogleAuthProvider();
	return signInWithPopup(auth, googleAuthProvider);
}

export function logIn(email, password) {
	console.log(email, password);
	return signInWithEmailAndPassword(auth, email, password);
}
export function logOut() {
	return signOut(auth);
}
export function forgotPassword(email) {
	return sendPasswordResetEmail(auth, email);
}

onAuthStateChanged(auth, (currentUser) => {
	console.log(currentUser);
});

export default app;