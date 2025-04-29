import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvide = ({ children }) => {
    const [ user, setUser ] = useState(null);

    // Function to update user data
    const updateUser = (userData) => {
        setUser(userData);
    };

    // function to Clear user Data 
    const clearUser = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider
          value={{
            user,
            updateUser,
            clearUser,
          }}
        > 
         {children}
        </UserContext.Provider>
    );
}

export default UserProvide;