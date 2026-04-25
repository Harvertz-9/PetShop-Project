import Sidebar from "../components/Sidebar"
export default function ManageCollarsLayout() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 flex flex-col min-w-0 bg-surface">
                    <div className="p-8 lg:p-12 space-y-8 max-w-7xl mx-auto w-full">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-extrabold text-on-surface tracking-tight leading-none">Manage Collars</h1>
                            </div>
                            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all w-fit">
                                <span className="material-symbols-outlined" data-icon="add" style={{fontVariationSettings: "'wght' 700"}}>add</span>
                                Add New Collar
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-6 rounded-xl bg-surface-container-low space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Inventory Health</span>
                                    <span className="material-symbols-outlined text-primary" data-icon="monitoring">monitoring</span>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-3xl font-black text-on-surface">94%</h4>
                                    <p className="text-sm text-on-surface-variant">Items currently in stock</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl bg-secondary-container/10 border border-secondary/10 space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-on-secondary-container uppercase tracking-widest">Low Stock Alerts</span>
                                    <span className="material-symbols-outlined text-error" data-icon="warning" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-3xl font-black text-error">02</h4>
                                    <p className="text-sm text-on-secondary-container">SKUs require reordering</p>
                                </div>
                            </div>
                            <div className="p-6 rounded-xl bg-primary-fixed space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-bold text-on-primary-fixed-variant uppercase tracking-widest">Most Popular</span>
                                    <span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-3xl font-black text-on-primary-fixed">Leather</h4>
                                    <p className="text-sm text-on-primary-fixed-variant">80% of sales this month</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                            <div className="md:col-span-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 px-4">Filter by Material</label>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-4 py-2 rounded-full bg-primary text-on-primary text-sm font-semibold">All</button>
                                    <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold hover:bg-surface-variant transition-colors">Leather</button>
                                    <button className="px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant text-sm font-semibold hover:bg-surface-variant transition-colors">Vegan</button>
                                </div>
                            </div>
                            <div className="md:col-span-1">
                                <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-2 px-4">Filter by Size</label>
                                <div className="flex flex-wrap gap-2">
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold hover:bg-primary hover:text-on-primary transition-all">S</button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold hover:bg-primary hover:text-on-primary transition-all">M</button>
                                    <button className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface-variant text-sm font-bold hover:bg-primary hover:text-on-primary transition-all">L</button>
                                </div>
                            </div>
                            <div className="md:col-span-2 flex justify-end items-end h-full">
                                <div className="flex items-center gap-3 bg-surface-container-low p-2 rounded-full">
                                    <span className="text-xs font-bold text-on-surface-variant px-4">Sort by:</span>
                                    <select className="bg-transparent border-none focus:ring-0 text-sm font-semibold text-on-surface cursor-pointer pr-8">
                                        <option>Newest First</option>
                                        <option>Stock Level (Low-High)</option>
                                        <option>Stock Level (High-Low)</option>
                                        <option>Name (A-Z)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(25,28,29,0.06)] border border-outline-variant/10">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-surface-container-low">
                                            <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Product Name</th>
                                            <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Material</th>
                                            <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Size</th>
                                            <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Stock Level</th>
                                            <th className="px-6 py-5 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-surface-container">
                                        <tr className="hover:bg-surface-container-low transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
                                                        <img alt="Signature Leather Collar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="macro close-up of a premium cognac brown leather dog collar with brass hardware on a white background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlJFa8SnFf2rhp4IgD3TIhJigW_TiyX_BQRKL6Sul6lVO1i7YtJLqQlRFo_5NPsxgyyUYQaTzgnKC65kupL24sC1LzAWy712TfAb35eTFp651Kfe2moTrOmNtZPHEj5fstdZ-G2g0Mx4y4DqeWsUlIpigwiRFGn1IggyqCWbN-mycVteMJt_Y3aTdNOhHIoteQfeWTrS7EbsCmzUXziKgnLYrSJpp3blHH3Ova45CxstsQAXZQ6gThAhK4q78XQEb4A324FClZo27_" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-on-surface">Signature Cognac Leather</p>
                                                        <p className="text-xs text-on-surface-variant">SKU: COL-LEA-CGN-01</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-on-tertiary-container text-xs font-bold">Premium Leather</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex gap-1">
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-surface-container text-[10px] font-bold">S</span>
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-primary text-on-primary text-[10px] font-bold">M</span>
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-surface-container text-[10px] font-bold">L</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
                                                        <div className="bg-primary h-full rounded-full" style={ { width: "85%" }}></div>
                                                    </div>
                                                    <span className="text-sm font-bold text-on-surface">42 units</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 hover:bg-primary-fixed rounded-full text-primary transition-all">
                                                        <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-error-container rounded-full text-error transition-all">
                                                        <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-surface-container-low transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
                                                        <img alt="Midnight Blue Fabric Collar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="stylish midnight blue waterproof fabric dog collar with geometric pattern and silver buckle" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDREbUTLkq7gY4COsYMDZbLZVtUzFuoO9D2uelcKeWcv0HAG8fsLKfpq5Q7uM_j7uq0aUyddJjilXkXBbC9PqlIw2CiKrfpXhf3jlIs1yohgcI8zZx1zMWT_TgT6eK9XrwhaQPqkXg6scTVHST02FGohfBiv4BHiGdX1pf3fizqq91p5ZNc4d3V7Plh7BZd-4TnhyvkgnBRH8eSFe6SxLiWzUJLI___78LA6tltuDEouMk_pFsFW-JH8UPHySKCWjkqpDffgY-ou81" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-on-surface">Midnight Explorer Fabric</p>
                                                        <p className="text-xs text-on-surface-variant">SKU: COL-FAB-MID-02</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 rounded-full bg-secondary-container/20 text-on-secondary-container text-xs font-bold">Recycled Fabric</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex gap-1">
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-primary text-on-primary text-[10px] font-bold">S</span>
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-primary text-on-primary text-[10px] font-bold">M</span>
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-primary text-on-primary text-[10px] font-bold">L</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
                                                        <div className="bg-error h-full rounded-full" style={{ width: "12%" }}></div>
                                                    </div>
                                                    <span className="text-sm font-bold text-error">Low Stock (5)</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 hover:bg-primary-fixed rounded-full text-primary transition-all">
                                                        <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-error-container rounded-full text-error transition-all">
                                                        <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-surface-container-low transition-colors group">
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-16 h-16 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
                                                        <img alt="Emerald Vegan Leather Collar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="luxurious emerald green vegan apple-leather collar with gold plated hardware on a minimalist background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC1qsGsd7BPIAx_4N7D6LrDQJqeiUXN6LglPnkBE4TTP0BNIfxSsL1cNAhROJ-CJwE3RpYlDZhAVp_qFKBsGzWbHTChqy1Xu-bTZCDFX-BLrP-T3APVAWyiA-aVPV-nWocsoYrb95D59pOG72nMVGUZHFK37CBJK99lUU6_uJbB7FVZsB0jOVfAWkB2gEH-WPG53a7HjZY-CmFeGl7qoJZFjByFhHhwEg1Edvc2EYSgKSnWPcy1bzKT3dK1wWT6-3N5r93zY_3Azpf" />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-on-surface">Emerald Luxe (Vegan)</p>
                                                        <p className="text-xs text-on-surface-variant">SKU: COL-VEG-EMR-03</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">Vegan Leather</span>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex gap-1">
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-surface-container text-[10px] font-bold">S</span>
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-surface-container text-[10px] font-bold">M</span>
                                                    <span className="w-6 h-6 flex items-center justify-center rounded bg-primary text-on-primary text-[10px] font-bold">L</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-24 h-1.5 bg-surface-container rounded-full overflow-hidden">
                                                        <div className="bg-primary h-full rounded-full" style={{ width: "55%" }}></div>
                                                    </div>
                                                    <span className="text-sm font-bold text-on-surface">28 units</span>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 hover:bg-primary-fixed rounded-full text-primary transition-all">
                                                        <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-error-container rounded-full text-error transition-all">
                                                        <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-6 py-4 bg-surface-container-low flex justify-between items-center">
                                <p className="text-xs font-bold text-on-surface-variant">Showing 1 to 3 of 12 collars</p>
                                <div className="flex gap-2">
                                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
                                        <span className="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
                                    </button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-on-primary text-xs font-bold">1</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant text-on-surface-variant text-xs font-bold transition-colors">2</button>
                                    <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-variant text-on-surface-variant transition-colors">
                                        <span className="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}