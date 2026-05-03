import { useState, useEffect } from "react"
import { AuthContext } from "./useAuth"

// Simulasi database user
const INITIAL_USERS = [
    { id: 1, 
        name: "Citak Kontol", 
        email: "admin123@gmail.com", 
        password: "admin123", 
        role: "admin", 
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpvGPzJyvTxH5DrLqg5yEvcw5xU9xe3FU7ikIvGWihkIu4sYKctFxpiAk43rkO34fTtGNCOpdopdFKNKOOKins0_rKdfV1BrYeI5RSLMVUFVNOP5U5zWB8vV3AdihtpSZUKsAW17FAZiVJXgnsraNuVuYr3dGe81pItkII-npOnaeX5rfAluF8c5mw5gVHgzJ9yYxImUzV9EIjdqnVFE1mOh2xJ4LV6Qy1I3g4RasHJYHa7qSF58xx4yadI2hE74gQoMyNf5wOne8n" 
    },
    { id: 2, 
        name: "John User", 
        email: "user@gmail.com", 
        password: "user123", 
        role: "user", 
        avatar: null 
    }
]

export function AuthProvider({ children }) {
    const [users, setUsers] = useState(() => {
        try {
            const saved = localStorage.getItem("petshop_users")
            return saved ? JSON.parse(saved) : INITIAL_USERS
        } catch {
            return INITIAL_USERS
        }
    })
    
    const [user, setUser] = useState(null)
    const [error, setError] = useState("")

    useEffect(() => {
        localStorage.setItem("petshop_users", JSON.stringify(users))
    }, [users])

    const signIn = (email, password) => {
        const found = users.find(
            u => u.email === email && u.password === password
        )
        if (found) {
            setUser(found)
            setError("")
            return found.role
        } else {
            setError("Email atau password salah.")
            return null
        }
    }

    const signUp = (name, email, password) => {
        const exists = users.find(u => u.email === email)
        if (exists) {
            setError("Email sudah terdaftar.")
            return false
        }
        const newUser = {
            id: Date.now(),
            name, email, password,
            role: "user",
            avatar: null
        }
        setUsers(prev => [...prev, newUser])
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
        
        setUsers(prev => prev.map(u => u.id === user.id ? updated : u))
        setUser(updated)
        return true
    }

    const updateUserRole = (userId, newRole) => {
        setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u))
        // Jika user yang sedang login diubah rolenya, update state user juga
        if (user && user.id === userId) {
            setUser(prev => ({ ...prev, role: newRole }))
        }
    }

    const signOut = () => setUser(null)

    return (
        <AuthContext.Provider value={{ users, user, error, signIn, signUp, signOut, updateProfile, updateUserRole }}>
            {children}
        </AuthContext.Provider>
    )
}
