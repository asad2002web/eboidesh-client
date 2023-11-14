import React, { createContext, useEffect, useState } from 'react'
import auth from './../authentication/firebase.config';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const AuthenticationContext = createContext();

const AuthContext = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);


  // Create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // Login user
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // log out 
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }

  //  State change 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }

  }, [])




  const authInformation = {
    a: "abul",
    b: "babul",
    user,
    loading,
    error,
    createUser,
    login,
    logout
  }
  return (
    <AuthenticationContext.Provider value={authInformation}>
      {children}
    </AuthenticationContext.Provider>
  )
}

export default AuthContext