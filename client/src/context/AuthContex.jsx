import { createContext, useEffect, useState } from "react";

//context 
const AuthContext = createContext();

//context provider component 

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            setUser({loggedIn: true});
        }
    },[])

    const login = (token) => {
        localStorage.setItem("token", token);
        setUser({loggedIn: true});
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
