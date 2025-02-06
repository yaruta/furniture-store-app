import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { createContext, useContext, useEffect, useState } from "react";

/**
 * Context for authentication state management.
 */
const AuthContext = createContext();

/**
 * Custom hook to access authentication context.
 * @returns {Object} Authentication context value.
 */
export function useAuth() {
    return useContext(AuthContext);
}

/**
 * Authentication provider component that manages user authentication state.
 * @param {Object} props - React component props.
 * @param {React.ReactNode} props.children - Child components wrapped by the provider.
 * @returns {JSX.Element} Auth context provider component.
 */
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to authentication state changes.
    const unsubscribe = onAuthStateChanged(auth, initializeUser);

    return unsubscribe; // Cleanup subscription on unmount.
  }, []);

  /**
   * Handles changes in authentication state.
   * @param {Object|null} user - Firebase user object or null if logged out.
   */
  async function initializeUser(user) {
    if(user) {
        setCurrentUser({...user}); // Store user data.
        setUserLoggedIn(true);
    } else {
        setCurrentUser(null);
        setUserLoggedIn(false);
    }
    setLoading(false); // Mark loading as complete.
  }

  const value = {
    currentUser, 
    userLoggedIn,
    loading
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
