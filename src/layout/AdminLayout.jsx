import { useState } from "react"
import Sidebar from "../components/Sidebar"

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

export default function AdminLayout() {
    return (
        <>
            <div className="flex">
            <Sidebar />
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
                        <div className="lg:col-span-8">
                            <InteractiveChart />
                        </div>
                        <div className="lg:col-span-4 flex flex-col gap-8">

                            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex-grow flex flex-col">
                                <h2 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                                    Upcoming Paws
                                    <span className="px-2 py-0.5 bg-secondary-container/20 text-on-secondary-container rounded text-xs">4 Total</span>
                                </h2>
                                <div className="space-y-6 flex-grow">
                                    <div className="flex items-start gap-4">
                                        <div className="relative">
                                            <img alt="A happy Beagle dog" className="w-14 h-14 rounded-lg object-cover" data-alt="close-up portrait of a friendly beagle with floppy ears and brown eyes, warm outdoor lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkQcXLcHpLEvpnx-v4cUIo_4JcfRSgROvLRtAwy4mZ3rECNWtnJgxp5Yy5tzmqoxwu6FFsKor2h81OMQs-wHgOskgY60w6XiDjPPY9huD455YKA312FV9qq_aB4AH2TTtK4HKnL6jAuDsR3AMYccbqWJor-rsG5IJi2vdpq-ivB7AqM3P4kkau5HlJJ-_EM7rZq0Qn6NN8mg_aJEJoTf5flbSquQIzwIvZAzReUTBhbg-kVpdGuw6a-UkJ_Hv6Wcybia5WwAkdhZ_Z" />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between">
                                                <p className="font-bold text-on-surface">Barnaby</p>
                                                <p className="text-xs font-black text-secondary">09:30 AM</p>
                                            </div>
                                            <p className="text-xs text-on-surface-variant">Full Groom &amp; Spa</p>
                                            <div className="mt-2 flex gap-1">
                                                <span className="px-2 py-0.5 bg-surface-container-high rounded-full text-[10px] font-bold uppercase tracking-tighter">Gold Tier</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="relative">
                                            <img alt="A fluffy white Pomeranian" className="w-14 h-14 rounded-lg object-cover" data-alt="close-up of a fluffy small white dog with bright dark eyes looking directly at the camera, soft indoor studio lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3q2lftsrm8_07uqV840oyMlrrtmN2hCncjbkWIYfWUKusP7uiFUrlX9CUcazGrP4WyhrH_riOLtyE6HSVNmqKO-U_E0oguv2f4Cevbx1wmB_iIOMRtfBYrD4G2CfhuCDcPbVCM78-CvqSMhzSoASSsfScLL9sGsD6Ix9bkYyrTlitPXPaoCJ_NihC5d-sf2YNWtp_Od5YzTmlbFhiXWU1Etf9PNLBgRRCpXXfqUoff8diHCtyc7TcDDFMTyzdU0db2FulZTugXWpg" />
                                            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-orange-400 border-2 border-white rounded-full"></div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between">
                                                <p className="font-bold text-on-surface">Luna</p>
                                                <p className="text-xs font-black text-secondary">11:15 AM</p>
                                            </div>
                                            <p className="text-xs text-on-surface-variant">Claw Trim Only</p>
                                            <div className="mt-2 flex gap-1">
                                                <span className="px-2 py-0.5 bg-surface-container-high rounded-full text-[10px] font-bold uppercase tracking-tighter">Regular</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 opacity-70">
                                        <div className="relative">
                                            <img alt="Golden Retriever" className="w-14 h-14 rounded-lg object-cover" data-alt="Golden Retriever puppy sitting in green grass during late afternoon golden hour with soft rim lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFGvJ013s5BlKPKOhLU0RRC_StpCM_LNV8w_8kapW9qdouWtSStCBYxxjeLtTg4uWuhMxPKI4VNpq2yscWmZNoQ-V4xV-QOYpD2X32Hy57LuJ0-nqKl53g6-WlCeNohPs4LW6N_PZLAW7X3G-fBMVAhsuEANQa157NJTIkflPKueDGc8csBPmXzJ7oRKdmSECpK36OVbPVKnHUD4fNJWUM5Bt7cEQ8oqRyTNQiRDs9FsgOzJGrH_XtMtzhDLLl3AUuApLsAXZx638i" />
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex justify-between">
                                                <p className="font-bold text-on-surface">Cooper</p>
                                                <p className="text-xs font-black text-secondary">02:00 PM</p>
                                            </div>
                                            <p className="text-xs text-on-surface-variant">Teeth Cleaning</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-8 py-3 bg-surface-container text-on-surface-variant font-bold text-sm rounded-full hover:bg-surface-container-high transition-colors">
                                    View All Appointments
                                </button>
                            </div>
                            <div className="bg-gradient-to-br from-primary to-primary-container rounded-xl p-8 text-white relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-xl font-extrabold leading-tight">Refill Inventory Now</h3>
                                    <p className="text-sm opacity-90 mt-2">3 types of "Organic Lamb" are running low. Order before 4PM for tomorrow's delivery.</p>
                                    <button className="mt-4 px-6 py-2 bg-white text-primary font-bold rounded-full text-xs">Manage Stock</button>
                                </div>
                                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl opacity-10" data-icon="restaurant">restaurant</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main> 
            </div>
        </>
    )
}