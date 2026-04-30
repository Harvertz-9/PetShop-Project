import Sidebar from "../components/Sidebar"
import { useAuth } from "../context/useAuth"

export default function ProfileDashboardLayout() {
    const { user } = useAuth()
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main class="flex-1 overflow-y-auto">
                    <div class="m-12 max-w-4xl mx-auto space-y-12">
                        <div class="space-y-8">
                            <div class="bg-surface-container-lowest rounded-xl shadow-2xl flex flex-col items-center text-center">
                                <div className="relative group">
                                    <div className="size-40 m-5 rounded-full overflow-hidden border-8 border-surface-container-low shadow-inner">
                                        {user?.avatar ? (
                                            <img className="w-full h-full object-cover" src={user.avatar} alt={user?.name} />
                                        ) : (
                                            <div className="w-full h-full bg-primary text-white flex items-center justify-center text-6xl font-bold">
                                                {user?.name?.charAt(0).toUpperCase() || 'A'}
                                            </div>
                                        )}
                                    </div>
                                    <button className="absolute bottom-5 right-7 p-3 items-center flex bg-primary text-on-primary rounded-full shadow-lg group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined" data-icon="edit">edit</span>
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    <h2 className="text-4xl font-black text-on-surface">{user?.name || "Citak Bokep"}</h2>
                                    <p className="text-on-surface-variant font-medium text-lg italic">{user?.role || "Admin"}</p>
                                </div>
                                <div class="bg-transparent rounded-xl p-10 space-y-10 text-left">
                                    <div>
                                        <h3 class="text-2xl font-bold mb-8 flex items-center gap-3">
                                            <span class="material-symbols-outlined text-primary" data-icon="settings">settings</span>
                                            Account Settings
                                        </h3>
                                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider ml-4">Email</label>
                                                <input className="w-full bg-surface-container-low border-1 shadow-2xl rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all" value={user?.email || ""} readOnly type="email" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider ml-4">Password</label>
                                                <input className="w-full bg-surface-container-low border-1 shadow-2xl rounded-full px-6 py-4 focus:ring-2 focus:ring-primary/20 transition-all" placeholder="••••••••••••" type="password" />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="flex justify-end pt-6">
                                        <button class="px-12 py-4 bg-gradient-to-r from-orange-600 to-orange-400 text-white rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2">
                                            <span class="material-symbols-outlined" data-icon="save">save</span>
                                            Save Profile Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}