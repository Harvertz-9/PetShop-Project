import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "../context/useCart"
import { PRODUCTS } from "../data/products"

export default function DetailProductLayout({ product }) {
    const navigate = useNavigate()
    const { addToCart, totalItems } = useCart()
    const [qty, setQty] = useState(1)
    const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)
    const [added, setAdded] = useState(false)
    const [cartAnim, setCartAnim] = useState(false)

    useEffect(() => {
        setQty(1)
        setIsReadMoreOpen(false)
    }, [product])

    const handleIncrease = () => setQty(prev => prev + 1)
    const handleDecrease = () => setQty(prev => Math.max(1, prev - 1))

    const handleAddToCart = () => {
        addToCart(product, qty)
        setAdded(true)
        setCartAnim(true)
        setTimeout(() => setCartAnim(false), 300)
        setTimeout(() => setAdded(false), 1500)
    }

    const handleBuyNow = () => {
        addToCart(product, qty)
        navigate("/checkout")
    }

    if (!product) return null;

    const youMayAlsoLike = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4)

    return (
        <>
            <nav className="fixed top-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none bg-white/80 backdrop-blur-lg">
                <div className="max-w-7xl mx-auto w-full pointer-events-auto flex justify-between items-center">
                    <Link to='/CatalogProduct' className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 shadow-[0_20px_40px_rgba(25,28,29,0.06)] group hover:bg-surface-container-lowest transition-all duration-300 active:scale-95">
                        <span className="material-symbols-outlined text-primary font-bold">arrow_back</span>
                        <span className="font-headline font-bold text-on-surface-variant tracking-tight text-sm">Back</span>
                    </Link>
                    
                    <Link to="/cart" className="relative p-2.5 bg-white/60 shadow-[0_20px_40px_rgba(25,28,29,0.06)] text-on-surface hover:bg-surface-container-lowest rounded-full transition-all duration-300 active:scale-95">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {totalItems > 0 && (
                            <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-on-primary text-[10px] font-black rounded-full flex items-center justify-center">
                                {totalItems > 9 ? "9+" : totalItems}
                            </span>
                        )}
                    </Link>
                </div>
            </nav>
            <main className="pt-28 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div className="relative w-full">
                        <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_15px_30px_rgba(25,28,29,0.05)]">
                            <img alt={product.name} className="w-full h-auto aspect-[4/5] lg:aspect-square object-cover" src={product.src} />
                            {product.badge && (
                                <div className="absolute top-4 right-4">
                                    <span className={`${product.badgeStyle || "bg-tertiary-container text-on-tertiary-container"} backdrop-blur-md px-4 py-1.5 rounded-full font-label text-[10px] font-bold tracking-widest uppercase`}>{product.badge}</span>
                                </div>
                            )}
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <header className="space-y-3">
                            <div className="space-y-1">
                                <p className="text-primary font-label font-bold text-xs tracking-[0.2em] uppercase">{product.category}</p>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tight">
                                    {product.name}
                                </h1>
                            </div>
                            <div className="flex items-center gap-5">
                                <span className="text-3xl font-headline font-bold text-on-surface">${product.price.toFixed(2)}</span>
                                <div className="flex items-center bg-secondary-container/30 px-3 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-on-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="text-on-secondary-container font-label text-xs font-bold ml-1">{product.rating || "4.9"} / 5.0</span>
                                </div>
                            </div>
                        </header>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className={`text-base lg:text-lg leading-relaxed text-on-surface-variant font-body transition-all duration-300 ${!isReadMoreOpen ? 'line-clamp-3' : ''}`}>
                                    {product.longDesc || product.desc}
                                </p>
                                <button onClick={() => setIsReadMoreOpen(!isReadMoreOpen)} className="text-primary font-headline font-bold text-sm underline underline-offset-8 hover:text-primary-container transition-colors inline-flex items-center group">
                                    {isReadMoreOpen ? "Show Less" : "Read More"}
                                    <span className={`material-symbols-outlined ml-1 transition-transform ${isReadMoreOpen ? 'rotate-180' : 'group-hover:translate-x-1'}`}>
                                        {isReadMoreOpen ? 'expand_less' : 'chevron_right'}
                                    </span>
                                </button>
                            </div>
                            <div className="p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 space-y-8">
                                <div className="space-y-4">
                                    <label className="font-label font-bold text-xs uppercase tracking-wider text-on-surface-variant">Select Variant</label>
                                    <div className="flex flex-wrap gap-3">
                                        <button className="w-16 h-16 rounded-xl overflow-hidden border-2 border-primary shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95">
                                            <img src={product.src} alt="Variant" className="w-full h-full object-cover" />
                                        </button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <div className="flex items-center bg-surface-container-highest rounded-xl p-1 w-full sm:w-auto border border-outline-variant/10">
                                            <button onClick={handleDecrease} className="w-12 h-12 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-lowest active:scale-90 transition-all">
                                                <span className="material-symbols-outlined">remove</span>
                                            </button>
                                            <input 
                                                type="number" 
                                                min="1" 
                                                value={qty} 
                                                onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
                                                className="w-14 bg-transparent font-headline font-bold text-on-surface text-center focus:outline-none focus:ring-0 border-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                                            />
                                            <button onClick={handleIncrease} className="w-12 h-12 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-lowest active:scale-90 transition-all">
                                                <span className="material-symbols-outlined">add</span>
                                            </button>
                                        </div>
                                        <button onClick={handleAddToCart} className={`flex-1 w-full flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container py-4 px-8 rounded-xl font-headline font-bold hover:brightness-105 shadow-[0_10px_20px_rgba(105,229,255,0.2)] active:scale-[0.98] transition-all duration-300 ${cartAnim ? 'scale-[1.03] shadow-[0_15px_30px_rgba(105,229,255,0.4)] ring-4 ring-secondary-container/30 bg-primary text-on-primary' : ''}`}>
                                            <span className={`material-symbols-outlined transition-all ${cartAnim ? 'scale-125' : ''}`}>
                                                {added ? "check" : "shopping_cart"}
                                            </span>
                                            {added ? "Added!" : "Add to Cart"}
                                        </button>
                                    </div>
                                    <button onClick={handleBuyNow} className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-xl font-headline font-extrabold text-lg shadow-[0_20px_40px_rgba(143,78,0,0.2)] hover:shadow-[0_25px_50px_rgba(143,78,0,0.3)] transition-all active:scale-[0.98]">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/15">
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1"}}>package_2</span>
                                    <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant leading-tight">Fast Shipping</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1"}}>workspace_premium</span>
                                    <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant leading-tight">Lifetime Warranty</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-2">
                                    <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1"}}>verified_user</span>
                                    <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant leading-tight">Secure Payment</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="mt-24 lg:mt-32">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl md:text-3xl font-headline font-extrabold text-on-surface">You May Also Like</h2>
                        <a className="text-primary font-headline font-bold text-sm flex items-center hover:opacity-80 transition-opacity" href="#">
                            <span>View All</span>
                            <span className="material-symbols-outlined ml-1 text-base">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {youMayAlsoLike.map(item => (
                            <Link key={item.id} to={`/product/${item.id}`} onClick={() => window.scrollTo(0,0)} className="group cursor-pointer block">
                                <div className="relative aspect-[1/1] bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                    <img alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src={item.src} />
                                    {item.badge && (
                                        <span className={`absolute top-2 left-2 ${item.badgeStyle || 'bg-white/90 text-on-surface'} backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm`}>{item.badge}</span>
                                    )}
                                </div>
                                <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">{item.name}</h3>
                                <p className="text-[10px] text-on-surface-variant mb-2">{item.desc}</p>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-primary text-sm">${item.price.toFixed(2)}</p>
                                    <div className="flex items-center gap-1">
                                        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(item, 1); navigate("/checkout"); }} className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                        <button onClick={(e) => { e.preventDefault(); e.stopPropagation(); addToCart(item, 1); }} className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
            <div className="fixed top-0 right-0 -z-50 opacity-10 lg:opacity-20 pointer-events-none">
                <svg fill="none" height="800" viewbox="0 0 600 600" width="800" xmlns="http://www.w3.org/2000/svg">
                    <path d="M477.5 130.5C538.5 204.5 586.5 304.5 558.5 385.5C530.5 466.5 426.5 528.5 330.5 548.5C234.5 568.5 146.5 546.5 89.5 481.5C32.5 416.5 6.5 308.5 28.5 214.5C50.5 120.5 120.5 40.5 206.5 15.5C292.5 -9.5 416.5 56.5 477.5 130.5Z" fill="url(#paint0_linear_1_1)"></path>
                    <defs>
                        <lineargradient gradientunits="userSpaceOnUse" id="paint0_linear_1_1" x1="56.5" x2="548.5" y1="41.5" y2="548.5">
                            <stop stop-color="#F99A3F"></stop>
                            <stop offset="1" stop-color="#FFDCC2" stop-opacity="0"></stop>
                        </lineargradient>
                    </defs>
                </svg>
            </div>
        </>
    )
}