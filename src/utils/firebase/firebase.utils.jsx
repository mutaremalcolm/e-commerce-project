import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
        } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  writeBatch,
  query,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBtr8UENBMkOIdQdAjN61DWZeGYG7-bcNM",
    authDomain: "e-commerce-db-e30fc.firebaseapp.com",
    projectId: "e-commerce-db-e30fc",
    storageBucket: "e-commerce-db-e30fc.appspot.com",
    messagingSenderId: "219317751471",
    appId: "1:219317751471:web:9e56e9dd0a4c251e7cce5a"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => 
    signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = collection(db, collectionKey);
      const batch = writeBatch(db);
      
        objectsToAdd.forEach((object) => {
        const docRef =  doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
      });

      await batch.commit(); 
    
  };  

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(docSnapshot => docSnapshot.data());
    
  }

  export const createUserDocumentFromAuth = async (
      userAuth, additionalInformation = {}
    ) => {
      if (!userAuth) return;

      const userDocRef = doc(db, 'users', userAuth.uid);

      const userSnapShot = await getDoc(userDocRef);
      
      if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
          });
        } catch (error) {
          alert('error creating the user', error.message);
        }
        }

      return userDocRef;
      
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

      return await createUserWithEmailAndPassword(auth, email, password);   
  };
 
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

      return await signInWithEmailAndPassword(auth, email, password)   
  };

  export const signOutUser = async () => await signOut(auth);  {
    // alert('Sign-out successful!');
  };


  export const onAuthStateChangedListener = (callback) =>   
    onAuthStateChanged(auth, callback);

   
  
 