import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
initializeAuthentication();

const useFirebase=()=>{
    const  [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true)
    const auth = getAuth();

    const signInUsingGoogle=()=>{
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .finally(()=>setIsLoading(false))
    }

    //Observe user state change
    useEffect(()=>{
       const unsubscribed= onAuthStateChanged(auth,user=>{
            if(user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setIsLoading(false);

        });
        return ()=>unsubscribed;
    },[])
    const logOut=()=>{
        setIsLoading(true)
        signOut(auth)
        .then(()=>{})
        .finally(()=>setIsLoading(false))
    }

    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };
    
      const handleUserLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
            console.log(result.user);
          })
          .catch((error) => {
            const errorMessage = error.message;
          });
      };

    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleUserRegister,
        handleUserLogin,
       

    }
}

export default useFirebase;