import Navbar from "../components/Navbar";

export default function CartLayout() {
    return (
        <>
            <Navbar />
            <main className="max-w-7xl mx-auto px-4 md:px-6 pt-24 pb-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                    <div class="lg:col-span-8 space-y-6 md:space-y-10">
                        <div class="space-y-4 md:space-y-6">
                            <div class="bg-surface-container-low p-4 md:p-6 rounded-2xl md:rounded-xl flex gap-4 md:gap-8 items-start md:items-center">
                                <div class="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-surface-container">
                                    <img alt="Artisan Leather Collar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3z7y_dT6jJ3YqOM75ccnIIoB4HctgRF7hAPmlaGjLwsswfFZ7zs6zQlkRkwi9pSh5XZLjjAz3bR5P37rFUE8ydfcMbzg8exCNe4jdvZtfOF7VRzkOeyftyub7yKDO4wKv1B795F2GnTTpqSyL3ZRcGrfuZl9CBnysMO4Eav9Pz6vb0Fk9hpcizcMOVRSB6hU3J5GdXBZCPx3VJusEWhmTdsCeKpMu_bdHraB5G3zoEQ5jmsmtqBuLBtbtXgy0T4QW2dCJJENL1o51" />
                                </div>
                                <div class="flex-1 min-w-0 flex flex-col justify-between self-stretch">
                                    <div class="flex justify-between items-start gap-2">
                                        <div class="truncate">
                                            <h3 class="text-base md:text-xl font-bold font-headline truncate">Artisan Leather Collar</h3>
                                            <p class="text-on-surface-variant text-xs md:text-sm">Hand-stitched, Midnight Espresso</p>
                                        </div>
                                        <span class="text-base md:text-xl font-bold text-primary">$89.00</span>
                                    </div>
                                    <div class="flex items-center justify-between mt-4 md:mt-6">
                                        <div class="flex items-center bg-white rounded-full p-1 shadow-sm border border-surface-container-high">
                                            <button class="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors active:scale-90">
                                                <span class="material-symbols-outlined text-sm font-bold" data-icon="remove">remove</span>
                                            </button>
                                            <span class="px-4 font-black text-sm md:text-base">1</span>
                                            <button class="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors active:scale-90">
                                                <span class="material-symbols-outlined text-sm font-bold" data-icon="add">add</span>
                                            </button>
                                        </div>
                                        <button class="text-error flex items-center gap-1.5 text-xs md:text-sm font-bold p-2 md:p-0 hover:bg-error/5 md:hover:bg-transparent rounded-lg">
                                            <span class="material-symbols-outlined text-lg" data-icon="delete">delete</span>
                                            <span class="hidden sm:inline">Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-surface-container-low p-4 md:p-6 rounded-2xl md:rounded-xl flex gap-4 md:gap-8 items-start md:items-center">
                                <div class="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-surface-container">
                                    <img alt="Organic Wellness Bites" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6RROTqizLAY8fkTY1N2D2GlvGhrYXw_px4i6O6V7mKY_CZWLX8Go1YF3H8TyEhyOR6ehHGezbpPCqqt63l6kbvSs0nQyBKzyRb1flrMz2vp3DLMfXfncylxkxAKQz5tRsG6QZYtMR3wN6SCpHVnGF3u2_sA0K-u7o56R729VlLE8bbxVzHnplmxGH_CFqJ6-kgwoLJhCDzq7my_vPr-4kZBKMHo5vs0IVgbJd0uez3dXjDfqSIR5FUSbjURGrG7wkoVXfom3aH-nh" />
                                </div>
                                <div class="flex-1 min-w-0 flex flex-col justify-between self-stretch">
                                    <div class="flex justify-between items-start gap-2">
                                        <div class="truncate">
                                            <h3 class="text-base md:text-xl font-bold font-headline truncate">Organic Wellness Bites</h3>
                                            <p class="text-on-surface-variant text-xs md:text-sm">Salmon &amp; Sweet Potato</p>
                                        </div>
                                        <span class="text-base md:text-xl font-bold text-primary">$24.50</span>
                                    </div>
                                    <div class="flex items-center justify-between mt-4 md:mt-6">
                                        <div class="flex items-center bg-white rounded-full p-1 shadow-sm border border-surface-container-high">
                                            <button class="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors active:scale-90">
                                                <span class="material-symbols-outlined text-sm font-bold" data-icon="remove">remove</span>
                                            </button>
                                            <span class="px-4 font-black text-sm md:text-base">2</span>
                                            <button class="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors active:scale-90">
                                                <span class="material-symbols-outlined text-sm font-bold" data-icon="add">add</span>
                                            </button>
                                        </div>
                                        <button class="text-error flex items-center gap-1.5 text-xs md:text-sm font-bold p-2 md:p-0 hover:bg-error/5 md:hover:bg-transparent rounded-lg">
                                            <span class="material-symbols-outlined text-lg" data-icon="delete">delete</span>
                                            <span class="hidden sm:inline">Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-surface-container-low p-4 md:p-6 rounded-2xl md:rounded-xl flex gap-4 md:gap-8 items-start md:items-center">
                                <div class="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden rounded-xl bg-surface-container">
                                    <img alt="Zen Ceramic Bowl" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW892lQNphpxZj4jqbfAJ0HkeFc2iePpuv_If638wwxGB5EvncbeHYhLIEPSYFmZjJg7or7EY83G7BUSR_u6EVE8EexM1c9yx86RyBlMUppdvHDH3bqfs73Mvic-EZNZI4G-GMOQ2nEBJm09kcjNEldsW0n4LfMBPyp7axn3CHYjRCS6TYp8YhjIUMBWQeHZgfKutUYAVs8rUQ4gS7K8MmfpJdzLeE0I8qoB7YscRHE9X3vsco8DzqNGhcd6wlGa0zFXRADMa-DqpH" />
                                </div>
                                <div class="flex-1 min-w-0 flex flex-col justify-between self-stretch">
                                    <div class="flex justify-between items-start gap-2">
                                        <div class="truncate">
                                            <h3 class="text-base md:text-xl font-bold font-headline truncate">Zen Ceramic Bowl</h3>
                                            <p class="text-on-surface-variant text-xs md:text-sm">Large / Pebble Grey</p>
                                        </div>
                                        <span class="text-base md:text-xl font-bold text-primary">$45.00</span>
                                    </div>
                                    <div class="flex items-center justify-between mt-4 md:mt-6">
                                        <div class="flex items-center bg-white rounded-full p-1 shadow-sm border border-surface-container-high">
                                            <button class="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors active:scale-90">
                                                <span class="material-symbols-outlined text-sm font-bold" data-icon="remove">remove</span>
                                            </button>
                                            <span class="px-4 font-black text-sm md:text-base">1</span>
                                            <button class="w-9 h-9 md:w-8 md:h-8 flex items-center justify-center text-primary hover:bg-primary/10 rounded-full transition-colors active:scale-90">
                                                <span class="material-symbols-outlined text-sm font-bold" data-icon="add">add</span>
                                            </button>
                                        </div>
                                        <button class="text-error flex items-center gap-1.5 text-xs md:text-sm font-bold p-2 md:p-0 hover:bg-error/5 md:hover:bg-transparent rounded-lg">
                                            <span class="material-symbols-outlined text-lg" data-icon="delete">delete</span>
                                            <span class="hidden sm:inline">Remove</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-4">
                        <div class="sticky top-28 space-y-6">
                            <div class="bg-white md:bg-surface-container-lowest p-6 md:p-8 rounded-2xl md:rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] md:shadow-[0_20px_40px_rgba(25,28,29,0.06)] space-y-6">
                                <h2 class="text-xl md:text-2xl font-black font-display tracking-tight hidden md:block">Order Summary</h2>
                                <div class="space-y-3 md:space-y-4">
                                    <div class="flex justify-between text-on-surface-variant text-sm md:text-base">
                                        <span>Subtotal</span>
                                        <span class="font-bold text-on-surface">$183.00</span>
                                    </div>
                                    <div class="flex justify-between text-on-surface-variant text-sm md:text-base">
                                        <span class="flex items-center gap-1">Shipping <span class="material-symbols-outlined text-[10px] md:text-xs" data-icon="info">info</span></span>
                                        <span class="font-bold text-on-surface">Calculated at checkout</span>
                                    </div>
                                    <div class="flex justify-between text-on-surface-variant text-sm md:text-base">
                                        <span>Estimated Tax</span>
                                        <span class="font-bold text-on-surface">$14.64</span>
                                    </div>
                                </div>
                                <div class="h-px bg-surface-container-highest"></div>
                                <div class="flex justify-between items-end">
                                    <span class="text-base md:text-lg font-bold font-headline">Total</span>
                                    <span class="text-2xl md:text-3xl font-black font-display text-primary">$197.64</span>
                                </div>
                                <div class="space-y-3">
                                    <label class="text-[10px] md:text-xs font-bold font-label uppercase tracking-widest text-on-surface-variant">Promo Code</label>
                                    <div class="flex gap-2">
                                        <input class="flex-1 bg-surface-container border border-surface-container-highest rounded-full px-4 py-2.5 text-sm focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none" placeholder="Enter code" type="text" />
                                        <button class="bg-surface-container-highest text-on-surface px-5 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all">Apply</button>
                                    </div>
                                </div>
                                <div class="pt-2 md:pt-4 space-y-3">
                                    <p class="text-[10px] font-bold font-label uppercase tracking-widest text-center text-slate-400">Accepted Payments</p>
                                    <div class="flex justify-center gap-4 text-slate-400">
                                        <span class="material-symbols-outlined text-xl" data-icon="credit_card">credit_card</span>
                                        <span class="material-symbols-outlined text-xl" data-icon="payments">payments</span>
                                        <span class="material-symbols-outlined text-xl" data-icon="account_balance_wallet">account_balance_wallet</span>
                                    </div>
                                </div>
                                <button class="flex w-full py-5 bg-gradient-to-r from-primary to-orange-400 text-on-primary rounded-full font-black font-display text-lg shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all items-center justify-center gap-2">
                                    Secure Checkout
                                    <span class="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}