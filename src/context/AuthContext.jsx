import React, { createContext, useState } from 'react';


export const AuthContext = createContext({
  currentUser: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const login = (user) => {
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const contextValue = {
    currentUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};











// import React, { createContext, useState } from 'react';

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);

//   const login = (user) => {
//     setCurrentUser(user);
//   };

//   const logout = () => {
//     setCurrentUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ currentUser, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;











// import React, { createContext, useState, useContext } from "react";


// const AuthContext = createContext({
//   currentUser: null,
//   auth: false,
//   setAuth: () => {},
//   setCurrentUser: () => {},
//   login: () => {},
//   logout: () => {},
// });


// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [auth, setAuth] = useState(false);

//   const login = (user) => {
//     setCurrentUser(user);
//     setAuth(true); 
//   };

//   const logout = () => {
//     setCurrentUser(null);
//     setAuth(false); 
//   };

  
//   const contextValue = {
//     currentUser,
//     auth,
//     setAuth,
//     setCurrentUser,
//     login,  
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={contextValue}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// export const useAuth = () => useContext(AuthContext);
// ``

