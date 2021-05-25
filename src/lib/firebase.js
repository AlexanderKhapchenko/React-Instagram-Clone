import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyCz9arJR0A6uHaagAPUDgXtD13l7PzgZQ0',
	authDomain: 'instagram-afox.firebaseapp.com',
	projectId: 'instagram-afox',
	storageBucket: 'instagram-afox.appspot.com',
	messagingSenderId: '812254419461',
	appId: '1:812254419461:web:e3c599b0380474a6559a6c'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
