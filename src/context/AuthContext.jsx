import { useState } from "react"
import { AuthContext } from "./useAuth"

// Simulasi database user
const MOCK_USERS = [
    { id: 1, 
        name: "Citak Kontol", 
        email: "admin123@gmail.com", 
        password: "admin123", 
        role: "admin", 
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpvGPzJyvTxH5DrLqg5yEvcw5xU9xe3FU7ikIvGWihkIu4sYKctFxpiAk43rkO34fTtGNCOpdopdFKNKOOKins0_rKdfV1BrYeI5RSLMVUFVNOP5U5zWB8vV3AdihtpSZUKsAW17FAZiVJXgnsraNuVuYr3dGe81pItkII-npOnaeX5rfAluF8c5mw5gVHgzJ9yYxImUzV9EIjdqnVFE1mOh2xJ4LV6Qy1I3g4RasHJYHa7qSF58xx4yadI2hE74gQoMyNf5wOne8n" 
    }
]

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")

    const signIn = (email, password) => {
        const found = MOCK_USERS.find(
            u => u.email === email && u.password === password
        )
        if (found) {
            setUser(found)
            setError("")
            return found.role  // kembalikan role untuk redirect
        } else {
            setError("Email atau password salah.")
            return null
        }
    }

    const signUp = (name, email, password) => {
        const exists = MOCK_USERS.find(u => u.email === email)
        if (exists) {
            setError("Email sudah terdaftar.")
            return false
        }
        const newUser = {
            id: MOCK_USERS.length + 1,
            name, email, password,
            role: "user",
            avatar: null
        }
        MOCK_USERS.push(newUser)
        setUser(newUser)
        setError("")
        return true
    }

    const updateProfile = ({ name, password }) => {
        if (!user) return false
        const updated = {
            ...user,
            ...(name ? { name } : {}),
            ...(password ? { password } : {})
        }
        // Update di MOCK_USERS juga
        const idx = MOCK_USERS.findIndex(u => u.id === user.id)
        if (idx !== -1) {
            MOCK_USERS[idx] = { ...MOCK_USERS[idx], ...updated }
        }
        setUser(updated)
        return true
    }

    const signOut = () => setUser(null)

    return (
        <AuthContext.Provider value={{ user, error, signIn, signUp, signOut, updateProfile }}>
            {children}
        </AuthContext.Provider>
    )
}
