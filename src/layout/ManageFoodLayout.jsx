import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { useProduct } from "../context/useProduct"

export default function ManageFoodLayout() {
    const { products, addProduct } = useProduct()
    const foodProducts = products.filter(p => p.category?.toLowerCase().includes('food') || p.name.toLowerCase().includes('salmon') || p.name.toLowerCase().includes('beef') || p.name.toLowerCase().includes('tuna') || p.name.toLowerCase().includes('kibble'))

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newFood, setNewFood] = useState({
        name: "",
        price: 0,
        category: "Artisan Food",
        desc: "",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDasYj_2XclPu1SqHS8_rQxWjl08tMp68M2LXO30nMLTmU8ZKy3s8k4YVKVWh5B9LVk0lMdcxBIUa5Iw7IxPlugRLKh49GUxcbX3yqat4sVyVFs-EeCDxs08DlQ2s6GkNQ_DTkBQ_in1W0-zj_oYDtrdUWD5VbtLcd9UiiovCZOTvqjLLdTlCYryZ7prcHNIp_FSBc3lJTrvvd16kZio_r7FEJEfjAK31-7LA09LP9q23aa0ZLErXT0G1blNMLCr9yFS-s1LCUbVAsp"
    })

    const handleAdd = (e) => {
        e.preventDefault();
        if(!newFood.name || !newFood.price) return;
        addProduct({
            ...newFood,
            price: Number(newFood.price),
        });
        setIsAddModalOpen(false);
        setNewFood({...newFood, name: "", price: 0, desc: ""});
    }
    return (
        <>
            <div className="flex">
            <Sidebar />
            <main className="flex-1 flex flex-col min-w-0">
                <div className="p-8 space-y-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="space-y-2">
                            <h2 className="text-4xl font-extrabold text-on-surface">Manage Food</h2>
                        </div>
                        <button onClick={() => setIsAddModalOpen(true)} className="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
                            <span className="material-symbols-outlined" data-icon="add">add</span>
                            Add New Food
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex items-center gap-4">
                            <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-on-surface-variant">Total SKU</p>
                                <p className="text-2xl font-bold">124 Items</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex items-center gap-4">
                            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-error">
                                <span className="material-symbols-outlined" data-icon="history">history</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-on-surface-variant">Expiring Soon</p>
                                <p className="text-2xl font-bold">8 Batches</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20_40px_rgba(25,28,29,0.06)] flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined" data-icon="trending_up">trending_up</span>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-on-surface-variant">Low Stock</p>
                                <p className="text-2xl font-bold">4 Categories</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-container-low border-none">
                                        <th className="px-8 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest">Product Name</th>
                                        <th className="px-6 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest">Expiry Date</th>
                                        <th className="px-6 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest">Weight (kg)</th>
                                        <th className="px-6 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-center">Stock Level</th>
                                        <th className="px-8 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-surface-variant/20">
                                    {foodProducts.map(product => (
                                        <tr key={product.id} className="hover:bg-surface-container-low transition-colors group">
                                            <td className="px-8 py-5">
                                                <div className="flex items-center gap-4">
                                                    <img alt={product.name} className="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform" src={product.src} />
                                                    <div>
                                                        <p className="font-bold text-on-surface">{product.name}</p>
                                                        <p className="text-xs text-on-surface-variant">{product.desc || product.category}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-5">
                                                <span className="text-on-surface-variant text-sm">Dec 15, 2025</span>
                                            </td>
                                            <td className="px-6 py-5 text-on-surface font-medium">${product.price.toFixed(2)}</td>
                                            <td className="px-6 py-5">
                                                <div className="flex flex-col items-center gap-1">
                                                    <div className="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
                                                        <div className="bg-primary h-full w-[85%] rounded-full"></div>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-primary">In Stock</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-5 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-100 text-on-surface-variant hover:text-primary transition-all">
                                                        <span className="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                                                    </button>
                                                    <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-50 text-on-surface-variant hover:text-error transition-all">
                                                        <span className="material-symbols-outlined text-[18px]" data-icon="delete">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="px-8 py-4 bg-surface-container border-t border-surface-variant/10 flex justify-between items-center">
                            <p className="text-xs font-medium text-on-surface-variant">Showing 1 to 10 of 124 products</p>
                            <div className="flex items-center gap-2">
                                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">
                                    <span className="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                                </button>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold shadow-md">1</button>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">2</button>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">3</button>
                                <button className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">
                                    <span className="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {isAddModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-6">Add New Food Product</h2>
                        <form onSubmit={handleAdd} className="space-y-4">
                            <div>
                                <label className="block text-sm font-bold text-on-surface-variant mb-1">Product Name</label>
                                <input type="text" required value={newFood.name} onChange={e => setNewFood({...newFood, name: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-on-surface-variant mb-1">Price ($)</label>
                                <input type="number" step="0.01" required value={newFood.price} onChange={e => setNewFood({...newFood, price: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-on-surface-variant mb-1">Description</label>
                                <textarea value={newFood.desc} onChange={e => setNewFood({...newFood, desc: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30 resize-none" rows="3"></textarea>
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
