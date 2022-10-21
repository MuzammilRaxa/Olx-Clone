import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'
export const getProducts = async () => {
    const colRef = collection(db, 'items')
    try {
        const items = []
        const produts = await getDocs(colRef)
        produts.docs.forEach((doc) => {
            items.push({ ...doc.data(), id: doc.id })
        })
        console.log(items)
        return items
    } catch (error) {
        console.log(error.message)
    }
}


// export const getEachProduct = async () => {
//     const colRef = doc(db, "items", doc.id);
//     console.log("Docccccccccc", doc.id);
//     try {
//         const produts = await getDoc(colRef);
//     } catch (error) {
//         console.log(error.message);
//     }
// };





const firebaseConfig = {
    apiKey: "AIzaSyB7CnnkZwmrkZLG0CL6Jrx6MIOGvNS1Gig",
    authDomain: "resturant-project-1.firebaseapp.com",
    databaseURL: "https://resturant-project-1-default-rtdb.firebaseio.com",
    projectId: "resturant-project-1",
    storageBucket: "resturant-project-1.appspot.com",
    messagingSenderId: "323936914684",
    appId: "1:323936914684:web:339159df9a5886d6941b79"
};
initializeApp(firebaseConfig)
const db = getFirestore()


// const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig)
// const firestore = getFirestore(app)
// const storage = getFirestore(app)
// export { app, firestore, storage }

//.then catch not working in this use case but why!!

// initializeApp(firebaseConfig)
// const db = getFirestore()
// const getProducts = () => {
//     const colRef = collection(db, 'items')

//     getDocs(colRef)
//         .then((snapshot) => {
//             let items = []
//             snapshot.docs.forEach((doc) => {
//                 console.log(doc)
//                 items.push({ ...doc.data(), id: doc.id })
//             })
//             console.log(items)
//         })
//         .catch(err => {
//             console.log(err.message)
//         })
// }