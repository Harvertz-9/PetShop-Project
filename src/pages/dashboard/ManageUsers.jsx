import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import { useAuth } from "../../context/useAuth"

export default function ManageUsers() {
    const { users, updateUserRole, user: currentUser } = useAuth()
    const [searchTerm, setSearchTerm] = useState("")

    const filteredUsers = users.filter(u => 
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleRoleChange = (userId, currentRole) => {
        const newRole = currentRole === "admin" ? "user" : "admin"
        updateUserRole(userId, newRole)
    }

    return (
        <div className="flex bg-surface-container-lowest min-h-screen">
            <Sidebar />
            <main className="flex-1 overflow-y-auto">
                <div className="p-8 max-w-6xl mx-auto space-y-8">
                    {/* Header */}
                    <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-1">Administration</p>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none">Manage Users</h1>
                        </div>
                        <div className="w-full md:w-auto relative">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                            <input 
                                type="text" 
                                placeholder="Search by name or email..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full md:w-80 bg-surface-container-low rounded-full pl-12 pr-6 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                        </div>
                    </section>

                    {/* Users Table */}
                    <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(25,28,29,0.06)] overflow-hidden border border-outline-variant/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-surface-container-low">
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant">User Info</th>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant">Email</th>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant">Role</th>
                                        <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-surface-container-high">
                                    {filteredUsers.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-6 py-16 text-center text-on-surface-variant">
                                                <span className="material-symbols-outlined text-5xl block mb-3">group_off</span>
                                                No users found matching "{searchTerm}".
                                            </td>
                                        </tr>
                                    ) : filteredUsers.map(user => (
                                        <tr key={user.id} className="hover:bg-surface-container-low/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-full bg-primary/10 overflow-hidden flex-shrink-0 flex items-center justify-center">
                                                        {user.avatar ? (
                                                            <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <span className="text-xl font-black text-primary">{user.name.charAt(0).toUpperCase()}</span>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-on-surface">{user.name}</p>
                                                        <p className="text-xs text-on-surface-variant mt-0.5">ID: {user.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="text-sm font-medium text-on-surface-variant">{user.email}</p>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                                                    user.role === "admin" 
                                                    ? "bg-orange-100 text-orange-700" 
                                                    : "bg-surface-container-high text-on-surface-variant"
                                                }`}>
                                                    {user.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex justify-end items-center gap-3">
                                                    {user.id !== currentUser?.id ? (
                                                        <button 
                                                            onClick={() => handleRoleChange(user.id, user.role)}
                                                            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                                                                user.role === "admin"
                                                                ? "bg-surface-container hover:bg-error/10 hover:text-error text-on-surface-variant"
                                                                : "bg-primary text-on-primary shadow-md hover:opacity-90 hover:shadow-lg"
                                                            }`}
                                                        >
                                                            <span className="material-symbols-outlined text-sm">
                                                                {user.role === "admin" ? "person" : "shield_person"}
                                                            </span>
                                                            {user.role === "admin" ? "Demote to User" : "Promote to Admin"}
                                                        </button>
                                                    ) : (
                                                        <span className="text-xs font-bold text-on-surface-variant bg-surface-container-low px-4 py-2 rounded-full">
                                                            Current Session
                                                        </span>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
