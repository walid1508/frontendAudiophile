import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get('/profile').then(({data}) => {
            setUser(data);
            setIsLoading(false);
        }).catch((error) => {
            console.log(error);
            setUser(null);
            setIsLoading(false);
        });
    }, []);

    const logout = async () => {
        try {
            await axios.get('/logout');
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <UserContext.Provider value={{user, setUser, logout, isLoading}}>
            {children}
        </UserContext.Provider>
    );
}