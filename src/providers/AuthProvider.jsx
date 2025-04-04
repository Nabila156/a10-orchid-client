import { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        setLoading(true);
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user);
            })
            .catch((error) => {
                toast.error('Error during Google Sign-In:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userLogout=()=>{
        setLoading(true);
        return(signOut);
    }

    const userInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        handleGoogleSignIn,
        userLogin,
        userLogout

    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;