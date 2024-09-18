import React, { createContext, ReactNode, useContext, useState } from "react";

interface UserDetailsContextType {
  userDetails: [string, string];
  login: (userDetails: string) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

const UserDetailsContext = createContext<UserDetailsContextType | null>(null);

function UserDetailsProvider({ children }: { children: ReactNode }) {
  const [userDetails, setUserDetails] = useState<[string, string]>(["", ""]);

  function login(userDetails: string) {
    setUserDetails([userDetails, ""]);
  }

  function setToken(token: string) {
    setUserDetails([userDetails[0], token]);
  }

  function logout() {
    setUserDetails(["", ""]);
  }

  return (
    <UserDetailsContext.Provider
      value={{ userDetails, login, setToken, logout }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
}

function useUserDetails() {
  const context = useContext(UserDetailsContext);

  if (!context) {
    throw new Error(
      "useUserDetails can only be used from inside of a UserDetailsProvider!"
    );
  }
  return context;
}

export { UserDetailsProvider, useUserDetails };
