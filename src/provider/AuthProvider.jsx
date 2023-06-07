import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseSetup";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (results) => {
      setUser(results);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);

  const userSignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userProfileUpdate = (displayName, photoURL) =>
    updateProfile(auth.currentUser, { displayName, photoURL });

  const userSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const userSignOut = () => signOut(auth);

  const dest = {
    user,
    loading,
    userSignUp,
    userSignIn,
    userProfileUpdate,
    signInWithGoogle,
    userSignOut,
  };
  return <AuthContext.Provider value={dest}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
