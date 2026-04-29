import { useState, useMemo } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useCart } from "../context/useCart"
import { PRODUCTS } from "../data/products"


export default function ProductLayout() {
    const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)
    const [addedId, setAddedId] = useState(null) // feedback animasi
    const { addToCart } = useCart()
    const navigate = useNavigate()

    const categories = useMemo(() => {
        const allCategories = PRODUCTS.map(p => p.category).filter(Boolean)
        return [...new Set(allCategories)]
    }, [])

    const [selectedCategories, setSelectedCategories] = useState([])

    const toggleCategory = (category) => {
        setSelectedCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        )
    }

    const filteredProducts = useMemo(() => {
        if (selectedCategories.length === 0) return PRODUCTS
        return PRODUCTS.filter(product => selectedCategories.includes(product.category))
    }, [selectedCategories])

    const handleAddToCart = (e, product) => {
        e.preventDefault()  // mencegah Link navigate
        e.stopPropagation()
        addToCart(product)
        setAddedId(product.id)
        setTimeout(() => setAddedId(null), 1500)
    }

    const handleBuyNow = (e, product) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart(product)
        navigate("/checkout")
    }

    return (
        <>
            <Navbar />
            <main className="max-w-screen-2xl mx-auto px-4 pt-20 md:px-8 py-6 md:py-12">

                {/* Hero Section - sama seperti sebelumnya */}
                <section className="mb-12 md:mb-16 relative overflow-hidden rounded-lg bg-surface-container-low p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                    <div className="flex-1 z-10 text-center lg:text-left w-full lg:w-auto">
                        <span className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 font-label">Summer Collection</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold font-headline leading-tight mb-6 text-on-surface">
                            Playtime <br /><span className="text-primary">Redefined.</span>
                        </h1>
                        <p className="text-base md:text-lg text-on-surface-variant max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
                            Discover our editorially curated selection of toys and essentials designed for the most discerning companions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold transition-all hover:-translate-y-0.5 hover:shadow-lg">Shop Best Sellers</button>
                            <button className="text-primary font-bold px-8 py-4 flex items-center justify-center gap-2 group">
                                View Lookbook
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[300px] md:h-[400px] lg:h-[450px] w-full mt-8 lg:mt-0 max-w-2xl mx-auto lg:max-w-none">
                        <img
                            className="absolute inset-0 h-full w-full object-cover rounded-lg shadow-2xl z-0 scale-105 rotate-2"
                            alt="A joyful golden retriever"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwVR2FM6A43jk8ObwrYfOb9HzxlW5Tzm-VBDvg2ANxSbW7y-LTO_HYUFhfQdcyYevoT0AZABOyMya3nzmC_b7aDFo2-_6tK2rsmWsNFTCJueU5RVTnjjf0aw_i-6CYypfrwIYzsVt3Uee6DScdzyxzEC0ovJssBkwp2bDv2m9BfiREXA4u9H3dTSMEnm4Ay1lYD_g0sn3YeE8eNb9h83x3SIK12YbBHoEKd1EGDZBk4sotSeaGjkPuLxwL6RJRM4iahnmFhyszulFJ"
                        />
                    </div>
                </section>

                {/* Filter + Product Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr] gap-8 md:gap-12">

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden flex justify-between items-center mb-4">
                        <button onClick={() => setFilterDrawerOpen(true)} className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-lg font-bold text-sm">
                            <span className="material-symbols-outlined text-xl">tune</span>
                            Filters
                        </button>
                        <div className="flex items-center gap-2">
                            <span className="text-xs font-medium text-on-surface-variant">Sort:</span>
                            <select className="bg-transparent border-none text-sm font-bold p-0 focus:ring-0">
                                <option>Featured</option>
                                <option>Newest</option>
                                <option>Price: Low to High</option>
                            </select>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="hidden lg:block space-y-10">
                        <div>
                            <h3 className="font-headline font-bold text-lg mb-6">Categories</h3>
                            <div className="flex flex-col gap-3">
                                {categories.map(category => (
                                    <div 
                                        key={category}
                                        className="flex items-center gap-3 cursor-pointer group"
                                        onClick={() => toggleCategory(category)}
                                    >
                                        {selectedCategories.includes(category) ? (
                                            <div className="w-4 h-4 rounded border-2 border-primary bg-primary flex items-center justify-center">
                                                <span className="material-symbols-outlined text-[10px] text-white">check</span>
                                            </div>
                                        ) : (
                                            <div className="w-4 h-4 rounded border-2 border-outline-variant group-hover:border-primary transition-colors"></div>
                                        )}
                                        <span className={`text-sm ${selectedCategories.includes(category) ? 'font-bold text-on-surface' : 'font-medium text-on-surface-variant'}`}>
                                            {category}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="space-y-8">
                        <div className="hidden lg:flex justify-between items-end">
                            <div>
                                <p className="text-[10px] font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Showing {filteredProducts.length > 0 ? 1 : 0}-{filteredProducts.length} of {PRODUCTS.length} products</p>
                                <h2 className="text-2xl font-bold font-headline">The Essentials</h2>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                            {filteredProducts.map(product => (
                                <Link key={product.id} to={`/product/${product.id}`} className="group cursor-pointer">
                                    <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                        <img
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            alt={product.name}
                                            src={product.src}
                                        />
                                        {product.badge && (
                                            <span className={`absolute top-2 left-2 ${product.badgeStyle} px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm`}>
                                                {product.badge}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-[10px] text-on-surface-variant mb-2">{product.desc}</p>
                                    <div className="flex items-center justify-between gap-1">
                                        <p className="font-bold text-primary text-sm">${product.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-1">
                                            {/* Tombol Buy Now → langsung ke checkout */}
                                            <button
                                                onClick={(e) => handleBuyNow(e, product)}
                                                className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all"
                                            >
                                                Buy
                                            </button>
                                            {/* Tombol Add to Cart */}
                                            <button
                                                onClick={(e) => handleAddToCart(e, product)}
                                                className={`w-7 h-7 border rounded-full flex items-center justify-center transition-all ${addedId === product.id
                                                    ? "bg-primary border-primary text-on-primary"
                                                    : "border-outline-variant text-on-surface hover:bg-surface-container"
                                                    }`}
                                            >
                                                <span className="material-symbols-outlined text-base">
                                                    {addedId === product.id ? "check" : "shopping_cart"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="flex justify-center pt-8 md:pt-12">
                            <button className="bg-surface-container-highest px-8 py-2.5 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all w-full md:w-auto text-sm">
                                Load More Products
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Filter Drawer */}
                {filterDrawerOpen && (
                    <div className="fixed inset-0 z-[60] lg:hidden">
                        <div onClick={() => setFilterDrawerOpen(false)} className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                        <div className="absolute right-0 top-0 h-full w-[80%] max-w-[320px] bg-white p-6 overflow-y-auto flex flex-col gap-8 shadow-2xl">
                            <div className="flex justify-between items-center">
                                <h2 className="font-headline font-bold text-xl">Filters</h2>
                                <button onClick={() => setFilterDrawerOpen(false)} className="p-1">
                                    <span className="material-symbols-outlined text-2xl">close</span>
                                </button>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-headline font-bold text-sm mb-4">Categories</h3>
                                    <div className="flex flex-col gap-3">
                                        {categories.map(category => (
                                            <label key={category} className="flex items-center gap-3">
                                                <input 
                                                    className="rounded text-primary focus:ring-primary w-4 h-4" 
                                                    type="checkbox"
                                                    checked={selectedCategories.includes(category)}
                                                    onChange={() => toggleCategory(category)}
                                                />
                                                <span className={`text-sm ${selectedCategories.includes(category) ? 'font-bold' : ''}`}>
                                                    {category}
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-headline font-bold text-sm mb-4">Price Range</h3>
                                    <div className="flex gap-2">
                                        <input className="w-full bg-surface-container-low border-none rounded-lg p-2 text-xs" placeholder="Min" type="number" />
                                        <input className="w-full bg-surface-container-low border-none rounded-lg p-2 text-xs" placeholder="Max" type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto pt-6 flex flex-col gap-3">
                                <button onClick={() => setFilterDrawerOpen(false)} className="bg-primary text-on-primary py-3.5 rounded-xl font-bold w-full text-sm">
                                    Apply Filters
                                </button>
                                <button onClick={() => setSelectedCategories([])} className="text-on-surface-variant font-bold text-xs w-full">Clear All</button>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}