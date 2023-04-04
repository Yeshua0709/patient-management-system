import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIvGiRx7kutyVNnvnyI0touCKWyNlbwjU",
  authDomain: "next-patient-management-system.firebaseapp.com",
  projectId: "next-patient-management-system",
  storageBucket: "next-patient-management-system.appspot.com",
  messagingSenderId: "604933105731",
  appId: "1:604933105731:web:2a7c1e44f060a98c32ccf6"
}

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)