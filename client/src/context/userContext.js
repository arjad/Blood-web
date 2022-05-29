import { createContext, useContext, useState } from "react";

export const userContext = createContext({
  user: null,
  logInc: () => {},
  logOut: () => {},
});

const USER = { name: "Guest", isGuestUser: true };

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(USER);

  function logInc(username) {
    setUser({ isGuestUser: false, name: username });
  }

  function logOut() {
    setUser(USER);
  }

  return (
    <userContext.Provider value={{ user, logInc, logOut }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  const { user, logInc, logOut } = useContext(userContext);

  return { user, logInc, logOut };
}
