import React, { createContext, useEffect } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }
  const signInWithFacebook = () => {
    return signInWithPopup(auth, facebookProvider);
  }
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile)
  }
  
  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })
    return () => unSubscribe();
  }, [])
  
  const authInfo = {
     user, 
     signUp,
     signIn,
     signInWithGoogle,
     signInWithFacebook,
     updateUserProfile};

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default UserContext;