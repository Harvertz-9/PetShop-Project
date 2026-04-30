import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { useProduct } from "../context/useProduct"

export default function ManageCollarsLayout() {
    const { products, addProduct } = useProduct()
    const collarProducts = products.filter(p => p.category?.toLowerCase().includes('collar') || p.category?.toLowerCase().includes('signature') || p.name.toLowerCase().includes('collar'))

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newCollar, setNewCollar] = useState({
        name: "",
        price: 0,
        category: "Paws & Play Signature",
        desc: "",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAlJFa8SnFf2rhp4IgD3TIhJigW_TiyX_BQRKL6Sul6lVO1i7YtJLqQlRFo_5NPsxgyyUYQaTzgnKC65kupL24sC1LzAWy712TfAb35eTFp651Kfe2moTrOmNtZPHEj5fstdZ-G2g0Mx4y4DqeWsUlIpigwiRFGn1IggyqCWbN-mycVteMJt_Y3aTdNOhHIoteQfeWTrS7EbsCmzUXziKgnLYrSJpp3blHH3Ova45CxstsQAXZQ6gThAhK4q78XQEb4A324FClZo27_"
    })

    const handleAdd = (e) => {
        e.preventDefault();
        if(!newCollar.name || !newCollar.price) return;
        addProduct({
            ...newCollar,
            price: Number(newCollar.price),
        });
        setIsAddModalOpen(false);
        setNewCollar({...newCollar, name: "", price: 0, desc: ""});
    }
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 flex flex-col min-w-0">
                    <div className="p-8 lg:p-12 space-y-8 max-w-7xl mx-auto w-full">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="space-y-2">
                                <h1 className="text-4xl font-extrabold text-on-surface tracking-tight leading-none">Manage Collars</h1>
                            </div>
                            <button onClick={() => setIsAddModalOpen(true)} className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all w-fit">
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
                                        {collarProducts.map(product => (
                                            <tr key={product.id} className="hover:bg-surface-container-low transition-colors group">
                                                <td className="px-6 py-5">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-16 h-16 rounded-lg bg-slate-200 overflow-hidden flex-shrink-0">
                                                            <img alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={product.src} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-on-surface">{product.name}</p>
                                                            <p className="text-xs text-on-surface-variant">Category: {product.category}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-5">
                                                    <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-on-tertiary-container text-xs font-bold">Material</span>
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
                                                        <span className="text-sm font-bold text-on-surface">${product.price.toFixed(2)}</span>
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
                                        ))}
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
                
                {isAddModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-6">Add New Collar Product</h2>
                            <form onSubmit={handleAdd} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-on-surface-variant mb-1">Product Name</label>
                                    <input type="text" required value={newCollar.name} onChange={e => setNewCollar({...newCollar, name: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-on-surface-variant mb-1">Price ($)</label>
                                    <input type="number" step="0.01" required value={newCollar.price} onChange={e => setNewCollar({...newCollar, price: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-on-surface-variant mb-1">Description</label>
                                    <textarea value={newCollar.desc} onChange={e => setNewCollar({...newCollar, desc: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30 resize-none" rows="3"></textarea>
                                </div>
                                <div className="flex gap-4 pt-4">
                                    <button type="button" onClick={() => setIsAddModalOpen(false)} className="flex-1 bg-surface-container hover:bg-surface-container-high py-3 rounded-xl font-bold transition-all">Cancel</button>
                                    <button type="submit" className="flex-1 bg-primary text-white hover:bg-primary/90 py-3 rounded-xl font-bold transition-all">Save Product</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}