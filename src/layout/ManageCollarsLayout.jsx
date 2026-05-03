import { useState, useRef, useEffect } from "react"
import Sidebar from "../components/Sidebar"
import { useProduct } from "../context/useProduct"
import Swal from "sweetalert2"

function ProductModal({ isOpen, onClose, onSave, initialData, title, categoryOptions }) {
    const fileInputRef = useRef(null)
    const [form, setForm] = useState(initialData)
    const [preview, setPreview] = useState(initialData?.src || "")
    const [imgTab, setImgTab] = useState("url")

    useEffect(() => {
        setForm(initialData)
        setPreview(initialData?.src || "")
    }, [initialData, isOpen])

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (!file) return
        const reader = new FileReader()
        reader.onload = (ev) => {
            setPreview(ev.target.result)
            setForm(f => ({ ...f, src: ev.target.result }))
        }
        reader.readAsDataURL(file)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.price) return
        onSave({ ...form, price: Number(form.price) })
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-surface-container-high">
                    <h2 className="text-xl font-black text-on-surface">{title}</h2>
                    <button onClick={onClose} className="w-9 h-9 rounded-full hover:bg-surface-container-low flex items-center justify-center">
                        <span className="material-symbols-outlined text-on-surface-variant">close</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">
                    <div className="space-y-3">
                        <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Product Image</label>
                        <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-surface-container-low border-2 border-dashed border-outline-variant/40 flex items-center justify-center">
                            {preview ? (
                                <>
                                    <img src={preview} alt="preview" className="w-full h-full object-cover" />
                                    <button type="button" onClick={() => { setPreview(""); setForm(f => ({ ...f, src: "" })) }}
                                        className="absolute top-2 right-2 w-8 h-8 bg-black/50 text-white rounded-full flex items-center justify-center hover:bg-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </>
                            ) : (
                                <div className="text-center">
                                    <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 block">image</span>
                                    <p className="text-xs text-on-surface-variant">No image selected</p>
                                </div>
                            )}
                        </div>
                        <div className="flex gap-1 bg-surface-container-low p-1 rounded-xl">
                            <button type="button" onClick={() => setImgTab("url")}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${imgTab === "url" ? "bg-white shadow text-on-surface" : "text-on-surface-variant"}`}>Image URL</button>
                            <button type="button" onClick={() => setImgTab("file")}
                                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all ${imgTab === "file" ? "bg-white shadow text-on-surface" : "text-on-surface-variant"}`}>Upload File</button>
                        </div>
                        {imgTab === "url" ? (
                            <input type="url" placeholder="https://example.com/image.jpg" value={form?.src || ""}
                                onChange={e => { setForm(f => ({ ...f, src: e.target.value })); setPreview(e.target.value) }}
                                className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                        ) : (
                            <button type="button" onClick={() => fileInputRef.current?.click()}
                                className="w-full flex items-center justify-center gap-2 bg-surface-container-low border-2 border-dashed border-outline-variant/40 rounded-xl py-3 text-sm font-bold text-on-surface-variant hover:border-primary/40 hover:text-primary transition-all">
                                <span className="material-symbols-outlined text-lg">upload</span> Choose File
                            </button>
                        )}
                        <input ref={fileInputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Product Name *</label>
                        <input type="text" required placeholder="e.g. Cognac Leather Collar" value={form?.name || ""}
                            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                            className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Price (USD) *</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 -translate-y-1/2 font-black text-on-surface-variant">$</span>
                            <input type="number" required min="0" step="0.01" placeholder="0.00"
                                value={form?.price === 0 ? "" : form?.price || ""}
                                onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
                                className="w-full bg-surface-container-low rounded-xl pl-8 pr-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/30" />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Short Description</label>
                        <input type="text" placeholder="e.g. Small - Large sizes" value={form?.desc || ""}
                            onChange={e => setForm(f => ({ ...f, desc: e.target.value }))}
                            className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Long Description</label>
                        <textarea rows={3} placeholder="Detailed product description..." value={form?.longDesc || ""}
                            onChange={e => setForm(f => ({ ...f, longDesc: e.target.value }))}
                            className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30" />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-black uppercase text-on-surface-variant tracking-wider">Category *</label>
                        <select
                            required
                            value={form?.category || ""}
                            onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                            className="w-full bg-surface-container-low rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/30"
                        >
                            <option value="" disabled>Select a category</option>
                            {categoryOptions?.map(opt => (
                                <option key={opt} value={opt}>{opt}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex gap-3 pt-2">
                        <button type="button" onClick={onClose}
                            className="flex-1 py-3.5 bg-surface-container-low rounded-xl font-bold text-sm hover:bg-surface-container transition-all">Cancel</button>
                        <button type="submit"
                            className="flex-1 py-3.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-black text-sm shadow-lg hover:opacity-90 active:scale-[0.98] transition-all">Save Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default function ManageCollarsLayout() {
    const { products, addProduct, updateProduct, deleteProduct } = useProduct()
    const collarProducts = products.filter(p =>
        p.category?.toLowerCase().includes('collar') ||
        p.category?.toLowerCase().includes('signature') ||
        p.name.toLowerCase().includes('collar')
    )

    const defaultForm = { name: "", price: "", category: "Paws & Play Signature", desc: "", longDesc: "", src: "", badge: null }

    const [addOpen, setAddOpen] = useState(false)
    const [editOpen, setEditOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)

    const handleAdd = (data) => {
        addProduct({ ...data })
        Swal.fire({
            title: "Success!",
            text: "Product added successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        })
    }
    const handleEdit = (data) => {
        updateProduct(selectedProduct.id, data)
        setSelectedProduct(null)
        Swal.fire({
            title: "Success!",
            text: "Product updated successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        })
    }
    const confirmDelete = (product) => {
        Swal.fire({
            title: 'Delete Product?',
            text: `Are you sure you want to delete "${product.name}"? This action cannot be undone.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(product.id)
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your product has been deleted.',
                    icon: 'success',
                    timer: 1500,
                    showConfirmButton: false
                })
            }
        })
    }

    return (
        <>
            <div className="flex">
                <Sidebar />
                <main className="flex-1 min-w-0">
                    <div className="p-8 lg:p-12 space-y-8 max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <h1 className="text-5xl font-extrabold text-on-surface tracking-tight">Manage Collars</h1>
                                <p className="text-on-surface-variant mt-1">{collarProducts.length} products in catalog</p>
                            </div>
                            <button onClick={() => setAddOpen(true)}
                                className="flex items-center gap-2 bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
                                <span className="material-symbols-outlined">add</span>
                                Add New Collar
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: "Total Collars", value: collarProducts.length, icon: "pets", color: "text-primary", bg: "bg-primary-fixed" },
                                { label: "Avg Price", value: collarProducts.length ? `$${(collarProducts.reduce((s, p) => s + p.price, 0) / collarProducts.length).toFixed(2)}` : "$0", icon: "payments", color: "text-secondary", bg: "bg-secondary-container/20" },
                                { label: "Top Seller", value: "Leather", icon: "trending_up", color: "text-tertiary", bg: "bg-tertiary-container/20" }
                            ].map((s, i) => (
                                <div key={i} className={`p-6 rounded-xl ${s.bg} space-y-3`}>
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{s.label}</span>
                                        <span className={`material-symbols-outlined ${s.color}`}>{s.icon}</span>
                                    </div>
                                    <h4 className="text-3xl font-black text-on-surface">{s.value}</h4>
                                </div>
                            ))}
                        </div>

                        <div className="bg-surface-container-lowest rounded-2xl shadow-[0_4px_24px_rgba(25,28,29,0.06)] overflow-hidden border border-outline-variant/10">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="bg-surface-container-low">
                                            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant">Product</th>
                                            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant">Category</th>
                                            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant">Price</th>
                                            <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-surface-container-high">
                                        {collarProducts.length === 0 ? (
                                            <tr>
                                                <td colSpan={4} className="px-6 py-16 text-center text-on-surface-variant">
                                                    <span className="material-symbols-outlined text-5xl block mb-3">pets</span>
                                                    No collar products yet. Click "Add New Collar" to get started.
                                                </td>
                                            </tr>
                                        ) : collarProducts.map(product => (
                                            <tr key={product.id} className="hover:bg-surface-container-low/50 transition-colors group">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                                                            {product.src ? (
                                                                <img src={product.src} alt={product.name} className="w-full h-full object-cover" />
                                                            ) : (
                                                                <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                                                                    <span className="material-symbols-outlined">image</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-on-surface">{product.name}</p>
                                                            <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-1">{product.desc}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className="px-3 py-1 bg-tertiary-container/20 text-on-tertiary-container rounded-full text-xs font-bold">
                                                        {product.category}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-black text-primary">${Number(product.price).toFixed(2)}</td>
                                                <td className="px-6 py-4">
                                                    <div className="flex justify-end gap-1">
                                                        <button onClick={() => { setSelectedProduct(product); setEditOpen(true) }}
                                                            className="p-2 rounded-full hover:bg-primary-fixed text-primary transition-all" title="Edit">
                                                            <span className="material-symbols-outlined text-xl">edit</span>
                                                        </button>
                                                        <button onClick={() => confirmDelete(product)}
                                                            className="p-2 rounded-full hover:bg-error-container text-error transition-all" title="Delete">
                                                            <span className="material-symbols-outlined text-xl">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {collarProducts.length > 0 && (
                                <div className="px-6 py-4 border-t border-surface-container-high">
                                    <p className="text-xs font-bold text-on-surface-variant">Showing {collarProducts.length} collar product{collarProducts.length !== 1 ? "s" : ""}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            </div>

            <ProductModal isOpen={addOpen} onClose={() => setAddOpen(false)} onSave={handleAdd} initialData={defaultForm} title="Add New Collar Product" categoryOptions={["Paws & Play Signature", "Leather Collars", "Nylon Collars", "Harnesses"]} />
            <ProductModal isOpen={editOpen} onClose={() => { setEditOpen(false); setSelectedProduct(null) }} onSave={handleEdit} initialData={selectedProduct || defaultForm} title="Edit Collar Product" categoryOptions={["Paws & Play Signature", "Leather Collars", "Nylon Collars", "Harnesses"]} />
        </>
    )
}