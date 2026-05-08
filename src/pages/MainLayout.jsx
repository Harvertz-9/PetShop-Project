import { Link } from "react-router-dom"

const FEATURES = [
    {
        icon: "verified",
        title: "Vet-Approved Quality",
        desc: "Every product we sell is strictly reviewed for safety, nutrition, and durability.",
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        icon: "eco",
        title: "Eco-Friendly Sourcing",
        desc: "Sustainable materials and ethical manufacturing for a healthier planet.",
        color: "text-secondary",
        bg: "bg-secondary/10"
    },
    {
        icon: "local_shipping",
        title: "Fast Nationwide Delivery",
        desc: "Orders over $50 get free 2-day shipping straight to your doorstep.",
        color: "text-tertiary",
        bg: "bg-tertiary/10"
    }
]

const COLLECTIONS = [
    {
        title: "Premium Toys",
        desc: "Interactive & durable play essentials.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDf_JhvEKmR4GXO0fAHF1iEJTdDNejO_QwHpbz8B9dmCMorRKRfy8jYBYqEhixKHB8Tm8mc_vLF86eYv4bUYfUouHY8r78pAOif9yIkjBaZl4utjicdOhsGC0Ds_4sqPzAtSOQt95ghpL6qkNOFnCOA0MeuprEIx90urkdJv3N1bh7LJ1F9Fx6bdb6W0TR1zP2kXaJu8ByicNpKpdGtUp-mgTYymRJu0CzHAcp5DC-m-BFmhselhjKo62jSMi35wvEckU_b0ECt7_2j",
        color: "bg-tertiary",
        accent: "text-tertiary"
    },
    {
        title: "Organic Food",
        desc: "Nutrient-rich meals for healthy pets.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDasYj_2XclPu1SqHS8_rQxWjl08tMp68M2LXO30nMLTmU8ZKy3s8k4YVKVWh5B9LVk0lMdcxBIUa5Iw7IxPlugRLKh49GUxcbX3yqat4sVyVFs-EeCDxs08DlQ2s6GkNQ_DTkBQ_in1W0-zj_oYDtrdUWD5VbtLcd9UiiovCZOTvqjLLdTlCYryZ7prcHNIp_FSBc3lJTrvvd16kZio_r7FEJEfjAK31-7LA09LP9q23aa0ZLErXT0G1blNMLCr9yFS-s1LCUbVAsp",
        color: "bg-primary",
        accent: "text-primary"
    },
    {
        title: "Artisan Collars",
        desc: "Handcrafted style & everyday comfort.",
        img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjUnC4mOdPixnlThKWLXMQPxBdfRuKohYfITSS01si8h1wdvajKJJHmD9tdoc33Kuqiv_7OlTbVrSi1wPELxPBqTmW_CjyLBojWRY04MZnyOXY8Z1iE61lZ6Nq-lARprIr_aHFz9pga4R4jTSi606OQJ2ExN_EcY_H6oOihLuvQZxIi0cV832qPJdiKebNUx8pRDHcYFXAGAJSm1fOvA9vXy7TwOeZHsEFalurG-o5418JzhGn9i2WhdIvinGMZc-FmWTadzCXmiOo",
        color: "bg-secondary",
        accent: "text-secondary"
    }
]

