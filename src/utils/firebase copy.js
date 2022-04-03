import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { getFirestore, doc, setDoc, getDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { getStorage, ref, uploadBytes } from "firebase/storage";



const storage = getStorage();

// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBQVvCM-Dkwi0tD8gceSE-Euy02YoUg8Nk",
    authDomain: "hrsoft-3592c.firebaseapp.com",
    projectId: "hrsoft-3592c",
    storageBucket: "hrsoft-3592c.appspot.com",
    messagingSenderId: "839893564865",
    appId: "1:839893564865:web:c2ba258eb6610932564340"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()


export const addCollection = async (id) => {
    const docRef = firestore.collection(`users/${id}/services`)
    const snapShot = await docRef.get()
    if (!snapShot.exists) {
        try {
            await docRef.add({ name: 'First Service' })
        } catch (err) {
            console.log(err)
        }
    }
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    // const docRef = firestore.collection(`users/${userAuth.uid}/services`)
    console.log('userrefid id id', userRef.id)

    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            addCollection(userRef.id)
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    // console.log(snapShot)
    return userRef;
}



export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default app;


//test

export const addToArray = async (name, email, address, age, user) => {

    const washingtonRef = await doc(firestore, "users", user);

    // Atomically add a new region to the "regions" array field.
    await updateDoc(washingtonRef, {
        employees: arrayUnion({ name: name, email: email, address: address, age: age })
    });
}

export const uploadImage = (file, fileName) => {
    // const storageRef = ref(storage, "/images/file" + Math.random() * 10);
    const storageRef = ref(storage, "/images/" + fileName)

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, file).then((snapshot) => {
        console.log('Uploaded a blob or file!', snapshot);
    });
}