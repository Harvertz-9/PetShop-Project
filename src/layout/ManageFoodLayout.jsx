export default function ManageFoodLayout() {
    return (
        <>
            <aside class="fixed left-0 top-0 flex flex-col p-6 space-y-4 bg-slate-50/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-r-[3rem] h-screen w-72 shadow-[0_20px_40px_rgba(25,28,29,0.06)] z-50">
                <div class="mb-8 px-4">
                    <h1 class="text-2xl font-bold italic text-slate-900 dark:text-slate-50 font-headline">Pet Atelier</h1>
                    <p class="text-xs font-semibold tracking-tight text-slate-500 uppercase">Curated Playground</p>
                </div>
                <nav class="flex-1 space-y-2">
                    <a class="flex items-center gap-3 p-4 font-plus-jakarta text-sm font-semibold tracking-tight text-slate-500 dark:text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 scale-95 active:scale-90" href="#">
                        <span class="material-symbols-outlined">grid_view</span>
                        <span>Overview</span>
                    </a>
                    <a class="flex items-center gap-3 p-4 font-plus-jakarta text-sm font-semibold tracking-tight text-slate-500 dark:text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 scale-95 active:scale-90" href="#">
                        <span class="material-symbols-outlined">smart_toy</span>
                        <span>Manage Toys</span>
                    </a>
                    <a class="flex items-center gap-3 p-4 font-plus-jakarta text-sm font-semibold tracking-tight text-orange-700 dark:text-orange-300 bg-white dark:bg-slate-800 rounded-full shadow-sm scale-95 active:scale-90 transition-transform" href="#">
                        <span class="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1;"}}>bakery_dining</span>
                        <span>Manage Food</span>
                    </a>
                    <a class="flex items-center gap-3 p-4 font-plus-jakarta text-sm font-semibold tracking-tight text-slate-500 dark:text-slate-400 hover:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 scale-95 active:scale-90" href="#">
                        <span class="material-symbols-outlined">pets</span>
                        <span>Manage Collars</span>
                    </a>
                </nav>
                <div class="mt-auto pt-6 border-t border-slate-100/50">
                    <button class="w-full py-4 px-6 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 flex items-center justify-center gap-2 mb-6">
                        <span class="material-symbols-outlined">add</span>
                        <span>Add New Product</span>
                    </button>
                    <div class="flex items-center gap-3 px-4">
                        <img alt="close-up portrait of a friendly male pet shop manager" class="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYPVlxGgKjCASefpLVuqL6WUJnllK8kavUt2J-IcFkIqURJkNAyllTXYGVc_ED8I5dAZLgj4XYccdfljuwjSrY-NZjE_H3UNjm02U8FjcJgzzNBkoAmI2NfF04UPeCw6oSHXBPuGADSeBrrEMoSM4QQffNKIsHb8F_GlcWLrFg0xn0VWohL3ye-1KXL2-TYwVJHTLttz0z730LVn16iJ_TdivYfrtg5pvqeeUij5tLadCrVIxOOjyS8HFZwi8wiR9Q0aHWWfFxM2Hr" />
                        <div>
                            <p class="text-xs font-bold text-on-surface">Admin Profile</p>
                            <p class="text-[10px] text-on-surface-variant">Store Manager</p>
                        </div>
                    </div>
                </div>
            </aside>
            <main class="pl-80 pr-8 pt-12 pb-12">
                <div class="max-w-7xl mx-auto space-y-8">
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <span class="label-md uppercase tracking-widest text-[10px] font-bold text-primary mb-2 block">Pantry Management</span>
                            <h2 class="text-4xl font-headline font-extrabold text-on-surface leading-tight">Gourmet Nutrition <br />Inventory</h2>
                        </div>
                        <div class="flex gap-3">
                            <button class="px-6 py-3 bg-secondary-container text-on-secondary-container font-bold rounded-full text-sm hover:opacity-90 transition-opacity flex items-center gap-2">
                                <span class="material-symbols-outlined text-lg">download</span>
                                Export PDF
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="relative overflow-hidden bg-surface-container-lowest p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex flex-col justify-between group h-48">
                            <div class="z-10">
                                <p class="text-on-surface-variant font-medium text-sm">Total Food Inventory</p>
                                <h3 class="text-4xl font-headline font-extrabold text-on-surface mt-1">1,248 <span class="text-base font-medium text-on-surface-variant">units</span></h3>
                            </div>
                            <div class="z-10 flex items-center gap-2 text-primary font-bold text-xs">
                                <span class="material-symbols-outlined text-sm">trending_up</span>
                                <span>+12% from last month</span>
                            </div>
                            <div class="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                                <span class="material-symbols-outlined text-[120px]" style={{fontVariationSettings: "'FILL' 1;"}}>restaurant</span>
                            </div>
                        </div>
                        <div class="bg-primary-container/20 p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex flex-col justify-between h-48">
                            <div>
                                <p class="text-primary font-bold text-sm">Expiring Soon</p>
                                <h3 class="text-4xl font-headline font-extrabold text-primary mt-1">24 <span class="text-base font-medium text-primary">items</span></h3>
                            </div>
                            <div class="flex items-center gap-2 text-on-surface-variant font-medium text-xs">
                                <span class="material-symbols-outlined text-sm text-error">warning</span>
                                <span>Action required within 14 days</span>
                            </div>
                        </div>
                        <div class="bg-secondary-container/20 p-8 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex flex-col justify-between h-48 overflow-hidden relative">
                            <div>
                                <p class="text-secondary font-bold text-sm">Stock Health</p>
                                <h3 class="text-4xl font-headline font-extrabold text-secondary mt-1">98%</h3>
                            </div>
                            <div class="flex items-center gap-2 text-secondary font-bold text-xs">
                                <span class="material-symbols-outlined text-sm">check_circle</span>
                                <span>Optimized supply chain</span>
                            </div>
                            <img alt="close-up of premium dog food kibble" class="absolute -right-10 -top-10 w-40 h-40 object-cover rounded-full opacity-30 transform rotate-12" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC85FN1_rPVUA9u-NzoKAQEmMqZIdsWGZM8kLjbEVmYywLe6BjCoCWpHiobcnXy7JX55HFtKfKy0P2KPRlU43700lSG9sL-RBZ4x55Qj_bVwPKzXaNcXTfzRWyOw6fvDWP3Vf-TBqKcpJ8Fpw2VKoR5JPeu1lXGMl6ziR34pb20-oFhbKwdWSxxAojhDTJaxCVGbjbaSrguyhqRoaMRUqC5kYYQU6JeW4CG3N71amEuVQvAbRvZ12AKzrMQfmrt5Az9n9QKNeyc3lYw" />
                        </div>
                    </div>
                    <div class="bg-surface-container-low rounded-lg p-1 overflow-hidden">
                        <div class="bg-surface-container-lowest rounded-lg shadow-sm overflow-x-auto">
                            <table class="w-full border-collapse text-left">
                                <thead>
                                    <tr class="bg-surface-container-low/50">
                                        <th class="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Name</th>
                                        <th class="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Category</th>
                                        <th class="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Expiry Date</th>
                                        <th class="px-6 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Stock Level</th>
                                        <th class="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-surface-container">
                                    <tr class="hover:bg-surface-container-low/30 transition-colors">
                                        <td class="px-8 py-6">
                                            <div class="flex items-center gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-primary">potted_plant</span>
                                                </div>
                                                <div>
                                                    <p class="font-bold text-on-surface">Organic Salmon Kibble</p>
                                                    <p class="text-xs text-on-surface-variant">Artisan Blend • 5kg</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-6">
                                            <span class="px-3 py-1 bg-surface-container text-on-surface-variant text-[10px] font-bold uppercase rounded-full">Dry Food</span>
                                        </td>
                                        <td class="px-6 py-6 text-sm font-medium text-on-surface-variant">Oct 12, 2024</td>
                                        <td class="px-6 py-6">
                                            <div class="flex items-center gap-3">
                                                <div class="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                                                    <div class="bg-secondary h-full w-[85%] rounded-full"></div>
                                                </div>
                                                <span class="text-xs font-bold text-secondary">85%</span>
                                            </div>
                                        </td>
                                        <td class="px-8 py-6 text-right">
                                            <button class="text-slate-400 hover:text-primary transition-colors">
                                                <span class="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-surface-container-low/30 transition-colors">
                                        <td class="px-8 py-6">
                                            <div class="flex items-center gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-primary">bakery_dining</span>
                                                </div>
                                                <div>
                                                    <p class="font-bold text-on-surface">Tender Beef Paté</p>
                                                    <p class="text-xs text-on-surface-variant">Grain Free • 150g Can</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-6">
                                            <span class="px-3 py-1 bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase rounded-full">Wet Food</span>
                                        </td>
                                        <td class="px-6 py-6 text-sm font-medium text-error">Sep 05, 2023</td>
                                        <td class="px-6 py-6">
                                            <div class="flex items-center gap-3">
                                                <div class="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                                                    <div class="bg-error h-full w-[15%] rounded-full"></div>
                                                </div>
                                                <span class="text-xs font-bold text-error">Low</span>
                                            </div>
                                        </td>
                                        <td class="px-8 py-6 text-right">
                                            <button class="text-slate-400 hover:text-primary transition-colors">
                                                <span class="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-surface-container-low/30 transition-colors">
                                        <td class="px-8 py-6">
                                            <div class="flex items-center gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-primary">star</span>
                                                </div>
                                                <div>
                                                    <p class="font-bold text-on-surface">Freeze-Dried Liver Treats</p>
                                                    <p class="text-xs text-on-surface-variant">High Protein • 100g</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-6">
                                            <span class="px-3 py-1 bg-tertiary-container/20 text-tertiary text-[10px] font-bold uppercase rounded-full">Treats</span>
                                        </td>
                                        <td class="px-6 py-6 text-sm font-medium text-on-surface-variant">Jan 20, 2025</td>
                                        <td class="px-6 py-6">
                                            <div class="flex items-center gap-3">
                                                <div class="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                                                    <div class="bg-primary h-full w-[45%] rounded-full"></div>
                                                </div>
                                                <span class="text-xs font-bold text-primary">45%</span>
                                            </div>
                                        </td>
                                        <td class="px-8 py-6 text-right">
                                            <button class="text-slate-400 hover:text-primary transition-colors">
                                                <span class="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-surface-container-low/30 transition-colors">
                                        <td class="px-8 py-6">
                                            <div class="flex items-center gap-4">
                                                <div class="w-12 h-12 rounded-lg bg-primary-container/10 flex items-center justify-center">
                                                    <span class="material-symbols-outlined text-primary">kitchen</span>
                                                </div>
                                                <div>
                                                    <p class="font-bold text-on-surface">Wild Venison Stew</p>
                                                    <p class="text-xs text-on-surface-variant">Premium Wet • 400g</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-6">
                                            <span class="px-3 py-1 bg-secondary-container/20 text-secondary text-[10px] font-bold uppercase rounded-full">Wet Food</span>
                                        </td>
                                        <td class="px-6 py-6 text-sm font-medium text-on-surface-variant">Dec 15, 2024</td>
                                        <td class="px-6 py-6">
                                            <div class="flex items-center gap-3">
                                                <div class="w-24 h-2 bg-surface-container rounded-full overflow-hidden">
                                                    <div class="bg-secondary h-full w-[62%] rounded-full"></div>
                                                </div>
                                                <span class="text-xs font-bold text-secondary">62%</span>
                                            </div>
                                        </td>
                                        <td class="px-8 py-6 text-right">
                                            <button class="text-slate-400 hover:text-primary transition-colors">
                                                <span class="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="px-8 py-4 flex items-center justify-between">
                            <p class="text-xs text-on-surface-variant font-medium">Showing 4 of 42 pantry items</p>
                            <div class="flex gap-2">
                                <button class="p-2 rounded-full hover:bg-surface-container transition-colors">
                                    <span class="material-symbols-outlined text-sm">chevron_left</span>
                                </button>
                                <button class="p-2 rounded-full bg-primary text-on-primary font-bold text-xs px-4">1</button>
                                <button class="p-2 rounded-full hover:bg-surface-container transition-colors text-xs px-4">2</button>
                                <button class="p-2 rounded-full hover:bg-surface-container transition-colors">
                                    <span class="material-symbols-outlined text-sm">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}