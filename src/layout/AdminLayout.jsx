import { Link } from "react-router-dom"
export default function AdminLayout() {
    return (
        <>
            <header className="lg:hidden flex items-center justify-between p-4 bg-slate-50 border-b border-outline-variant/15 sticky top-0 z-50">
                <h1 className="text-lg font-bold text-slate-900 headline-font">Atelier Admin</h1>
                <label className="cursor-pointer p-2" for="mobile-menu-checkbox">
                    <span className="material-symbols-outlined">menu</span>
                </label>
            </header>
            <input className="hidden" id="mobile-menu-checkbox" type="checkbox" />
            <div className="overlay fixed inset-0 bg-black/50 z-40 hidden lg:hidden" onclick="document.getElementById('mobile-menu-checkbox').checked = false"></div>
            <aside className="h-full w-72 fixed left-0 top-0 overflow-y-auto bg-slate-50 border-r border-outline-variant/15 flex flex-col p-6 gap-2 z-50 transition-transform -translate-x-full lg:translate-x-0">
                <div className="mb-8 px-4 hidden lg:block">
                    <h1 className="text-xl font-bold text-slate-900 headline-font">Atelier Admin</h1>
                    <p className="text-xs text-on-surface-variant/70">Store Management</p>
                </div>
                <div className="lg:hidden flex justify-between items-center mb-8 px-4">
                    <div>
                        <h1 className="text-xl font-bold text-slate-900 headline-font">Atelier Admin</h1>
                        <p className="text-xs text-on-surface-variant/70">Store Management</p>
                    </div>
                    <label className="cursor-pointer" for="mobile-menu-checkbox">
                        <span className="material-symbols-outlined">close</span>
                    </label>
                </div>
                <nav className="flex flex-col gap-2">
                    <a className="bg-orange-100 text-orange-700 rounded-full px-4 py-3 flex items-center gap-3 font-['Be_Vietnam_Pro'] text-sm font-medium transition-transform hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
                        Dashboard
                    </a>
                    <a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 rounded-full transition-all font-['Be_Vietnam_Pro'] text-sm font-medium hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                        Manage Toys
                    </a>
                    <Link to='/ManageFood' className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 rounded-full transition-all font-['Be_Vietnam_Pro'] text-sm font-medium hover:translate-x-1">
                        <span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
                        Manage Food
                    </Link>
                    <a className="text-slate-500 px-4 py-3 flex items-center gap-3 hover:bg-slate-200/50 rounded-full transition-all font-['Be_Vietnam_Pro'] text-sm font-medium hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
                        Manage Collars
                    </a>
                </nav>
                <div className="mt-auto pt-6 border-t border-outline-variant/15">
                    <div className="flex items-center gap-3 px-4">
                        <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                            <img alt="Admin profile photo" className="w-full h-full object-cover" data-alt="Professional headshot of a friendly business manager in a light-filled modern office setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3CZUM5CrQEHuEQ9HfV_l_LsoiHnrSyv4nXUwt5kYBdQWIOBnoynIUb4nbQiOU7r0Ez_RGN2uOQzRYjt11mYf7zomt3PXr0fQ9ttAVHVtowFGDvbb3vQ1lFXm4BGZ_yhGcDr7G5ayAzxty9h9nnbo0yzCkjHUQ5S4WPl9YTmaJ2h1p65Yfk0egyL8kWxcgCZS2-vvGIIJI6QuPtuNtqSmi7n_losCoOnvrYqxB46LYxdKleFewZIskHj_6qr8vGAY_8lhs_tnw4DIH" />
                        </div>
                        <div>
                            <p className="text-sm font-bold">Alex Rivers</p>
                            <p className="text-xs text-on-surface-variant">Store Owner</p>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="lg:ml-72 flex-grow p-4 md:p-10 transition-all">
                <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold headline-font tracking-tight text-on-surface">Overview</h2>
                        <p className="text-on-surface-variant mt-2 text-base md:text-lg">Welcome back to Pet Atelier.</p>
                    </div>
                </header>
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
                    <div className="bg-surface-container-low p-6 md:p-8 rounded-xl flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined" data-icon="pets">pets</span>
                        </div>
                        <div>
                            <p className="text-on-surface-variant font-medium">Total Pets</p>
                            <h3 className="text-3xl md:text-4xl font-black headline-font">1,284</h3>
                        </div>
                        <p className="text-xs font-bold text-green-600 bg-green-100 self-start px-2 py-1 rounded-full">+12% this month</p>
                    </div>
                    <div className="bg-surface-container-low p-6 md:p-8 rounded-xl flex flex-col gap-4">
                        <div className="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                            <span className="material-symbols-outlined" data-icon="today">today</span>
                        </div>
                        <div>
                            <p className="text-on-surface-variant font-medium">Appointments Today</p>
                            <h3 className="text-3xl md:text-4xl font-black headline-font">24</h3>
                        </div>
                        <p className="text-xs font-bold text-orange-600 bg-orange-100 self-start px-2 py-1 rounded-full">4 pending</p>
                    </div>
                    <div className="bg-surface-container-low p-6 md:p-8 rounded-xl flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
                        <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                            <span className="material-symbols-outlined" data-icon="payments">payments</span>
                        </div>
                        <div>
                            <p className="text-on-surface-variant font-medium">Monthly Revenue</p>
                            <h3 className="text-3xl md:text-4xl font-black headline-font">$42,850</h3>
                        </div>
                        <p className="text-xs font-bold text-green-600 bg-green-100 self-start px-2 py-1 rounded-full">On track for target</p>
                    </div>
                </section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <section className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-6 md:p-8 shadow-[0_20px_40px_rgba(25,28,29,0.06)] overflow-hidden">
                        <div className="flex justify-between items-center mb-6 md:mb-8">
                            <h3 className="text-xl md:text-2xl font-bold headline-font">Grooming Today</h3>
                            <button className="text-primary font-bold hover:underline text-sm md:text-base">View All</button>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex items-center justify-between p-3 md:p-4 hover:bg-surface-container-low rounded-lg transition-colors group">
                                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden shrink-0">
                                        <img alt="Golden Retriever" className="w-full h-full object-cover" data-alt="Portrait of a happy golden retriever with a fresh haircut sitting against a soft blue studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6lBTOh-PJoF55ApPZFX-xoPMtUHagBvyxWrgw8QwrrgaMzAQtL9qOqtxSV963H9WB_JBUixjuTqPe4YioYdQ-H8sIqX2Rt5sRYShq22-_vPJAdfTDEhk-2STbs-OkB1KNxoSS3z1t-9cFxLp9_zFj8Z0_lGg93LCQ0XDf4qNDkvGy318ls6h5rQW1aXAkBnVYncQTT6qqLYo-0kLEVfyHQw7mPbBo7gKsagHgCS66vxgSs48QSvVBdBWgzt9y7sOgQLaaXeSwYZI6" />
                                    </div>
                                    <div className="truncate">
                                        <p className="font-bold text-on-surface text-sm md:text-base truncate">Buddy</p>
                                        <p className="text-xs md:text-sm text-on-surface-variant truncate">Golden Retriever • Full Grooming</p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="font-bold text-xs md:text-base">10:30 AM</p>
                                    <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-green-100 text-green-700 text-[10px] md:text-xs font-bold">Checked In</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 md:p-4 hover:bg-surface-container-low rounded-lg transition-colors group">
                                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden shrink-0">
                                        <img alt="Calico Cat" className="w-full h-full object-cover" data-alt="Fluffy calico cat with bright green eyes looking curiously at the camera on a white sheepskin rug" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfF8Sb31cTj_bQjfqL18pttxLl59vaxq_4ujE5nK2N78ptZHXlkYY3z-uxpIxbkXnUH5iDUWt9L2xnn4NK7khBO9faOaeP1iGyDDTsVVDorO7d4gzAI9qqA2GEDwo3qUGH9HEph3T9hCd3-T7PB5nbAVCSFPCrHbXu8udYq8Ms2v2LQ81EnNRnj8lnrJc9wYlM9VWuAhJ7IblPjcWHKUiX3hn3HSswPl8VY_i7P9PxTmRRY-UCWJiZ9-DhdFL9G8RTrzj2v-BUZ6oD" />
                                    </div>
                                    <div className="truncate">
                                        <p className="font-bold text-on-surface text-sm md:text-base truncate">Luna</p>
                                        <p className="text-xs md:text-sm text-on-surface-variant truncate">Calico Cat • Nail Trimming</p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="font-bold text-xs md:text-base">11:15 AM</p>
                                    <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-[10px] md:text-xs font-bold">In Progress</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-3 md:p-4 hover:bg-surface-container-low rounded-lg transition-colors group">
                                <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden shrink-0">
                                        <img alt="Corgi" className="w-full h-full object-cover" data-alt="Adorable corgi dog tilting its head playfully on a polished wooden floor in a sunny living room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtKgVPWoVbWnK-FordOqMwpp9Z4bfaWfnP_6HErW6a91PouKrHRS7wNa6aaCS57w8TAnfLQu-7gDiQAiad5iGfB9hw_WSTPDtXBpZBrfjAZJhtoPcYmoar1cnHd2OxeLbBIWxRxs9btJCFRqP1jybdgaHvJXdMe7yuVpdlTPKdKHo6aj8iVZBsaSPVOD10hOXEuhWm4VEDwzNhdwMijK1f_SMIML0hQXS7Oi7iOA-yey9MIr9HY7uzhGRsAALToIXoYiZBxqcucADy" />
                                    </div>
                                    <div className="truncate">
                                        <p className="font-bold text-on-surface text-sm md:text-base truncate">Oliver</p>
                                        <p className="text-xs md:text-sm text-on-surface-variant truncate">Corgi • Bath &amp; Brush</p>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="font-bold text-xs md:text-base">01:00 PM</p>
                                    <span className="inline-block px-2 md:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[10px] md:text-xs font-bold">Upcoming</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col gap-8">
                        <div className="bg-surface-container-low rounded-lg p-6 md:p-8">
                            <h3 className="text-lg md:text-xl font-bold headline-font mb-4 md:mb-6">Inventory Alerts</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-surface-container-lowest rounded-lg border border-error/10">
                                    <div className="text-error shrink-0">
                                        <span className="material-symbols-outlined" data-icon="warning">warning</span>
                                    </div>
                                    <div>
                                        <p className="text-xs md:text-sm font-bold text-on-surface">Organic Kibble (Beef)</p>
                                        <p className="text-[10px] md:text-xs text-on-surface-variant">Only 3 units left</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-surface-container-lowest rounded-lg border border-tertiary/10">
                                    <div className="text-tertiary shrink-0">
                                        <span className="material-symbols-outlined" data-icon="inventory">inventory</span>
                                    </div>
                                    <div>
                                        <p className="text-xs md:text-sm font-bold text-on-surface">Silk Fur Conditioner</p>
                                        <p className="text-[10px] md:text-xs text-on-surface-variant">Reorder suggested</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full mt-6 py-3 text-sm font-bold text-primary hover:bg-primary/5 rounded-full transition-colors">Go to Dashboard</button>
                        </div>
                        <div className="bg-gradient-to-br from-secondary to-on-secondary-fixed-variant rounded-lg p-6 md:p-8 text-on-secondary relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-lg md:text-xl font-bold headline-font mb-2">Summer Sale</h3>
                                <p className="text-xs md:text-sm text-secondary-fixed/80 mb-6 leading-relaxed">Launch the "Happy Tail" package.</p>
                                <button className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full text-xs md:text-sm font-bold group-hover:scale-105 transition-transform">Get Started</button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 opacity-20 transition-transform group-hover:scale-110 duration-500">
                                <span className="material-symbols-outlined text-7xl md:text-9xl" data-icon="campaign">campaign</span>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </>
    )
}