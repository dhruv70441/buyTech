import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Context
const AuthContext = createContext();

// Context Provider Component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate(); // Import useNavigate for redirection

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setUser({ loggedIn: true });
        }
    }, []);

    const login = (token) => {
        localStorage.setItem("token", token);
        setUser({ loggedIn: true });
        navigate("/dashboard"); // Redirect after login
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/login"); // Redirect to login page after logout
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
