import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../context/useAuth"

export default function Sidebar() {
    const { user, signOut } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        signOut()
        navigate('/SignIn')
    }
    return (
        <>
            <aside className="hidden md:flex flex-col h-screen max-w-72 w-full sticky top-0 left-0 bg-slate-100 dark:bg-slate-900 shadow-2xl z-50">
                <div className="flex flex-col h-full py-5 px-4 bg-slate-50 dark:bg-slate-950 space-y-12">
                    <div className="px-4">
                        <h1 className="text-2xl font-extrabold text-orange-600 dark:text-orange-400">Pet Atelier</h1>
                        <p className="text-sm font-medium text-slate-500">Admin</p>
                    </div>
                    <nav className="flex-1 space-y-2">
                        <Link to='/' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                            <span className="font-medium">Home</span>
                        </Link>
                        <Link to='/AdminDashboard' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                            <span className="font-medium">Dashboard</span>
                        </Link>
                        <Link to='/ManageToys' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all" href="#">
                            <span className="material-symbols-outlined" data-icon="toys" style={{ fontVariationSettings: "'FILL' 1" }}>toys</span>
                            <span className="font-medium">Manage Toys</span>
                        </Link>
                        <Link to='/ManageFood' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all">
                            <span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
                            <span className="font-medium">Manage Food</span>
                        </Link>
                        <Link to='/ManageCollars' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all">
                            <span className="material-symbols-outlined" data-icon="pets">pets</span>
                            <span className="font-medium">Manage Collars</span>
                        </Link>
                        <Link to='/ManageUsers' className="flex items-center space-x-4 text-slate-600 dark:text-slate-400 hover:text-orange-500 dark:hover:text-orange-300 px-6 py-3 transition-colors hover:bg-white/50 dark:hover:bg-slate-800 rounded-full transition-all">
                            <span className="material-symbols-outlined" data-icon="group">group</span>
                            <span className="font-medium">Manage Users</span>
                        </Link>
                        <Link to='/ProfileDashboard' className="px-5 py-3 bg-white dark:bg-slate-900 rounded-xl flex items-center space-x-3">
                            {user?.avatar ? (
                                <img alt={user?.name || "Admin"} className="w-10 h-10 rounded-full object-cover" src={user.avatar} />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                                    {user?.name?.charAt(0).toUpperCase() || 'A'}
                                </div>
                            )}
                            <div className="overflow-hidden">
                                <p className="text-sm font-bold truncate">{user?.name || "Citak Bokep"}</p>
                                <p className="text-xs text-slate-500">{user?.role || "Admin"}</p>
                            </div>
                        </Link>
                        <div>
                            <button onClick={handleLogout} className="text-red-500 px-10 py-2 ml-5 mt-10 border-2 border-red-500 hover:bg-red-500 hover:text-white rounded-full transition-all w-fit">Logout</button>
                        </div>
                    </nav>
                </div>
            </aside>

        </>
    )
}