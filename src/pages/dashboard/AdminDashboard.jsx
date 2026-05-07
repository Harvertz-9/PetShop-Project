import { useState } from "react"
import Sidebar from "../../components/Sidebar"
import AdminHeader from "../../components/AdminHeader"

const WEEKLY_DATA = [
    { day: "Mon", value: 40, sales: "$3,200" },
    { day: "Tue", value: 65, sales: "$5,100" },
    { day: "Wed", value: 85, sales: "$6,800" },
    { day: "Thu", value: 55, sales: "$4,400" },
    { day: "Fri", value: 45, sales: "$3,600" },
    { day: "Sat", value: 95, sales: "$7,600" },
    { day: "Sun", value: 75, sales: "$6,000" }
]

const MONTHLY_DATA = [
    { day: "Jan", value: 55, sales: "$18,500" },
    { day: "Feb", value: 42, sales: "$14,200" },
    { day: "Mar", value: 68, sales: "$22,800" },
    { day: "Apr", value: 78, sales: "$26,100" },
    { day: "May", value: 91, sales: "$30,400" },
    { day: "Jun", value: 72, sales: "$24,100" },
    { day: "Jul", value: 83, sales: "$27,800" }
]

function InteractiveChart() {
    const [view, setView] = useState("weekly")
    const [hoveredIdx, setHoveredIdx] = useState(null)
    const data = view === "weekly" ? WEEKLY_DATA : MONTHLY_DATA

    return (
        <div className="bg-surface-container-low rounded-xl p-8 space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-extrabold tracking-tight">Sales Trajectory</h2>
                <div className="flex bg-white/60 p-1 rounded-full border border-outline-variant/15">
                    <button
                        onClick={() => setView("weekly")}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "weekly" ? "bg-white shadow-sm text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
                    >Weekly</button>
                    <button
                        onClick={() => setView("monthly")}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${view === "monthly" ? "bg-white shadow-sm text-on-surface" : "text-on-surface-variant hover:text-on-surface"}`}
                    >Monthly</button>
                </div>
            </div>

            {/* Chart */}
            <div className="relative h-[240px] flex items-end gap-3 px-2">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-1 pr-2">
                    {["100%", "75%", "50%", "25%", "0%"].map(l => (
                        <span key={l} className="text-[9px] text-on-surface-variant font-bold">{l}</span>
                    ))}
                </div>
                {/* Grid lines */}
                <div className="absolute left-8 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
                    {[0,1,2,3,4].map(i => (
                        <div key={i} className="border-t border-outline-variant/10 w-full" />
                    ))}
                </div>
                {/* Bars */}
                <div className="flex-1 flex items-end gap-2 pl-8 h-full">
                    {data.map((d, i) => (
                        <div key={`${view}-${i}`} className="flex-1 flex flex-col items-center gap-1 relative group"
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}>
                            {/* Tooltip */}
                            {hoveredIdx === i && (
                                <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] px-3 py-2 rounded-lg shadow-xl whitespace-nowrap z-10">
                                    <p className="font-black">{d.day}</p>
                                    <p className="opacity-80">{d.sales}</p>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-on-surface" />
                                </div>
                            )}
                            <div
                                className={`w-full rounded-t-lg transition-all duration-500 ease-out cursor-pointer ${
                                    hoveredIdx === i
                                        ? "bg-primary shadow-[0_-4px_20px_rgba(143,78,0,0.3)]"
                                        : hoveredIdx === null
                                        ? (i === data.length - 1 ? "bg-secondary" : "bg-primary-container")
                                        : "bg-primary-container/40"
                                }`}
                                style={{ height: `${d.value}%` }}
                            />
                            <span className="text-[9px] font-bold text-on-surface-variant">{d.day}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-outline-variant/15">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                        <span className="material-symbols-outlined">shopping_basket</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Top Category</p>
                        <p className="text-lg font-black">Bespoke Collars</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                        <span className="material-symbols-outlined">stars</span>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Growth Lead</p>
                        <p className="text-lg font-black">Organic Kibble</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function AdminDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return (
        <>
            <div className="flex flex-col md:flex-row min-h-screen">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <div className="flex-1 flex flex-col min-w-0">
                <AdminHeader onMenuClick={() => setIsSidebarOpen(true)} title="Dashboard" />
                <main className="flex-grow flex flex-col min-w-0">
                <div className="p-8 space-y-12">
                    <section className="flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="flex items-center justify-between w-full">
                            <h1 className="text-5xl font-extrabold text-on-surface tracking-tight leading-none">Dashboard</h1>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 text-md md:px-8 md:py-4 bg-secondary-container text-on-secondary-container font-bold rounded-full hover:shadow-lg transition-all flex items-center gap-2">
                                    <span className="material-symbols-outlined md:flex hidden" data-icon="download">download</span>
                                    Export Report
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                            <span className="material-symbols-outlined text-primary mb-4 block" data-icon="payments">payments</span>
                            <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Total Sales (MTD)</h3>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-black text-on-surface">$42,890</span>
                                <span className="text-emerald-600 text-sm font-bold flex items-center">+12%</span>
                            </div>
                            <div className="mt-6 flex items-center text-xs text-on-surface-variant font-medium gap-1">
                                <span className="material-symbols-outlined text-[14px]" data-icon="trending_up">trending_up</span>
                                Surpassing previous quarter by 4.2%
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-secondary/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                            <span className="material-symbols-outlined text-secondary mb-4 block" data-icon="calendar_today">calendar_today</span>
                            <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Active Appointments</h3>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-black text-on-surface">18</span>
                                <span className="text-on-surface-variant text-sm">/ 25 slots</span>
                            </div>
                            <div className="mt-6 w-full bg-surface-container-low h-2 rounded-full overflow-hidden">
                                <div className="bg-secondary h-full rounded-full w-[72%]"></div>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-32 h-32 bg-tertiary/5 rounded-full group-hover:scale-125 transition-transform duration-500"></div>
                            <span className="material-symbols-outlined text-tertiary mb-4 block" data-icon="inventory_2">inventory_2</span>
                            <h3 className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Inventory Health</h3>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-black text-on-surface">94%</span>
                                <span className="text-orange-600 text-sm font-bold flex items-center">3 low stock</span>
                            </div>
                            <div className="mt-6 flex gap-2">
                                <span className="px-3 py-1 bg-tertiary-container/20 text-on-tertiary-container rounded-full text-xs font-bold uppercase">Collars Optimal</span>
                                <span className="px-3 py-1 bg-error-container/20 text-on-error-container rounded-full text-xs font-bold uppercase">Food Alert</span>
                            </div>
                        </div>
                    </section>
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="md:col-span-8 lg:col-span-12">
                            <InteractiveChart />
                        </div>
                    </section>
                </div>
            </main> 
            </div>
            </div>
        </>
    )
}