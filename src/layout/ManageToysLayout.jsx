import { useState } from "react"
import Sidebar from "../components/Sidebar"
import { useProduct } from "../context/useProduct"

export default function ManageToysLayout() {
    const { products, addProduct } = useProduct()
    const toyProducts = products.filter(p => p.category?.toLowerCase().includes('toy') || p.name.toLowerCase().includes('toy') || p.name.toLowerCase().includes('ball') || p.name.toLowerCase().includes('rope'))

    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [newToy, setNewToy] = useState({
        name: "",
        price: 0,
        category: "Eco Toys",
        desc: "",
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_JhvEKmR4GXO0fAHF1iEJTdDNejO_QwHpbz8B9dmCMorRKRfy8jYBYqEhixKHB8Tm8mc_vLF86eYv4bUYfUouHY8r78pAOif9yIkjBaZl4utjicdOhsGC0Ds_4sqPzAtSOQt95ghpL6qkNOFnCOA0MeuprEIx90urkdJv3N1bh7LJ1F9Fx6bdb6W0TR1zP2kXaJu8ByicNpKpdGtUp-mgTYymRJu0CzHAcp5DC-m-BFmhselhjKo62jSMi35wvEckU_b0ECt7_2j"
    })

    const handleAdd = (e) => {
        e.preventDefault();
        if(!newToy.name || !newToy.price) return;
        addProduct({
            ...newToy,
            price: Number(newToy.price),
        });
        setIsAddModalOpen(false);
        setNewToy({...newToy, name: "", price: 0, desc: ""});
    }
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 min-w-0">
                    <div className="p-8 max-w-7xl mx-auto space-y-8">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <h2 className="text-4xl font-extrabold text-on-surface tracking-tight">Manage Toys</h2>
                            <button onClick={() => setIsAddModalOpen(true)} className="flex items-center justify-center  max-w-sm space-x-2 bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-orange-100 hover:scale-105 active:scale-95 transition-all">
                                <span className="material-symbols-outlined" data-icon="add">add</span>
                                <span>Add New Toy</span>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-on-surface-variant">Total Toys</p>
                                    <p className="text-2xl font-black">1,248</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                    <span className="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                                </div>
                            </div>
                            <div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-on-surface-variant">Low Stock</p>
                                    <p className="text-2xl font-black text-error">12 Items</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-error shadow-sm">
                                    <span className="material-symbols-outlined" data-icon="warning" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                                </div>
                            </div>
                            <div className="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-on-surface-variant">New This Week</p>
                                    <p className="text-2xl font-black text-secondary">42 SKUs</p>
                                </div>
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                                    <span className="material-symbols-outlined" data-icon="new_releases">new_releases</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-surface-container-low border-none">
                                            <th className="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant">Product Name</th>
                                            <th className="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant">Stock Level</th>
                                            <th className="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant">Price</th>
                                            <th className="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-surface-variant/20">
                                        {toyProducts.map(product => (
                                            <tr key={product.id} className="hover:bg-surface-bright transition-colors group">
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                                            <img alt={product.name} className="w-full h-full object-cover" src={product.src} />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-lg text-on-surface">{product.name}</p>
                                                            <p className="text-sm text-on-surface-variant">Category: {product.category}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6">
                                                    <div className="flex flex-col gap-1">
                                                        <div className="flex items-center space-x-2">
                                                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                                            <span className="font-bold">In stock</span>
                                                        </div>
                                                        <div className="w-32 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                                            <div className="h-full bg-secondary w-[60%] rounded-full"></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-6 font-bold text-on-surface">${product.price.toFixed(2)}</td>
                                                <td className="px-8 py-6">
                                                    <div className="flex justify-end space-x-2">
                                                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-orange-50 hover:text-primary transition-all">
                                                            <span className="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                                                        </button>
                                                        <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-error transition-all">
                                                            <span className="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-8 py-4 bg-surface-container-lowest flex items-center justify-between border-t border-surface-variant/10">
                                <span className="text-sm text-on-surface-variant font-medium">Showing 1 to 3 of 128 toys</span>
                                <div className="flex space-x-2">
                                    <button className="px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">Previous</button>
                                    <button className="px-4 py-2 rounded-full text-sm font-bold bg-primary text-white shadow-md transition-all">1</button>
                                    <button className="px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">2</button>
                                    <button className="px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                {isAddModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-2xl w-full max-w-md">
                            <h2 className="text-2xl font-bold mb-6">Add New Toy Product</h2>
                            <form onSubmit={handleAdd} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-on-surface-variant mb-1">Product Name</label>
                                    <input type="text" required value={newToy.name} onChange={e => setNewToy({...newToy, name: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-on-surface-variant mb-1">Price ($)</label>
                                    <input type="number" step="0.01" required value={newToy.price} onChange={e => setNewToy({...newToy, price: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-on-surface-variant mb-1">Description</label>
                                    <textarea value={newToy.desc} onChange={e => setNewToy({...newToy, desc: e.target.value})} className="w-full bg-surface-container p-3 rounded-lg border border-outline-variant/30 resize-none" rows="3"></textarea>
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
