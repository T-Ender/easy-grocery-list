import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';
const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, signUp };
  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
