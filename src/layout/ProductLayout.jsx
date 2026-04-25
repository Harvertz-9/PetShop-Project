import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function ProductLayout() {
    const [filterDrawerOpen, setFilterDrawerOpen] = useState(false)

    return (
        <>
            <Navbar />
            <main className="max-w-screen-2xl mx-auto px-4 pt-20 md:px-8 py-6 md:py-12">

                {/* Hero Section */}
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
                            alt="A joyful golden retriever jumping mid-air in a bright, sun-drenched studio"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwVR2FM6A43jk8ObwrYfOb9HzxlW5Tzm-VBDvg2ANxSbW7y-LTO_HYUFhfQdcyYevoT0AZABOyMya3nzmC_b7aDFo2-_6tK2rsmWsNFTCJueU5RVTnjjf0aw_i-6CYypfrwIYzsVt3Uee6DScdzyxzEC0ovJssBkwp2bDv2m9BfiREXA4u9H3dTSMEnm4Ay1lYD_g0sn3YeE8eNb9h83x3SIK12YbBHoEKd1EGDZBk4sotSeaGjkPuLxwL6RJRM4iahnmFhyszulFJ"
                        />
                        <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-lg shadow-xl hidden md:flex z-20">
                            <div className="flex items-center gap-3 md:gap-4">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                                    <span
                                        className="material-symbols-outlined text-sm md:text-base"
                                        style={{ fontVariationSettings: "'FILL' 1" }}
                                    >pets</span>
                                </div>
                                <div>
                                    <p className="font-bold text-xs md:text-sm">Organic Cotton Rope</p>
                                    <p className="text-[10px] md:text-xs text-on-surface-variant">Top Rated Item</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Filter + Product Grid */}
                <div className="flex flex-col lg:grid lg:grid-cols-[240px_1fr] gap-8 md:gap-12">

                    {/* Mobile Filter Toggle */}
                    <div className="lg:hidden flex justify-between items-center mb-4">
                        <button
                            onClick={() => setFilterDrawerOpen(true)}
                            className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-lg font-bold text-sm"
                        >
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

                    {/* Sidebar Filter Desktop */}
                    <aside className="hidden lg:block space-y-10">
                        <div>
                            <h3 className="font-headline font-bold text-lg mb-6">Categories</h3>
                            <div className="flex flex-col gap-3">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-4 h-4 rounded border-2 border-outline-variant group-hover:border-primary transition-colors flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[10px] text-white opacity-0 group-hover:opacity-100 bg-primary w-full h-full flex items-center justify-center">check</span>
                                    </div>
                                    <span className="text-sm font-medium text-on-surface-variant">Chew Toys</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-4 h-4 rounded border-2 border-primary bg-primary flex items-center justify-center">
                                        <span className="material-symbols-outlined text-[10px] text-white">check</span>
                                    </div>
                                    <span className="text-sm font-bold text-on-surface">Artisan Food</span>
                                </label>
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="w-4 h-4 rounded border-2 border-outline-variant group-hover:border-primary transition-colors"></div>
                                    <span className="text-sm font-medium text-on-surface-variant">Boutique Collars</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-headline font-bold text-lg mb-6">Breed Size</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold cursor-pointer">Small</span>
                                <span className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors cursor-pointer">Medium</span>
                                <span className="px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant text-xs font-medium hover:bg-surface-container-highest transition-colors cursor-pointer">Large</span>
                            </div>
                        </div>
                        <div className="bg-secondary-container/20 p-6 rounded-lg">
                            <h4 className="font-headline font-bold text-sm mb-1">Atelier Rewards</h4>
                            <p className="text-[10px] text-on-secondary-fixed-variant mb-3">Earn points on every organic purchase.</p>
                            <button className="text-secondary font-bold text-xs underline">Join Club</button>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="space-y-8">
                        <div className="hidden lg:flex justify-between items-end">
                            <div>
                                <p className="text-[10px] font-bold text-on-surface-variant font-label mb-1 uppercase tracking-wider">Showing 1-12 of 84 products</p>
                                <h2 className="text-2xl font-bold font-headline">The Essentials</h2>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-lg font-medium text-xs">
                                    Sort by: Featured
                                    <span className="material-symbols-outlined text-xs">expand_more</span>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

                            {/* Product Card 1 */}
                            <Link to='/ProductDetail' className="group cursor-pointer">
                                <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Premium leather dog collar with brass hardware" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjUnC4mOdPixnlThKWLXMQPxBdfRuKohYfITSS01si8h1wdvajKJJHmD9tdoc33Kuqiv_7OlTbVrSi1wPELxPBqTmW_CjyLBojWRY04MZnyOXY8Z1iE61lZ6Nq-lARprIr_aHFz9pga4R4jTSi606OQJ2ExN_EcY_H6oOihLuvQZxIi0cV832qPJdiKebNUx8pRDHcYFXAGAJSm1fOvA9vXy7TwOeZHsEFalurG-o5418JzhGn9i2WhdIvinGMZc-FmWTadzCXmiOo" />
                                    <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm">Bestseller</span>
                                </div>
                                <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Cognac Leather Heirloom Collar</h3>
                                <p className="text-[10px] text-on-surface-variant mb-2">Small - Large sizes</p>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-primary text-sm">$85.00</p>
                                    <div className="flex items-center gap-1">
                                        <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                        <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </Link>

                            {/* Product Card 2 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Colorful dog chew toys made of sustainable rubber" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_JhvEKmR4GXO0fAHF1iEJTdDNejO_QwHpbz8B9dmCMorRKRfy8jYBYqEhixKHB8Tm8mc_vLF86eYv4bUYfUouHY8r78pAOif9yIkjBaZl4utjicdOhsGC0Ds_4sqPzAtSOQt95ghpL6qkNOFnCOA0MeuprEIx90urkdJv3N1bh7LJ1F9Fx6bdb6W0TR1zP2kXaJu8ByicNpKpdGtUp-mgTYymRJu0CzHAcp5DC-m-BFmhselhjKo62jSMi35wvEckU_b0ECt7_2j" />
                                    <span className="absolute top-2 left-2 bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm">Eco Friendly</span>
                                </div>
                                <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Sustainable Rubber Trio</h3>
                                <p className="text-[10px] text-on-surface-variant mb-2">Interactive play bundle</p>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-primary text-sm">$42.00</p>
                                    <div className="flex items-center gap-1">
                                        <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                        <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Card 3 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Artisanal grain-free pet food in a minimalist ceramic bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDasYj_2XclPu1SqHS8_rQxWjl08tMp68M2LXO30nMLTmU8ZKy3s8k4YVKVWh5B9LVk0lMdcxBIUa5Iw7IxPlugRLKh49GUxcbX3yqat4sVyVFs-EeCDxs08DlQ2s6GkNQ_DTkBQ_in1W0-zj_oYDtrdUWD5VbtLcd9UiiovCZOTvqjLLdTlCYryZ7prcHNIp_FSBc3lJTrvvd16kZio_r7FEJEfjAK31-7LA09LP9q23aa0ZLErXT0G1blNMLCr9yFS-s1LCUbVAsp" />
                                </div>
                                <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Wild-Caught Salmon &amp; Pea</h3>
                                <p className="text-[10px] text-on-surface-variant mb-2">Artisan Recipe, 5kg</p>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-primary text-sm">$64.00</p>
                                    <div className="flex items-center gap-1">
                                        <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                        <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Card 4 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Ceramic slow-feeder pet bowl with swirl pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDka_GzpMvqGQXlj1604ku6gXO0F5v6x_6yocgs-wmv0b88A1KwaP8SEqmVJHvlOnVAqtBXEgw0hjn6xZoJEUzPLlyiA9mphuheQ1XsmBqGf67aMpk5XLh38pHvZ6eDKvU0s4t6uZc0UhztVfyPtvNbZg1gE_SluBy9eSWT2dkRJJ2d7I06giLP8P6Lcb6x_SnijJR1GuIy5BlleGeNjuIKH8Tj2IPSQGSFzhurKubIgVYcc_3E-dOsuiib2Ak_XotXHRvA9MBDZNux" />
                                </div>
                                <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Ceramic Sculpted Slow Feeder</h3>
                                <p className="text-[10px] text-on-surface-variant mb-2">Modern Slate Blue</p>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-primary text-sm">$38.00</p>
                                    <div className="flex items-center gap-1">
                                        <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                        <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Card 5 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Plush orthopedic velvet pet bed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArppzGznrIypbSSi88vlnY91DmaBFKQKTsUJznZjrnETnDhQ6jB3WTx1R1ZdT1Wi9l2anmZYKlUoZui_W1FG6SdtnsHsK4xZEAAv7q2bwILOQmfGhQbSmtmMXRfVQBa_UxK5ZYAuJyqd1fnuX-DNSnDwf0KQqdbOZLtlkHl_bn5_Jov8-WR8e2yUVrTOvODKTraujKVWYqoAsk94MrJT5QKte-OkPaD2KOk9ZsiO-slZx2lUSekrrebxLiK2oSJgbQUaz9Xx31mlxg" />
                                    <span className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm">New</span>
                                </div>
                                <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Velvet Cloud Orthopedic Bed</h3>
                                <p className="text-[10px] text-on-surface-variant mb-2">Midnight Navy, XL</p>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-primary text-sm">$189.00</p>
                                    <div className="flex items-center gap-1">
                                        <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                        <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Product Card 6 */}
                            <div className="group cursor-pointer">
                                <div className="relative aspect-square bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                    <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Organic pet grooming balm jars" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTyazJZbrLvCubStCCZmm51-Txpn3NkMaON3oucuN7mzN5EfEwXiedE9756EWMcaktKkMUoUMF5gI1bGyGJG9mEWjkwiNWGC1H619gz4S1izb6DRZ3z5Lh0UFHY69oNlUqETqbfzk3tBQaBkeZUdnkYaT3artPMUiP1sjFu0BrnxRw1FCoJGSeysCUBXZDT9R-qhnTUGTF-gb1WWTD6cUcDNa3hDjeYowjzUx27h5bu0OmyBT1PJjKyYbwrzSPFtRciMydOsdExBNz" />
                                </div>
                                <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Botanical Paw &amp; Nose Balm</h3>
                                <p className="text-[10px] text-on-surface-variant mb-2">Organic Shea &amp; Lavender</p>
                                <div className="flex items-center justify-between gap-1">
                                    <p className="font-bold text-primary text-sm">$24.00</p>
                                    <div className="flex items-center gap-1">
                                        <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                        <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-center pt-8 md:pt-12">
                            <button className="bg-surface-container-highest px-8 py-2.5 rounded-full font-bold hover:bg-primary hover:text-on-primary transition-all w-full md:w-auto text-sm">Load More Products</button>
                        </div>
                    </div>
                </div>

                {/* Mobile Filter Drawer */}
                {filterDrawerOpen && (
                    <div className="fixed inset-0 z-[60] lg:hidden">
                        <div
                            onClick={() => setFilterDrawerOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />
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
                                        <label className="flex items-center gap-3">
                                            <input className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" />
                                            <span className="text-sm">Chew Toys</span>
                                        </label>
                                        <label className="flex items-center gap-3">
                                            <input defaultChecked className="rounded text-primary focus:ring-primary w-4 h-4 border-outline-variant" type="checkbox" />
                                            <span className="text-sm font-bold">Artisan Food</span>
                                        </label>
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
                                <button
                                    onClick={() => setFilterDrawerOpen(false)}
                                    className="bg-primary text-on-primary py-3.5 rounded-xl font-bold w-full text-sm"
                                >Apply Filters</button>
                                <button className="text-on-surface-variant font-bold text-xs w-full">Clear All</button>
                            </div>
                        </div>
                    </div>
                )}

            </main>
            <Footer />
        </>
    )
}