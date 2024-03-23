import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if(!user){
            axios.get('/profile').then(({data}) => {
                setUser(data);
            }).catch((error) => {
                console.log(error);
                setUser(null);
            });
        }
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
        <UserContext.Provider value={{user, setUser, logout}}>
            {children}
        </UserContext.Provider>
    );
}