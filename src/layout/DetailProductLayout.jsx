import { Link } from "react-router-dom"

export default function DetailProductLayout() {
    return (
        <>
            <nav className="fixed top-0 w-full z-50 px-6 py-8 md:px-12 pointer-events-none">
                <div className="max-w-7xl mx-auto w-full pointer-events-auto">
                    <a className="inline-flex items-center gap-2 px-4 py-2 rounded-full custom-glass shadow-[0_20px_40px_rgba(25,28,29,0.06)] group hover:bg-surface-container-lowest transition-all duration-300 active:scale-95" href="#">
                        <span className="material-symbols-outlined text-primary font-bold">arrow_back</span>
                        <Link to='/' className="font-headline font-bold text-on-surface-variant tracking-tight text-sm">Back</Link>
                    </a>
                </div>
            </nav>
            <main className="pt-28 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    <div className="relative w-full">
                        <div className="relative overflow-hidden rounded-xl bg-surface-container-low shadow-[0_15px_30px_rgba(25,28,29,0.05)]">
                            <img alt="Cognac Leather Heirloom Collar" className="w-full h-auto aspect-[4/5] lg:aspect-square object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAA_No3oHc9HGwGH9kso80U2HzGaDOUXRj6jpI3hVXxn9p-2z9eUvhAL2Ti8G4idmwxS3auMhm-rUKivsjS66W_zlpo1zFtBTAeJ8M-aExq3dJeo-UJVFYdY5mQDU3g2HpANeeAYMnx1dUAKn7cL98b_92TkYf9tFY4vwfHs3mqqaPnnnqg5cm08MuHAmGkGaISnMvrUFYmFc-mFzA1c5lQdIVyevE01ohftiYHxnJPYdVvbAIyKW7FdB0kbDhLY3N4DmYmuUHXsrm_" />
                            <div className="absolute top-4 right-4">
                                <span className="bg-tertiary-container/90 backdrop-blur-md text-on-tertiary-container px-4 py-1.5 rounded-full font-label text-[10px] font-bold tracking-widest uppercase">Handcrafted Heirloom</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-fixed/20 rounded-full blur-3xl -z-10"></div>
                    </div>
                    <div className="flex flex-col space-y-8">
                        <header className="space-y-3">
                            <div className="space-y-1">
                                <p className="text-primary font-label font-bold text-xs tracking-[0.2em] uppercase">Paws &amp; Play Signature</p>
                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-on-surface leading-tight tracking-tight">
                                    Cognac Leather Heirloom Collar
                                </h1>
                            </div>
                            <div className="flex items-center gap-5">
                                <span className="text-3xl font-headline font-bold text-on-surface">$85.00</span>
                                <div className="flex items-center bg-secondary-container/30 px-3 py-1 rounded-full">
                                    <span className="material-symbols-outlined text-on-secondary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="text-on-secondary-container font-label text-xs font-bold ml-1">4.9 / 5.0</span>
                                </div>
                            </div>
                        </header>
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-base lg:text-lg leading-relaxed text-on-surface-variant font-body">
                                    Our Heirloom Collar is forged from double-tanned full-grain leather that develops a unique patina over time. Finished with solid brass hardware, it’s designed to last for decades of discovery.
                                </p>
                                <button className="text-primary font-headline font-bold text-sm underline underline-offset-8 hover:text-primary-container transition-colors inline-flex items-center group">
                                    Read More
                                    <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">chevron_right</span>
                                </button>
                            </div>
                            <div className="p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/10 space-y-8">
                                <div className="space-y-4">
                                    <label className="font-label font-bold text-xs uppercase tracking-wider text-on-surface-variant">Select Size</label>
                                    <div className="flex flex-wrap gap-3">
                                        <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label text-sm font-semibold border border-outline-variant/20 hover:border-primary/40 transition-all">Small</button>
                                        <button className="px-6 py-2.5 rounded-full bg-primary text-on-primary font-label text-sm font-bold shadow-lg shadow-primary/20 ring-2 ring-primary ring-offset-2 ring-offset-surface-container-low">Medium</button>
                                        <button className="px-6 py-2.5 rounded-full bg-surface-container-lowest text-on-surface font-label text-sm font-semibold border border-outline-variant/20 hover:border-primary/40 transition-all">Large</button>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <div className="flex items-center bg-surface-container-highest rounded-xl p-1 w-full sm:w-auto border border-outline-variant/10">
                                            <button className="w-12 h-12 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-lowest active:scale-90 transition-all">
                                                <span className="material-symbols-outlined">remove</span>
                                            </button>
                                            <span className="px-6 font-headline font-bold text-on-surface min-w-[3rem] text-center">1</span>
                                            <button className="w-12 h-12 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-lowest active:scale-90 transition-all">
                                                <span className="material-symbols-outlined">add</span>
                                            </button>
                                        </div>
                                        <button className="flex-1 w-full flex items-center justify-center gap-3 bg-secondary-container text-on-secondary-container py-4 px-8 rounded-xl font-headline font-bold hover:brightness-105 transition-all shadow-[0_10px_20px_rgba(105,229,255,0.2)] active:scale-[0.98]">
                                            <span className="material-symbols-outlined">shopping_cart</span>
                                            Add to Cart
                                        </button>
                                    </div>
                                    <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-xl font-headline font-extrabold text-lg shadow-[0_20px_40px_rgba(143,78,0,0.2)] hover:shadow-[0_25px_50px_rgba(143,78,0,0.3)] transition-all active:scale-[0.98]">
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
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[1/1] bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                <img alt="Slate Gray Rope Leash" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuYhz6kyGY8yzdKDVDd7Pao0wIwWHN7yy96CCD45tv1uqMCIqAC4jTcSlMopz0PaTU61KbWDafSYj56VLwKs-ttyj6oUNLP63pHkKe5pVZduLsZkwsoOBtbPQmswrPOOhQmXYuChBMbiUgZ83gi4umGz9lGQsi4HklD04Dj8Au71FO_drO1rKZwUD2P7ejuHX5K9YYM9bhlPL8hJubtrA4Pyrg_-piUKgFCVcZ02lZ_hQr31LQZ1SMq6bpupRrOB2OSCCmyKbELEQx" />
                                <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm">Bestseller</span>
                            </div>
                            <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Slate Gray Rope Leash</h3>
                            <p className="text-[10px] text-on-surface-variant mb-2">Artisan Collection</p>
                            <div className="flex items-center justify-between gap-1">
                                <p className="font-bold text-primary text-sm">$45.00</p>
                                <div className="flex items-center gap-1">
                                    <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                    <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                        <span className="material-symbols-outlined text-base">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[1/1] bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                <img alt="Saffron Velvet Harness" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJGK5bM7co7N5MNiNcvS6LCvls31W24YzDeZBCU8NvcIHLLuw_n5D16t6_7pDrAMuB4snZA4lrntK-SJfj_yKPXsdF8sZt6L7QWOzQNM4moUdFovGxIEi2bllrND6--Eqf0URofnCsFENYJ5tJNbCk15hICPlwsP-OLDSBZiZOIs2-nx3cS1u1sTwqFHjLfp_s5Z4wu3l52rTlal5ngy7EdPEw9mBbWEmNyMjPD6SrLK-yHreklfS7ZHdvH2uu6HBUusroyXkDjjR-" />
                                <span className="absolute top-2 left-2 bg-tertiary-container text-on-tertiary-container px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm">Eco Friendly</span>
                            </div>
                            <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Saffron Velvet Harness</h3>
                            <p className="text-[10px] text-on-surface-variant mb-2">Soft Touch Series</p>
                            <div className="flex items-center justify-between gap-1">
                                <p className="font-bold text-primary text-sm">$65.00</p>
                                <div className="flex items-center gap-1">
                                    <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                    <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                        <span className="material-symbols-outlined text-base">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[1/1] bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                <img alt="Forest Green Canvas Bed" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuClhYggt8pLHXdTVWxGBt7FcAE1xTGUSe00Ms6bcuswB8AsA_lewfliXQN5eis3hLit9cN2mQfkBGSsCCP2tznIdb788whKFCkE58iEq2BtFB1ZhvlRgmpsNBQU-3qABaQDJAzzo1GA4EhhCSDIiLu1WoW-lO-Ok0-5A9W9pTBb03rVW5VN1vUK4oEVRkRRBp3n3MoMI1pzeEP2dRHxtABLuVgMLfEA_YO63KEG3rJDtUT29aVStZvM_VGgIv3FdB0mrCnkUdvsc5U7" />
                                <span className="absolute top-2 left-2 bg-primary text-on-primary px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest shadow-sm">New</span>
                            </div>
                            <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Forest Green Canvas Bed</h3>
                            <p className="text-[10px] text-on-surface-variant mb-2">Orthopedic Support</p>
                            <div className="flex items-center justify-between gap-1">
                                <p className="font-bold text-primary text-sm">$120.00</p>
                                <div className="flex items-center gap-1">
                                    <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                    <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                        <span className="material-symbols-outlined text-base">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="relative aspect-[1/1] bg-surface-container-low rounded-lg overflow-hidden mb-3">
                                <img alt="Ceramic Artisan Bowl" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDYm2mgmjfLy3gT_hX9AigFkSYzovjGpVJdyCqxZKnry6WjXa-qPIHsupWVSA_H93-EqFrQS7UYHjNL3TpGTHV190bEwEgwqIMRMn1fMPtoV-Q-Zc90RLfpMqm6gLdO2kVnSm8sQpj8q9npaOcprN4wjrQqikvJqOFNeRMeZ7qlycWRzxxTGvN42Ifr5g-rd9TbVB_0UwUw9VGOt7Y4rCZWva3ux2AogSToG3QeoHd8PI_LUanbKoCthTU9cm5V6HEN-8LmONGhw0L" />
                            </div>
                            <h3 className="font-headline font-bold text-xs md:text-sm mb-0.5 group-hover:text-primary transition-colors line-clamp-1">Ceramic Artisan Bowl</h3>
                            <p className="text-[10px] text-on-surface-variant mb-2">Hand-glazed Earthware</p>
                            <div className="flex items-center justify-between gap-1">
                                <p className="font-bold text-primary text-sm">$32.00</p>
                                <div className="flex items-center gap-1">
                                    <button className="bg-primary text-on-primary px-3 py-1.5 rounded-full font-bold text-[10px] hover:opacity-90 transition-all">Buy</button>
                                    <button className="w-7 h-7 border border-outline-variant text-on-surface rounded-full flex items-center justify-center hover:bg-surface-container transition-all">
                                        <span className="material-symbols-outlined text-base">shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
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