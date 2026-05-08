import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const CATEGORIES = [
    {
        id: "toys",
        label: "TOYS",
        badge: "BEST SELLER",
        badgeColor: "bg-tertiary-container text-on-tertiary-container",
        icon: "sports_esports",
        iconColor: "text-tertiary",
        iconBg: "bg-tertiary/10",
        title: "Premium Pet Toys",
        desc: "Handpicked, durable toys designed to stimulate your pet mentally and physically. From interactive puzzles to chew-proof plushies — built for endless fun and safety.",
        features: ["Non-toxic materials", "Age-appropriate sizing", "Chew-resistant builds", "Stimulates natural instincts"],
        price: "Starting from $12",
        accent: "from-tertiary/10 to-tertiary/5",
        borderColor: "border-tertiary/20",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_JhvEKmR4GXO0fAHF1iEJTdDNejO_QwHpbz8B9dmCMorRKRfy8jYBYqEhixKHB8Tm8mc_vLF86eYv4bUYfUouHY8r78pAOif9yIkjBaZl4utjicdOhsGC0Ds_4sqPzAtSOQt95ghpL6qkNOFnCOA0MeuprEIx90urkdJv3N1bh7LJ1F9Fx6bdb6W0TR1zP2kXaJu8ByicNpKpdGtUp-mgTYymRJu0CzHAcp5DC-m-BFmhselhjKo62jSMi35wvEckU_b0ECt7_2j",
    },
    {
        id: "food",
        label: "FOOD",
        badge: "VET APPROVED",
        badgeColor: "bg-primary-container text-on-primary-container",
        icon: "restaurant",
        iconColor: "text-primary",
        iconBg: "bg-primary/10",
        title: "Organic Pet Food",
        desc: "Nutritionist-formulated recipes made from wild-caught proteins, fresh vegetables, and zero artificial preservatives. Fuel your pet's health from the inside out.",
        features: ["Grain-free options", "Wild-caught proteins", "No artificial preservatives", "Vet-approved formulas"],
        price: "Starting from $24",
        accent: "from-primary/10 to-primary/5",
        borderColor: "border-primary/20",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDasYj_2XclPu1SqHS8_rQxWjl08tMp68M2LXO30nMLTmU8ZKy3s8k4YVKVWh5B9LVk0lMdcxBIUa5Iw7IxPlugRLKh49GUxcbX3yqat4sVyVFs-EeCDxs08DlQ2s6GkNQ_DTkBQ_in1W0-zj_oYDtrdUWD5VbtLcd9UiiovCZOTvqjLLdTlCYryZ7prcHNIp_FSBc3lJTrvvd16kZio_r7FEJEfjAK31-7LA09LP9q23aa0ZLErXT0G1blNMLCr9yFS-s1LCUbVAsp",
    },
    {
        id: "collars",
        label: "COLLARS",
        badge: "HANDCRAFTED",
        badgeColor: "bg-secondary-container text-on-secondary-container",
        icon: "diamond",
        iconColor: "text-secondary",
        iconBg: "bg-secondary/10",
        title: "Artisan Collars",
        desc: "Ethically sourced leather and recycled fabrics transformed into statement accessories. Each collar is designed for comfort, durability, and undeniable style.",
        features: ["Genuine leather & eco-fabric", "Adjustable sizing", "Hypoallergenic buckles", "Personalization available"],
        price: "Starting from $38",
        accent: "from-secondary/10 to-secondary/5",
        borderColor: "border-secondary/20",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjUnC4mOdPixnlThKWLXMQPxBdfRuKohYfITSS01si8h1wdvajKJJHmD9tdoc33Kuqiv_7OlTbVrSi1wPELxPBqTmW_CjyLBojWRY04MZnyOXY8Z1iE61lZ6Nq-lARprIr_aHFz9pga4R4jTSi606OQJ2ExN_EcY_H6oOihLuvQZxIi0cV832qPJdiKebNUx8pRDHcYFXAGAJSm1fOvA9vXy7TwOeZHsEFalurG-o5418JzhGn9i2WhdIvinGMZc-FmWTadzCXmiOo",
    },
]

const WHY_US = [
    { icon: "local_shipping", color: "text-primary", bg: "bg-primary/10", title: "Free Shipping", desc: "On all orders above $50. Fast nationwide delivery within 2–4 business days." },
    { icon: "verified", color: "text-secondary", bg: "bg-secondary/10", title: "Quality Guaranteed", desc: "Every product is vet-reviewed and passes our 12-point safety checklist before listing." },
    { icon: "autorenew", color: "text-tertiary", bg: "bg-tertiary/10", title: "Easy Returns", desc: "Not satisfied? Return within 30 days — no questions asked, full refund guaranteed." },
    { icon: "support_agent", color: "text-primary", bg: "bg-primary/10", title: "24/7 Support", desc: "Our pet-loving support team is always here to help you find the perfect product." },
]

