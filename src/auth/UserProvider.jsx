import { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase/Credentials';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getUser } from '../firebase/UserController';


export const AppContext = createContext();

/**
 * The UserProvider function creates and manages the global application context.
 * @param {children} param0 
 * @returns 
 */

export default function UserProvider({ children }) {

    const [ userSession, setUserSession ] = useState(false);

    
    useEffect(() => {
    
        const stateChange = onAuthStateChanged(auth, (userFirebase) => {
            if(userFirebase) {
              if(!userSession){
                getUser(userFirebase.uid)
                    .then(userData =>setUserSession(userData) )
              }
            }else {
                setUserSession(null)
            }
        })  

        return ()=> stateChange();

    }, [userSession]);

    const registerUser = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const login = (email, password) =>
        signInWithEmailAndPassword(auth, email, password);

    const logOutUSer = () => signOut(auth);
    


    return (
        <AppContext.Provider value={{ userSession, setUserSession, registerUser, login, logOutUSer }}>
            { children }
        </AppContext.Provider>
    )
}
