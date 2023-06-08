/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const goggleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [ user, setUser]=useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoggle = () => {
        setLoading(true);
        return signInWithPopup(auth, goggleProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if(currentUser){
                axios.post("http://localhost:5000/jwt",{email: currentUser.email})
                .then(data=>{
                     localStorage.setItem("access-token", data.data.token);
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
         
            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, []);

    const authInfo = {
        user,
        createUser,
        signInUser,
        signInWithGoggle,
        logOut,
        loading
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;