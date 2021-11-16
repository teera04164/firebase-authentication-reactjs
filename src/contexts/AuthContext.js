import React, { useContext, useState, useEffect } from "react"
import { auth } from "../config/firebase-config"

const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
  }

  const loginWithSocial = (provider) => {
    return auth.signInWithPopup(provider)
  }

  const logout = () => {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loginWithSocial
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
