import { createContext } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <AuthContext.Provider
        value={{
          loggedInUser: null,
          setLoggedInUser: null,
        }}
      >
        {children}
      </AuthContext.Provider>
      ;
    </>
  );
};
