import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) =>{
    const [user, setUser] = React.useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
// This code defines a UserContextProvider component that uses the UserContext to provide user state and a function to update it to its children.