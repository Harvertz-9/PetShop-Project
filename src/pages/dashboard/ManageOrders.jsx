import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import AdminHeader from "../../components/AdminHeader"
import { useOrder } from "../../context/useOrder"
import { useAuth } from "../../context/useAuth"
import Swal from "sweetalert2"

const STATUS_CONFIG = {
    "Processing": { color: "bg-blue-100 text-blue-700", icon: "progress_activity" },
    "Confirmed": { color: "bg-amber-100 text-amber-700", icon: "check_circle" },
    "Shipped": { color: "bg-purple-100 text-purple-700", icon: "local_shipping" },
    "Delivered": { color: "bg-green-100 text-green-700", icon: "package_2" },
    "Cancelled": { color: "bg-red-100 text-red-700", icon: "cancel" }
}

export default function ManageOrders() {
    const { orders, updateOrderStatus, deleteOrder } = useOrder()
    const { users } = useAuth()
    const [searchTerm, setSearchTerm] = useState("")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [filterStatus, setFilterStatus] = useState("All")

    // Mendapatkan nama user berdasarkan userId
    const getUserName = (userId) => {
        const found = users.find(u => u.id === userId)
        return found ? found.name : "Unknown User"
    }

    const handleDeleteOrder = (orderId) => {
        Swal.fire({
            title: 'Hapus Orderan?',
            text: `Apakah Anda yakin ingin menghapus orderan ${orderId}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ba1a1a',
            cancelButtonColor: '#554434',
            confirmButtonText: 'Ya, Hapus!',
            cancelButtonText: 'Batal',
            borderRadius: '24px'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteOrder(orderId)
                Swal.fire({
                    title: 'Terhapus!',
                    text: 'Orderan telah berhasil dihapus.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                    borderRadius: '24px'
                })
            }
        })
    }

    const handleDeleteUnknownOrders = () => {
        const unknownOrders = orders.filter(o => !users.find(u => u.id === o.userId))
        if (unknownOrders.length === 0) {
            Swal.fire({
                title: 'Informasi',
                text: 'Tidak ada orderan dari Unknown User.',
                icon: 'info',
                borderRadius: '24px'
            })
            return
        }

        Swal.fire({
            title: 'Hapus Semua Unknown?',
            text: `Apakah Anda yakin ingin menghapus ${unknownOrders.length} orderan dari user yang sudah dihapus?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ba1a1a',
            cancelButtonColor: '#554434',
            confirmButtonText: 'Ya, Hapus Semua!',
            cancelButtonText: 'Batal',
            borderRadius: '24px'
        }).then((result) => {
            if (result.isConfirmed) {
                unknownOrders.forEach(o => deleteOrder(o.id))
                Swal.fire({
                    title: 'Berhasil!',
                    text: 'Semua orderan Unknown User telah dihapus.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false,
                    borderRadius: '24px'
                })
            }
        })
    }

    const filteredOrders = orders.filter(order => {
        const userName = getUserName(order.userId).toLowerCase()
        const orderId = order.id.toLowerCase()
        const matchesSearch = userName.includes(searchTerm.toLowerCase()) || orderId.includes(searchTerm.toLowerCase())
        const matchesStatus = filterStatus === "All" || order.status === filterStatus
        
        // Hanya tampilkan orderan dari user (role !== 'admin')
        // Namun, jika kita ingin melihat SEMUA orderan termasuk demo, kita bisa hilangkan filter role ini
        // Mengikuti permintaan: "hanya menampilkan orderan yang dipesan oleh user"
        const userObj = users.find(u => u.id === order.userId)
        const isUserOrder = userObj ? userObj.role === "user" : true // Default true if user not found (like deleted user)
        
        return matchesSearch && matchesStatus && isUserOrder
    })

    const handleStatusUpdate = (orderId, newStatus) => {
        updateOrderStatus(orderId, newStatus)
    }

    return (
        <div className="flex flex-col md:flex-row bg-surface-container-lowest min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} title="Manage Orders" />
                <main className="flex-1 overflow-y-auto">
                <div className="p-8 max-w-7xl mx-auto space-y-8">
                    {/* Header Section */}
                    <section className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
                        <div>
                            <p className="text-primary font-bold text-xs tracking-[0.2em] uppercase mb-1">Administration</p>
                            <h1 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight leading-none">Manage Orders</h1>
                            <p className="text-on-surface-variant text-sm mt-3 font-medium">Monitoring and fulfilling customer orders.</p>
                            <button 
                                onClick={handleDeleteUnknownOrders}
                                className="mt-4 px-6 py-2 bg-error/10 text-error hover:bg-error hover:text-white rounded-full text-xs font-bold transition-all flex items-center gap-2 w-fit"
                            >
                                <span className="material-symbols-outlined text-sm">delete_sweep</span>
                                Hapus Orderan Unknown
                            </button>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                            <div className="relative flex-1 sm:w-80">
                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
                                <input 
                                    type="text" 
                                    placeholder="Search order ID or customer..." 
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-surface-container-low rounded-full pl-12 pr-6 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                                />
                            </div>
                            <select 
                                value={filterStatus}
                                onChange={(e) => setFilterStatus(e.target.value)}
                                className="bg-surface-container-low rounded-full px-6 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                            >
                                <option value="All">All Status</option>
                                <option value="Processing">Processing</option>
                                <option value="Confirmed">Confirmed</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                    </section>

                    {/* Orders Table/List */}
                    <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(25,28,29,0.06)] overflow-hidden border border-outline-variant/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-surface-container-low">
                                        <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant">Order Info</th>
                                        <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant">Customer</th>
                                        <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant">Total Amount</th>
                                        <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant">Status</th>
                                        <th className="px-6 py-5 text-xs font-black uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-surface-container-high">
                                    {filteredOrders.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-6 py-24 text-center text-on-surface-variant">
                                                <div className="flex flex-col items-center">
                                                    <span className="material-symbols-outlined text-6xl mb-4 opacity-20">receipt_long</span>
                                                    <p className="text-lg font-bold">No orders found</p>
                                                    <p className="text-sm">Try adjusting your search or filters.</p>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : filteredOrders.map(order => {
                                        const cfg = STATUS_CONFIG[order.status] || STATUS_CONFIG["Processing"]
                                        const date = new Date(order.date).toLocaleDateString("en-US", {
                                            month: "short", day: "numeric", year: "numeric"
                                        })
                                        
                                        return (
                                            <tr key={order.id} className="hover:bg-surface-container-low/30 transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-on-surface text-sm uppercase tracking-tight">{order.id}</span>
                                                        <span className="text-xs text-on-surface-variant font-medium">{date}</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                                            <span className="text-[10px] font-black text-primary">
                                                                {getUserName(order.userId).charAt(0).toUpperCase()}
                                                            </span>
                                                        </div>
                                                        <div className="flex flex-col">
                                                            <span className="font-bold text-on-surface text-sm">{getUserName(order.userId)}</span>
                                                            <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter">User ID: {order.userId}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex flex-col">
                                                        <span className="font-black text-primary text-sm">${order.total?.toFixed(2)}</span>
                                                        <span className="text-[10px] text-on-surface-variant font-bold uppercase">{order.items?.length} Items</span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${cfg.color}`}>
                                                        <span className="material-symbols-outlined text-[14px] leading-none">{cfg.icon}</span>
                                                        {order.status}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <div className="flex justify-end items-center gap-3">
                                                        <div className="relative group/select">
                                                            <select 
                                                                value={order.status}
                                                                onChange={(e) => handleStatusUpdate(order.id, e.target.value)}
                                                                className="appearance-none bg-surface-container-low hover:bg-surface-container-high transition-colors rounded-full pl-4 pr-10 py-2 text-xs font-bold focus:outline-none cursor-pointer"
                                                            >
                                                                <option value="Processing">Processing</option>
                                                                <option value="Confirmed">Confirmed</option>
                                                                <option value="Shipped">Shipped</option>
                                                                <option value="Delivered">Delivered</option>
                                                                <option value="Cancelled">Cancelled</option>
                                                            </select>
                                                            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-base text-on-surface-variant transition-transform group-hover/select:translate-y-[-40%]">arrow_drop_down</span>
                                                        </div>
                                                        <button 
                                                            onClick={() => handleDeleteOrder(order.id)}
                                                            className="p-2 rounded-full bg-error/10 text-error hover:bg-error hover:text-white transition-all flex items-center justify-center"
                                                            title="Delete Order"
                                                        >
                                                            <span className="material-symbols-outlined text-sm">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* Footer Info */}
                        <div className="px-6 py-4 bg-surface-container-low/50 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-on-surface-variant">
                            <span>Showing {filteredOrders.length} Orders</span>
                            <span className="text-primary-container-on font-black">All data synced with localStorage</span>
                        </div>
                    </div>
                </div>
            </main>
            </div>
        </div>
    )
}
