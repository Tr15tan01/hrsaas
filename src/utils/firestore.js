import { getFirestore } from "firebase/firestore"
import { doc, getDoc } from "firebase/firestore";
// import { collection, addDoc } from "firebase/firestore";
import { firestore } from "./firebase";

export const db = getFirestore();


export const readFile = async () => {
    // const docRef = doc(db, "users", "SF");
    const docRef = doc(db, "users", "QNtXO5yc9BPNKwZJurS2BBRxQEH2");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        console.log('the name is', docSnap.data().displayName)
    } else {
        // doc.data() will be undefined in this case
        // console.log("No such document!");
    }
}

// export const writeFile = async () => {
//     const focRef = doc(db, "users", "CeFQjDORphqIwM74WDZM")
//     const docRef = await addDoc(collection(focRef, "tkemali"), {
//         name: "iovar",
//         age: "fucker"
//     })
//     console.log('written', docRef)

// }

// writeFile()

export const addCollection = async (id) => {
    const docRef = await firestore.collection(`users/${id}/services`)
    await docRef.add({ name: 'First Service' })
    console.log('docRef is', docRef)
}

// addCollection()