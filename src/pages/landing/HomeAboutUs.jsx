import { Link } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const STATS = [
    { value: "500+", label: "Products Listed", icon: "inventory_2", color: "text-primary" },
    { value: "5,000+", label: "Happy Pet Owners", icon: "favorite", color: "text-secondary" },
    { value: "3", label: "Product Categories", icon: "category", color: "text-tertiary" },
    { value: "4.9★", label: "Average Rating", icon: "star", color: "text-primary" },
]

const VALUES = [
    {
        icon: "sports_esports",
        iconColor: "text-tertiary",
        iconBg: "bg-tertiary/10",
        title: "Toys That Inspire Play",
        desc: "We carefully source toys that go beyond fun — each one is tested for durability, safety, and the ability to enrich your pet's daily life. No fillers, no flimsy plastics."
    },
    {
        icon: "restaurant",
        iconColor: "text-primary",
        iconBg: "bg-primary/10",
        title: "Food You Can Trust",
        desc: "Every food product on our shelf is vet-approved, free from artificial additives, and made with real ingredients. Because what your pet eats matters more than anything."
    },
    {
        icon: "diamond",
        iconColor: "text-secondary",
        iconBg: "bg-secondary/10",
        title: "Collars Built to Last",
        desc: "Our artisan collars are handcrafted from ethically sourced leather and eco-friendly materials — designed for style, comfort, and long-lasting everyday wear."
    },
]

const COMMITMENTS = [
    { icon: "verified", title: "Vet-Verified Products", desc: "Every item passes a thorough safety review by our in-house veterinary consultants before it goes live on our store.", color: "text-primary", bg: "bg-primary/10" },
    { icon: "eco", title: "Eco-Conscious Sourcing", desc: "We partner with ethical suppliers who share our commitment to sustainability — recyclable packaging, natural materials, and minimal environmental impact.", color: "text-secondary", bg: "bg-secondary/10" },
    { icon: "local_shipping", title: "Fast Nationwide Delivery", desc: "Orders placed before 3 PM ship the same day. We partner with trusted couriers to ensure your pet's goodies arrive safely and on time.", color: "text-tertiary", bg: "bg-tertiary/10" },
    { icon: "support_agent", title: "Pet-First Customer Care", desc: "Our support team is staffed by real pet owners who understand your needs. We're here 24/7 to help with orders, recommendations, and anything in between.", color: "text-primary", bg: "bg-primary/10" },
]

