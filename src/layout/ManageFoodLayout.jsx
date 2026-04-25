import Sidebar from "../components/Sidebar"

export default function ManageFoodLayout() {
    return (
        <>
            <div className="flex">
            <Sidebar />
            <main class="flex-1 flex flex-col min-w-0">
                <div class="p-8 space-y-10">
                    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div class="space-y-2">
                            <h2 class="text-4xl font-extrabold text-on-surface">Manage Food</h2>
                        </div>
                        <button class="bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 hover:scale-105 transition-transform active:scale-95">
                            <span class="material-symbols-outlined" data-icon="add">add</span>
                            Add New Food
                        </button>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex items-center gap-4">
                            <div class="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-primary">
                                <span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-on-surface-variant">Total SKU</p>
                                <p class="text-2xl font-bold">124 Items</p>
                            </div>
                        </div>
                        <div class="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] flex items-center gap-4">
                            <div class="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-error">
                                <span class="material-symbols-outlined" data-icon="history">history</span>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-on-surface-variant">Expiring Soon</p>
                                <p class="text-2xl font-bold">8 Batches</p>
                            </div>
                        </div>
                        <div class="bg-surface-container-lowest p-6 rounded-xl shadow-[0_20_40px_rgba(25,28,29,0.06)] flex items-center gap-4">
                            <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-secondary">
                                <span class="material-symbols-outlined" data-icon="trending_up">trending_up</span>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-on-surface-variant">Low Stock</p>
                                <p class="text-2xl font-bold">4 Categories</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-surface-container-low border-none">
                                        <th class="px-8 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest">Product Name</th>
                                        <th class="px-6 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest">Expiry Date</th>
                                        <th class="px-6 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest">Weight (kg)</th>
                                        <th class="px-6 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-center">Stock Level</th>
                                        <th class="px-8 py-5 text-sm font-bold text-on-surface-variant uppercase tracking-widest text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-surface-variant/20">
                                    <tr class="hover:bg-surface-container-low transition-colors group">
                                        <td class="px-8 py-5">
                                            <div class="flex items-center gap-4">
                                                <img alt="Organic Salmon Bites" class="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform" data-alt="Premium organic dog food in a modern bag featuring a stylized salmon illustration, bright lighting, soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2zRpoD3Xn9DB5jarYgY7NgtHLtPmTokKUVeS1VZDBL6Low2L1WqV1kQnck9SD8gRrSlxZv1KRkQnwymsymJe2Y2nxnZsiu5XxI5_eutRpR24wVyxNga0VNYcWttZxlDWTmOdZbRvMbVzLMYzQ39RFqVWwnCvD8DOmcM8ZD4HjLbH7CPAnH9tZOfGtpoMhnZ7B5B2WBOddCQ_F4LkcWy5zbZA4FDyqCjycn05ggxB_Cok5OM1qZCPfRLpMjN6Z3yt2qaUI-5bmUP9B" />
                                                <div>
                                                    <p class="font-bold text-on-surface">Organic Salmon Bites</p>
                                                    <p class="text-xs text-on-surface-variant">Grain-Free, Adult</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5">
                                            <span class="px-3 py-1 bg-error-container text-on-error-container rounded-full text-xs font-bold inline-flex items-center gap-1">
                                                <span class="material-symbols-outlined text-[14px]" data-icon="warning">warning</span>
                                                Oct 24, 2023
                                            </span>
                                        </td>
                                        <td class="px-6 py-5 text-on-surface font-medium">5.0 kg</td>
                                        <td class="px-6 py-5">
                                            <div class="flex flex-col items-center gap-1">
                                                <div class="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
                                                    <div class="bg-primary h-full w-[15%] rounded-full"></div>
                                                </div>
                                                <span class="text-[10px] font-bold text-primary">12 / 80 Units</span>
                                            </div>
                                        </td>
                                        <td class="px-8 py-5 text-right">
                                            <div class="flex justify-end gap-2">
                                                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-100 text-on-surface-variant hover:text-primary transition-all">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                                                </button>
                                                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-50 text-on-surface-variant hover:text-error transition-all">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="delete">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-surface-container-low transition-colors group">
                                        <td class="px-8 py-5">
                                            <div class="flex items-center gap-4">
                                                <img alt="Grass-Fed Beef Medley" class="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform" data-alt="Gourmet raw pet food display with chunks of beef and vegetables on a clean ceramic plate, overhead view, high-end food styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2QkCDeDGCrlBzyWhs8_9VF6MN1-ooHFI6s4fZGYCxw9auuu1kPrv165x8SA7wz_4XjmtO-jk6Aw28zyhWKvs6VZ7OfCzgHkV12EgB8eQUyBars58yfDfT5naxwgCrOYsqMMEuWvLWB9vYfIsTO2hbft1GRLSwZ9CIo7XYTdfgm7EoqRT54MzCw-3kOxM5p9RENhO1belfJbnyX-ItM8Z07GEBbHYXXZid3HJmbuWEHhkEd59ClYw5OovUh6u-fG15hQIlBi8ruTHf" />
                                                <div>
                                                    <p class="font-bold text-on-surface">Grass-Fed Beef Medley</p>
                                                    <p class="text-xs text-on-surface-variant">Raw Frozen, All Life Stages</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5">
                                            <span class="text-on-surface-variant text-sm">Dec 15, 2024</span>
                                        </td>
                                        <td class="px-6 py-5 text-on-surface font-medium">10.0 kg</td>
                                        <td class="px-6 py-5">
                                            <div class="flex flex-col items-center gap-1">
                                                <div class="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
                                                    <div class="bg-secondary h-full w-[85%] rounded-full"></div>
                                                </div>
                                                <span class="text-[10px] font-bold text-secondary">42 / 50 Units</span>
                                            </div>
                                        </td>
                                        <td class="px-8 py-5 text-right">
                                            <div class="flex justify-end gap-2">
                                                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-100 text-on-surface-variant hover:text-primary transition-all">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                                                </button>
                                                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-50 text-on-surface-variant hover:text-error transition-all">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="delete">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-surface-container-low transition-colors group">
                                        <td class="px-8 py-5">
                                            <div class="flex items-center gap-4">
                                                <img alt="Wild Caught Tuna Flakes" class="w-12 h-12 rounded-lg object-cover group-hover:scale-110 transition-transform" data-alt="Luxury wet cat food in a sophisticated glass jar, elegant labeling, soft studio lighting with warm highlights" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADXAbds-IKBxzYxbthL6FV-5S0EfP90lHmLZ33JJDHpLHfhdrf7OTyV3bwnu6fkaBaTFec_qvRt7uaFRbNGeg3CqMzeiiFjTCsww0xXupGzEKYfzRqZ9yZARqT3pKqddqiJNU9qAKI_AJvN3w7B54UlXjTrCQGpN5uDtvC_x-N8cvVNFj-TYI_85qO6TwYbEQDRoUPG90S-AuCPdim-NPOpX2a8yLFnZqOqbwO2xmzWtYkGP2Ah1hVrXL3tc4cTBdzZgjflfd80FUz" />
                                                <div>
                                                    <p class="font-bold text-on-surface">Wild Caught Tuna Flakes</p>
                                                    <p class="text-xs text-on-surface-variant">Wet Food, Kitten</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="px-6 py-5">
                                            <span class="text-on-surface-variant text-sm">Jan 02, 2025</span>
                                        </td>
                                        <td class="px-6 py-5 text-on-surface font-medium">0.8 kg</td>
                                        <td class="px-6 py-5">
                                            <div class="flex flex-col items-center gap-1">
                                                <div class="w-24 h-2 bg-surface-container-high rounded-full overflow-hidden">
                                                    <div class="bg-tertiary-container h-full w-[45%] rounded-full"></div>
                                                </div>
                                                <span class="text-[10px] font-bold text-tertiary-container">120 / 250 Units</span>
                                            </div>
                                        </td>
                                        <td class="px-8 py-5 text-right">
                                            <div class="flex justify-end gap-2">
                                                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-100 text-on-surface-variant hover:text-primary transition-all">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="edit">edit</span>
                                                </button>
                                                <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-50 text-on-surface-variant hover:text-error transition-all">
                                                    <span class="material-symbols-outlined text-[18px]" data-icon="delete">delete</span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="px-8 py-4 bg-surface-container border-t border-surface-variant/10 flex justify-between items-center">
                            <p class="text-xs font-medium text-on-surface-variant">Showing 1 to 10 of 124 products</p>
                            <div class="flex items-center gap-2">
                                <button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">
                                    <span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span>
                                </button>
                                <button class="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white font-bold shadow-md">1</button>
                                <button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">2</button>
                                <button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">3</button>
                                <button class="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-lowest shadow-sm hover:text-primary transition-all">
                                    <span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </div>
        </>
    )
}