export default function HomeServices() {
    return (
        <>
            <Navbar />
            <header className="relative pt-32 pb-20 px-8 lg:pt-48 lg:pb-32 overflow-hidden bg-surface">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-semibold text-sm tracking-wider mb-6">
                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                            ONLINE PET STORE
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface leading-[1.1] mb-6 tracking-tighter">
                            Everything Your Pet <span className="text-primary italic">Loves</span>, Delivered.
                        </h1>
                        <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-lg">
                            Shop our curated collection of <strong className="text-on-surface">toys, organic food,</strong> and <strong className="text-on-surface">artisan collars</strong> — all vet-approved and crafted for pets who deserve the best.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/CatalogProduct" className="px-10 py-5 rounded-xl bg-primary text-on-primary font-headline font-bold shadow-lg shadow-primary/20 hover:scale-105 transition-transform inline-flex items-center gap-2">
                                <span className="material-symbols-outlined">shopping_bag</span>
                                Shop Now
                            </Link>
                            <a href="#categories" className="px-10 py-5 rounded-xl border border-outline-variant text-primary font-headline font-bold hover:bg-surface-container-low transition-colors inline-flex items-center gap-2">
                                <span className="material-symbols-outlined">expand_more</span>
                                Browse Categories
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-6 mt-10">
                            {["Free Shipping $50+", "30-Day Returns", "Vet Approved"].map(t => (
                                <div key={t} className="flex items-center gap-2 text-sm text-on-surface-variant font-medium">
                                    <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    {t}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -top-12 -right-12 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl" />
                        <div className="relative rounded-2xl overflow-hidden transform lg:rotate-1 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                            <img
                                alt="Happy pet with toys and treats"
                                className="w-full h-[520px] object-cover rounded-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQm5l1r0Q8Uwnw4kzgEs6RJ0tuZSByzZjXlkltu7c3PAVezyo3ZWGU7u2Ll_r4Erz-m8gi4_Q0dmumcHtkClgXmr4ylkLUznnx02p_Kb70B69Jj_fIrF1tZ2Hu-eRzU4osjemSjH4lr7oF_wqvpCtXdSBg_EEUL-3i7kKjNB7ht4jlNXvey_ZXRPhObti-Rw03Z_2SXFsE7U5jvlXb4o-wEUVN54lBt6buSEQ9IHSixtzCZlItC0gSAI7lpPhnrhqjgipxcIR-X6V4"
                            />
                        </div>
                        <div className="absolute -bottom-6 left-8 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-xl border border-white/40 flex items-center gap-4 max-w-xs">
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                                <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>package_2</span>
                            </div>
                            <div>
                                <p className="font-headline font-bold text-on-surface">500+ Products</p>
                                <p className="text-sm text-on-surface-variant">Across 3 categories</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section id="categories" className="py-24 px-8 bg-surface-container-low">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-4">Our Collections</span>
                        <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface mb-4">Shop by Category</h2>
                        <p className="text-on-surface-variant max-w-xl mx-auto text-lg">Three curated collections, one mission — giving your pet the life they deserve.</p>
                    </div>
                    <div className="space-y-12">
                        {CATEGORIES.map((cat, idx) => (
                            <div
                                key={cat.id}
                                className={`group flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(25,28,29,0.08)] border ${cat.borderColor} bg-white`}
                            >
                                <div className="lg:w-1/2 h-72 lg:h-auto relative overflow-hidden">
                                    <img
                                        src={cat.img}
                                        alt={cat.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-5 left-5">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${cat.badgeColor}`}>
                                            {cat.badge}
                                        </span>
                                    </div>
                                </div>
                                <div className={`lg:w-1/2 p-10 md:p-14 flex flex-col justify-center bg-gradient-to-br ${cat.accent}`}>
                                    <div className={`w-14 h-14 ${cat.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                                        <span className={`material-symbols-outlined text-3xl ${cat.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{cat.icon}</span>
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-widest text-on-surface-variant mb-2">{cat.label}</span>
                                    <h3 className="text-3xl font-headline font-extrabold text-on-surface mb-4">{cat.title}</h3>
                                    <p className="text-on-surface-variant leading-relaxed mb-6">{cat.desc}</p>
                                    <ul className="space-y-2 mb-8">
                                        {cat.features.map(f => (
                                            <li key={f} className="flex items-center gap-3 text-sm text-on-surface font-medium">
                                                <span className={`material-symbols-outlined text-base ${cat.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex items-center justify-between flex-wrap gap-4">
                                        <div>
                                            <p className="text-xs text-on-surface-variant font-medium">Price</p>
                                            <p className="text-2xl font-black text-on-surface">{cat.price}</p>
                                        </div>
                                        <Link
                                            to="/CatalogProduct"
                                            className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-105 shadow-md ${cat.iconColor === "text-primary" ? "bg-primary text-on-primary shadow-primary/20" : cat.iconColor === "text-secondary" ? "bg-secondary text-on-secondary shadow-secondary/20" : "bg-tertiary text-on-tertiary shadow-tertiary/20"}`}
                                        >
                                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                                            Shop {cat.label}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-24 px-8 bg-surface">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-headline font-extrabold text-on-surface mb-4">Why Pet Owners Love Us</h2>
                        <p className="text-on-surface-variant max-w-xl mx-auto text-lg">We're not just a store — we're your pet's best online companion.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {WHY_US.map(w => (
                            <div key={w.title} className="bg-surface-container-lowest rounded-2xl p-8 shadow-[0_8px_30px_rgba(25,28,29,0.06)] hover:-translate-y-1 transition-all duration-300 border border-outline-variant/10">
                                <div className={`w-14 h-14 ${w.bg} rounded-2xl flex items-center justify-center mb-6`}>
                                    <span className={`material-symbols-outlined text-2xl ${w.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{w.icon}</span>
                                </div>
                                <h4 className="text-lg font-headline font-extrabold text-on-surface mb-3">{w.title}</h4>
                                <p className="text-on-surface-variant text-sm leading-relaxed">{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 px-8">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-3xl p-12 md:p-20 text-center text-on-primary relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                    <div className="relative z-10">
                        <span className="material-symbols-outlined text-5xl mb-4 block opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                        <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">Ready to Spoil Your Pet?</h2>
                        <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Browse our full catalog of toys, food, and collars — curated with love, backed by vets.</p>
                        <Link
                            to="/CatalogProduct"
                            className="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-xl"
                        >
                            <span className="material-symbols-outlined">shopping_bag</span>
                            Explore Full Catalog
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}