export default function MainLayout() {
    return (
        <main className="pt-16">
            {/* ── Hero Section ── */}
            <section className="relative overflow-hidden pt-12 md:pt-20 pb-20 md:pb-32 px-4 md:px-16 max-w-screen-2xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    <div className="lg:col-span-6 z-10 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 text-primary rounded-full mb-8 border border-primary/20">
                            <span className="material-symbols-outlined text-sm font-bold">storefront</span>
                            <span className="text-sm font-bold uppercase tracking-widest">Premium Pet Store</span>
                        </div>
                        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-black text-on-surface leading-[1.05] tracking-tighter mb-6">
                            Where Pets <br />
                            <span className="text-primary italic pr-2">Shop in Style.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
                            Elevate your pet's lifestyle. We curate the finest <strong className="text-on-surface">toys, organic food, and artisan collars</strong> delivered straight to your door.
                        </p>
                        <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4">
                            <Link to="/CatalogProduct" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-3">
                                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                                Shop the Catalog
                            </Link>
                            <Link to="/HomeServices" className="bg-surface-container-high text-on-surface px-10 py-5 rounded-2xl font-bold text-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-3 shadow-sm border border-outline-variant/20">
                                View Categories
                            </Link>
                        </div>
                        
                        {/* Trust indicators */}
                        <div className="flex items-center justify-center lg:justify-start gap-8 mt-12">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                                <div className="text-left">
                                    <p className="font-black text-on-surface leading-none">4.9/5</p>
                                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider mt-1">Store Rating</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-secondary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>inventory_2</span>
                                <div className="text-left">
                                    <p className="font-black text-on-surface leading-none">500+</p>
                                    <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider mt-1">Premium Items</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-6 relative mt-12 lg:mt-0">
                        <div className="relative z-10 rounded-[2rem] overflow-hidden transform lg:rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl border-8 border-white">
                            <img alt="Happy Golden Retriever with shopping bags" className="w-full h-[500px] lg:h-[650px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQm5l1r0Q8Uwnw4kzgEs6RJ0tuZSByzZjXlkltu7c3PAVezyo3ZWGU7u2Ll_r4Erz-m8gi4_Q0dmumcHtkClgXmr4ylkLUznnx02p_Kb70B69Jj_fIrF1tZ2Hu-eRzU4osjemSjH4lr7oF_wqvpCtXdSBg_EEUL-3i7kKjNB7ht4jlNXvey_ZXRPhObti-Rw03Z_2SXFsE7U5jvlXb4o-wEUVN54lBt6buSEQ9IHSixtzCZlItC0gSAI7lpPhnrhqjgipxcIR-X6V4" />
                        </div>
                        {/* Floating Feature Card */}
                        <div className="absolute -bottom-10 left-8 md:-left-12 z-20 bg-white p-6 rounded-3xl shadow-[0_30px_60px_rgba(25,28,29,0.12)] border border-outline-variant/10 max-w-xs transform hover:-translate-y-2 transition-transform">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-14 h-14 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                                    <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                </div>
                                <div>
                                    <p className="font-black font-headline text-lg text-on-surface leading-tight">Vet Approved</p>
                                    <p className="text-sm text-on-surface-variant">100% Quality Guaranteed</p>
                                </div>
                            </div>
                            <div className="flex -space-x-3">
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUy2Vz2jEXwXgrOf4xx0SEnkG6g9UKIuTv6mhE7tiLnSw1_Rle6dHHHidQLSyAizjb4GMzy_pWCc-Ohc0o6AL6d_UumeMIlBwcZpBoAflyxLARzFNJ064M8maAI9xmsfKh2BD5ZdnpqSyjrtp1UxZokiabTalyLX0K8RhOfKBJCncNC5Q9h9MkPlJHLR4qPuCaY46j8l5dD0LLFkOQoUr7FYxv45WM8UAX9Uj7pmT681jvJfqY9QyeUF99grP5h5aWkNE-ohlFRmBt" />
                                <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVOWbBeKmrIs7Hl1j2eQbkNctjI2j_46AuwScnMa7YkBm364WUxo2MmqQfC7YnGvHh4CIsfyehUw5HFd8HHCfUpV590HjF4NBvdzCiM2Ql1J0Ye-zvgqhi6219zrP603729-e2_4c7IZjO6P7v6Co7-pLL48aZOFUpRQcF9bcp8JT7iOQ6Zz1YuZioUOesE07Vo5A0wJakBszdCLRa8boP3V3OZP6tYL8eKIdTxH4yfYkQA4WJCAmjBt0D4CUiVWsujz40TVSwe8Iy" />
                                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary-container text-on-primary-container flex items-center justify-center text-xs font-bold">+5k</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Shop by Category ── */}
            <section className="py-24 px-4 md:px-16 bg-surface-container-lowest">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                        <div className="max-w-2xl">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-4">Our Collections</span>
                            <h2 className="font-headline text-4xl sm:text-5xl font-black text-on-surface mb-6">Explore the Essentials</h2>
                            <p className="text-lg text-on-surface-variant font-medium">From nutrition to playtime, we've organized our catalog into three focused categories so you can easily find exactly what your pet needs.</p>
                        </div>
                        <Link to="/CatalogProduct" className="group flex items-center gap-2 font-bold text-primary hover:text-primary-600 transition-colors">
                            View All Products 
                            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {COLLECTIONS.map((col, idx) => (
                            <Link to="/CatalogProduct" key={idx} className="group relative block rounded-[2rem] overflow-hidden bg-white shadow-[0_20px_40px_rgba(25,28,29,0.06)] hover:-translate-y-2 transition-all duration-500 border border-outline-variant/10">
                                <div className="h-72 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
                                    <img src={col.img} alt={col.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="p-8 relative bg-white">
                                    <div className={`absolute -top-8 right-8 w-16 h-16 rounded-2xl ${col.color} text-white flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-0 transition-transform z-20`}>
                                        <span className="material-symbols-outlined text-3xl">shopping_bag</span>
                                    </div>
                                    <h3 className={`font-headline text-2xl font-black mb-2 ${col.accent}`}>{col.title}</h3>
                                    <p className="text-on-surface-variant text-base font-medium mb-6">{col.desc}</p>
                                    <span className="inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wider text-on-surface group-hover:text-primary transition-colors">
                                        Shop Category <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Features / Why Us ── */}
            <section className="py-24 px-4 md:px-16 bg-surface">
                <div className="max-w-screen-2xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-xs font-bold tracking-widest uppercase mb-6">The Atelier Difference</span>
                            <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black text-on-surface mb-8 leading-tight">
                                More Than Just a <br /><span className="text-secondary italic">Pet Store.</span>
                            </h2>
                            <p className="text-lg md:text-xl text-on-surface-variant mb-10 leading-relaxed font-medium">
                                We believe pet ownership is a journey best supported by quality. We cut through the noise of the pet industry to bring you only products that pass our rigorous standards.
                            </p>
                            
                            <div className="space-y-8">
                                {FEATURES.map((feat, idx) => (
                                    <div key={idx} className="flex gap-6">
                                        <div className={`w-16 h-16 rounded-2xl ${feat.bg} flex items-center justify-center shrink-0`}>
                                            <span className={`material-symbols-outlined text-3xl ${feat.color}`} style={{ fontVariationSettings: "'FILL' 1" }}>{feat.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-headline text-xl font-black text-on-surface mb-2">{feat.title}</h4>
                                            <p className="text-on-surface-variant leading-relaxed">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="relative hidden lg:block">
                            <div className="w-full aspect-square rounded-full bg-surface-container-high relative overflow-hidden border-[16px] border-white shadow-[0_30px_60px_rgba(25,28,29,0.1)]">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuB37G-lTeHG7ZD_KBe9wuYyJJMOig80yU9xXfIY0ZYxKLk9a63Glh9FxOUewuIxUcezsvrlpgZq_F7mkIyB4q4Ug_Tfj-VM3igihMuJxf0cB96-nzq4MzZdPvV9CU0h7jtpWxTGTxC5bZyduPTCjnX7GquZq_XvA7SYMzgH6MVmh5nBflls-7Qqe-LEA2y4SlyzJ9iICbJJ3ZvIvBYhlMzceMFWDcXe3qNmJGinbLA_PdF5RWb3heNr0UNh4KhKSXYkf8Xb1KhMZLw-" alt="Pet lifestyle" className="w-full h-full object-cover" />
                            </div>
                            {/* Floating decorative elements */}
                            <div className="absolute top-10 right-10 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
                            <div className="absolute bottom-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="py-24 px-4 md:px-8 bg-surface-container-low overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-50 pointer-events-none translate-x-1/3 -translate-y-1/3" />
                <div className="max-w-screen-xl mx-auto relative z-10 text-center">
                    <span className="material-symbols-outlined text-6xl text-primary/20 mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>format_quote</span>
                    <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-black text-on-surface mb-12 max-w-4xl mx-auto leading-tight italic">
                        "The curated shop is a lifesaver. We found the most durable yet stylish toys that Cooper hasn't been able to destroy. Everything arrives so fast and beautifully packaged!"
                    </h2>
                    <div className="flex flex-col items-center">
                        <img className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-xl mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVOWbBeKmrIs7Hl1j2eQbkNctjI2j_46AuwScnMa7YkBm364WUxo2MmqQfC7YnGvHh4CIsfyehUw5HFd8HHCfUpV590HjF4NBvdzCiM2Ql1J0Ye-zvgqhi6219zrP603729-e2_4c7IZjO6P7v6Co7-pLL48aZOFUpRQcF9bcp8JT7iOQ6Zz1YuZioUOesE07Vo5A0wJakBszdCLRa8boP3V3OZP6tYL8eKIdTxH4yfYkQA4WJCAmjBt0D4CUiVWsujz40TVSwe8Iy" alt="Customer avatar" />
                        <p className="font-black font-headline text-xl text-on-surface">Michael Thorne</p>
                        <p className="text-primary font-bold text-sm tracking-widest uppercase mt-1">Pet Parent to Cooper</p>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ── */}
            <section className="py-24 px-4 md:px-8 bg-surface">
                <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-[3rem] p-12 md:p-20 text-center text-surface relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/30 rounded-full blur-3xl pointer-events-none" />
                    
                    <div className="relative z-10">
                        <span className="material-symbols-outlined text-6xl mb-6 text-white" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                        <h2 className="font-headline text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight">Ready to Treat Your Pet?</h2>
                        <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium">Join thousands of happy pet parents who trust Pet Atelier for their daily essentials.</p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/CatalogProduct" className="bg-primary text-on-primary px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                                <span className="material-symbols-outlined">shopping_bag</span>
                                Shop the Catalog
                            </Link>
                            <Link to="/SignUp" className="bg-white text-primary border border-white/20 backdrop-blur-md px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-colors flex items-center justify-center gap-3">
                                Create an Account
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}