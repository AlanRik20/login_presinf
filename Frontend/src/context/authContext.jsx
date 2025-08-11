import React, { createContext, useContext, useState, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from "js-cookie";
import instance from "../api/axios";
export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            // console.log(error.response)
            setErrors(error.response.data);

        }
    };

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);

            // Guardar el token en cookies
            Cookies.set('token', res.data.token, { expires: 1 }); // 1 día

            // Guardar el usuario 
            setUser(res.data.user || null);
            setIsAuthenticated(true);
            console.log(user)
        } catch (error) {
            if (Array.isArray(error.response?.data)) {
                return setErrors(error.response.data);
            }
            setErrors([error.response?.data?.message || "Error en inicio de sesión"]);
        }
    };
    const logout = async () => {
  try {
    await instance.post('/logout'); // con withCredentials ya activado
    setUser(null);
    setIsAuthenticated(false);
  } catch (err) {
    console.error(err);
  }
};

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([])
            }, 5000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [errors])

    useEffect(() => {
        const checkLogin = async () => {
            const cookies = Cookies.get();
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                // console.log(res);
                if (!res.data) return setIsAuthenticated(false);
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setLoading(false);
            }
        };
        checkLogin();
    }, []);


    return (
        <authContext.Provider value={{
            signUp,
            signIn,
            logout,
            loading,
            user,
            isAuthenticated,
            errors,
        }}>
            {children}
        </authContext.Provider>
    );
};