export default function HomeAboutUs() {
    return (
        <>
            <Navbar />
            <main className="pt-24 overflow-hidden">

                {/* ── Hero ── */}
                <section className="relative px-8 py-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                    <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
                    <div className="flex-1 space-y-8 relative z-10">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-widest rounded-full">
                            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                            Est. 2024 · Online Pet Store
                        </span>
                        <h1 className="text-5xl md:text-7xl font-headline font-extrabold leading-[1.1] tracking-tighter text-on-surface">
                            We Sell What <span className="text-primary italic">Pets Actually</span> Need
                        </h1>
                        <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
                            Pet Atelier is an online store dedicated to curating the best <strong className="text-on-surface">toys, organic food, and artisan collars</strong> for pets who deserve nothing but the finest.
                        </p>
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/CatalogProduct" className="px-8 py-4 bg-primary text-on-primary rounded-xl font-headline font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20 inline-flex items-center gap-2">
                                <span className="material-symbols-outlined">shopping_bag</span>
                                Shop Now
                            </Link>
                            <a href="#story" className="px-8 py-4 border-2 border-outline-variant/30 text-primary rounded-xl font-headline font-bold text-lg hover:bg-surface-container-low transition-all inline-flex items-center gap-2">
                                <span className="material-symbols-outlined">menu_book</span>
                                Our Story
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
                            <img
                                className="w-full h-[520px] object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQm5l1r0Q8Uwnw4kzgEs6RJ0tuZSByzZjXlkltu7c3PAVezyo3ZWGU7u2Ll_r4Erz-m8gi4_Q0dmumcHtkClgXmr4ylkLUznnx02p_Kb70B69Jj_fIrF1tZ2Hu-eRzU4osjemSjH4lr7oF_wqvpCtXdSBg_EEUL-3i7kKjNB7ht4jlNXvey_ZXRPhObti-Rw03Z_2SXFsE7U5jvlXb4o-wEUVN54lBt6buSEQ9IHSixtzCZlItC0gSAI7lpPhnrhqjgipxcIR-X6V4"
                                alt="Happy golden retriever with pet accessories"
                            />
                        </div>
                        <div className="absolute -bottom-10 left-10 w-48 h-48 bg-secondary-container/40 backdrop-blur-lg rounded-full -z-0" />
                        <div className="absolute -top-10 -right-5 w-32 h-32 bg-primary-container/20 rounded-full -z-0" />
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -right-6 bg-white/80 backdrop-blur-xl px-5 py-3 rounded-2xl shadow-xl border border-white/40 z-20">
                            <p className="font-black text-on-surface text-sm">5,000+ Happy Pets</p>
                            <p className="text-xs text-on-surface-variant">Served across Indonesia</p>
                        </div>
                    </div>
                </section>

                {/* ── Stats Row ── */}
                <section className="py-16 px-8 bg-surface-container-low">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {STATS.map(s => (
                            <div key={s.label} className="bg-white rounded-2xl p-6 text-center shadow-[0_8px_30px_rgba(25,28,29,0.06)] flex flex-col items-center gap-3">
                                <span className={`material-symbols-outlined text-3xl ${s.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                                <p className={`text-4xl font-black ${s.color}`}>{s.value}</p>
                                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── Our Story / What We Sell ── */}
                <section id="story" className="py-24 px-8 bg-surface">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
                            <div className="rounded-2xl overflow-hidden h-60 translate-y-6">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf_JhvEKmR4GXO0fAHF1iEJTdDNejO_QwHpbz8B9dmCMorRKRfy8jYBYqEhixKHB8Tm8mc_vLF86eYv4bUYfUouHY8r78pAOif9yIkjBaZl4utjicdOhsGC0Ds_4sqPzAtSOQt95ghpL6qkNOFnCOA0MeuprEIx90urkdJv3N1bh7LJ1F9Fx6bdb6W0TR1zP2kXaJu8ByicNpKpdGtUp-mgTYymRJu0CzHAcp5DC-m-BFmhselhjKo62jSMi35wvEckU_b0ECt7_2j" alt="Pet toys" />
                            </div>
                            <div className="rounded-2xl overflow-hidden h-60">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjUnC4mOdPixnlThKWLXMQPxBdfRuKohYfITSS01si8h1wdvajKJJHmD9tdoc33Kuqiv_7OlTbVrSi1wPELxPBqTmW_CjyLBojWRY04MZnyOXY8Z1iE61lZ6Nq-lARprIr_aHFz9pga4R4jTSi606OQJ2ExN_EcY_H6oOihLuvQZxIi0cV832qPJdiKebNUx8pRDHcYFXAGAJSm1fOvA9vXy7TwOeZHsEFalurG-o5418JzhGn9i2WhdIvinGMZc-FmWTadzCXmiOo" alt="Pet collar" />
                            </div>
                            <div className="col-span-2 rounded-2xl overflow-hidden h-48">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDasYj_2XclPu1SqHS8_rQxWjl08tMp68M2LXO30nMLTmU8ZKy3s8k4YVKVWh5B9LVk0lMdcxBIUa5Iw7IxPlugRLKh49GUxcbX3yqat4sVyVFs-EeCDxs08DlQ2s6GkNQ_DTkBQ_in1W0-zj_oYDtrdUWD5VbtLcd9UiiovCZOTvqjLLdTlCYryZ7prcHNIp_FSBc3lJTrvvd16kZio_r7FEJEfjAK31-7LA09LP9q23aa0ZLErXT0G1blNMLCr9yFS-s1LCUbVAsp" alt="Pet food" />
                            </div>
                        </div>
                        <div className="order-1 md:order-2 space-y-6">
                            <span className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase rounded-full">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-bold text-on-surface">
                                Born from a Love for <span className="text-primary">Pets</span>
                            </h2>
                            <p className="text-lg text-on-surface-variant leading-relaxed">
                                Pet Atelier started in 2024 with a simple observation: the online pet market was flooded with low-quality, unsafe products. We set out to change that — building a store where every single product is <strong className="text-on-surface">hand-selected, vet-reviewed, and worth your pet's trust.</strong>
                            </p>
                            <p className="text-on-surface-variant leading-relaxed">
                                Today we proudly offer hundreds of SKUs across three focused categories: <strong className="text-on-surface">Toys</strong> that enrich play, <strong className="text-on-surface">Food</strong> that nourishes health, and <strong className="text-on-surface">Collars</strong> that express personality — all shipped straight to your door.
                            </p>
                            <ul className="space-y-4 pt-2">
                                {[
                                    { icon: "verified", color: "text-primary", bg: "bg-primary/10", text: "100% Vet-Approved Product Catalog" },
                                    { icon: "eco", color: "text-secondary", bg: "bg-secondary/10", text: "Ethically Sourced & Eco-Friendly Packaging" },
                                    { icon: "local_shipping", color: "text-tertiary", bg: "bg-tertiary/10", text: "Same-Day Dispatch on Orders Before 3 PM" },
                                ].map(item => (
                                    <li key={item.text} className="flex items-center gap-4 text-on-surface font-medium">
                                        <span className={`w-10 h-10 flex items-center justify-center ${item.bg} rounded-full ${item.color} shrink-0`}>
                                            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>{item.icon}</span>
                                        </span>
                                        {item.text}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ── What We Specialize In ── */}
                <section className="py-24 px-8 bg-surface-container-low">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary/10 text-tertiary text-sm font-bold tracking-widest uppercase mb-4">Our Specialties</span>
                            <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-4">Three Categories, One Promise</h2>
                            <p className="text-on-surface-variant max-w-xl mx-auto text-lg">Everything we sell comes with our personal guarantee of quality, safety, and value.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {VALUES.map(v => (
                                <div key={v.title} className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(25,28,29,0.06)] hover:-translate-y-2 transition-all duration-300 border border-outline-variant/10">
                                    <div className={`w-16 h-16 ${v.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
                                        <span className={`material-symbols-outlined text-3xl ${v.iconColor}`} style={{ fontVariationSettings: "'FILL' 1" }}>{v.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-headline font-extrabold text-on-surface mb-4">{v.title}</h4>
                                    <p className="text-on-surface-variant text-sm leading-relaxed">{v.desc}</p>
                                    <Link to="/CatalogProduct" className={`inline-flex items-center gap-1 mt-6 text-sm font-bold ${v.iconColor} hover:underline underline-offset-4`}>
                                        Shop Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Our Commitments ── */}
                <section className="py-24 px-8 bg-surface">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-widest uppercase mb-6">Our Commitments</span>
                                <h2 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface mb-8">Built on Trust, <br />Driven by <span className="text-primary">Love</span></h2>
                                <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                                    We don't just sell products. We stand behind every item with a commitment to your pet's safety, your satisfaction as a customer, and the health of our planet.
                                </p>
                                <Link to="/CatalogProduct" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-on-primary rounded-xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                    Start Shopping
                                </Link>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {COMMITMENTS.map(c => (
                                    <div key={c.title} className="p-6 bg-surface-container rounded-2xl">
                                        <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                                            <span className={`material-symbols-outlined text-xl ${c.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{c.icon}</span>
                                        </div>
                                        <h4 className="font-headline font-extrabold text-on-surface mb-2">{c.title}</h4>
                                        <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── CTA ── */}
                <section className="py-20 px-8 max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-primary to-primary-container rounded-3xl p-12 md:p-20 text-center text-on-primary relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-5xl mb-4 block opacity-80" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                            <h2 className="text-3xl md:text-5xl font-headline font-extrabold mb-4">Your Pet Deserves the Best</h2>
                            <p className="text-lg opacity-90 mb-8 max-w-lg mx-auto">Join 5,000+ happy pet owners who trust Pet Atelier for toys, food, and collars delivered right to their door.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/CatalogProduct" className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-xl">
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                    Shop the Catalog
                                </Link>
                                <Link to="/SignUp" className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/30 transition-colors border border-white/30">
                                    <span className="material-symbols-outlined">person_add</span>
                                    Create Account
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}