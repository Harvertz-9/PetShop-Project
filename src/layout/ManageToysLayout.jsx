import Sidebar from "../components/Sidebar"
export default function ManageToysLayout() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <main class="flex-1 min-w-0">
                    <div class="p-8 max-w-7xl mx-auto space-y-8">
                        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <h2 class="text-4xl font-extrabold text-on-surface tracking-tight">Manage Toys</h2>
                            <button class="flex items-center justify-center  max-w-sm space-x-2 bg-gradient-to-r from-primary to-primary-container text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-orange-100 hover:scale-105 active:scale-95 transition-all">
                                <span class="material-symbols-outlined" data-icon="add">add</span>
                                <span>Add New Toy</span>
                            </button>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div class="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
                                <div>
                                    <p class="text-sm font-medium text-on-surface-variant">Total Toys</p>
                                    <p class="text-2xl font-black">1,248</p>
                                </div>
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                                    <span class="material-symbols-outlined" data-icon="inventory_2">inventory_2</span>
                                </div>
                            </div>
                            <div class="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
                                <div>
                                    <p class="text-sm font-medium text-on-surface-variant">Low Stock</p>
                                    <p class="text-2xl font-black text-error">12 Items</p>
                                </div>
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-error shadow-sm">
                                    <span class="material-symbols-outlined" data-icon="warning" style={{ fontVariationSettings: "'FILL' 1" }}>warning</span>
                                </div>
                            </div>
                            <div class="bg-surface-container-low p-6 rounded-xl flex items-center justify-between">
                                <div>
                                    <p class="text-sm font-medium text-on-surface-variant">New This Week</p>
                                    <p class="text-2xl font-black text-secondary">42 SKUs</p>
                                </div>
                                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-secondary shadow-sm">
                                    <span class="material-symbols-outlined" data-icon="new_releases">new_releases</span>
                                </div>
                            </div>
                        </div>
                        <div class="bg-surface-container-lowest rounded-xl shadow-[0_20px_40px_rgba(25,28,29,0.06)] overflow-hidden">
                            <div class="overflow-x-auto">
                                <table class="w-full text-left border-collapse">
                                    <thead>
                                        <tr class="bg-surface-container-low border-none">
                                            <th class="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant">Product Name</th>
                                            <th class="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant">Stock Level</th>
                                            <th class="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant">Price</th>
                                            <th class="px-8 py-5 text-sm font-black uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-surface-variant/20">
                                        <tr class="hover:bg-surface-bright transition-colors group">
                                            <td class="px-8 py-6">
                                                <div class="flex items-center space-x-4">
                                                    <div class="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                                        <img alt="Organic Cotton Tug Rope" class="w-full h-full object-cover" data-alt="Close up of a thick braided organic cotton dog rope toy on a clean white background, soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzYSaLQx5onQ6qt18wr3XR66TW4ouccB_66KfMro50fGcIvURfZOxabsVMCuvNHOvv9DVbcgjW7081YLTIcbTJJiIkzbqtzScTdPCzuchz4QufaecbH3ASXyZS45wWfynGNyQe0yJdxE237j-9g7Zefu8zQq7-4-poWzc1zWTvAQ4Mm061yizf9TtLpQwNrQckh71QNYvJSn_1EG7ZKCP965wijKIi93cUIlQdQcBKqh-j6yw87kDB4ofjL2tK0bx8392v7F7ZTuPg" />
                                                    </div>
                                                    <div>
                                                        <p class="font-bold text-lg text-on-surface">Organic Cotton Tug Rope</p>
                                                        <p class="text-sm text-on-surface-variant">Category: Interactive Toys</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-8 py-6">
                                                <div class="flex flex-col gap-1">
                                                    <div class="flex items-center space-x-2">
                                                        <span class="w-2 h-2 rounded-full bg-secondary"></span>
                                                        <span class="font-bold">42 in stock</span>
                                                    </div>
                                                    <div class="w-32 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                                        <div class="h-full bg-secondary w-[60%] rounded-full"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-8 py-6 font-bold text-on-surface">$24.00</td>
                                            <td class="px-8 py-6">
                                                <div class="flex justify-end space-x-2">
                                                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-orange-50 hover:text-primary transition-all">
                                                        <span class="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                                                    </button>
                                                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-error transition-all">
                                                        <span class="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-surface-bright transition-colors group">
                                            <td class="px-8 py-6">
                                                <div class="flex items-center space-x-4">
                                                    <div class="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                                        <img alt="Plush Squeaky Squirrel" class="w-full h-full object-cover" data-alt="A cute plush squirrel dog toy with detailed textures, studio lighting on a soft beige background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0-PLk55L3mSh2Y_0h9mqv4f9B0-hZxjPJwBuEyg_Bsn8Gz8YiemcM8tJq8LEXsf1Kry-j23ZnXhP6uCHtQmM4CzHKW8K__1Rd7xYERR4jyrltoJ0qiJk64rD--XHSU0jtgtEa54Z-BIhJ2EgondqwCwKStOf9P5S-uqyLOdF4E1yLO2jgIxH1DdF5tUTjjuLhz_Ok2r6QiUILmwh-dTHCfnrZtsEeohmMzvrLpsRmVqFlrwBQ-aJ82ZjAslVdLq5-7BvFXz-jZuHm" />
                                                    </div>
                                                    <div>
                                                        <p class="font-bold text-lg text-on-surface">Plush Squeaky Squirrel</p>
                                                        <p class="text-sm text-on-surface-variant">Category: Comfort Toys</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-8 py-6">
                                                <div class="flex flex-col gap-1">
                                                    <div class="flex items-center space-x-2 text-error font-black">
                                                        <span class="w-2 h-2 rounded-full bg-error"></span>
                                                        <span>8 left - Low Stock</span>
                                                    </div>
                                                    <div class="w-32 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                                        <div class="h-full bg-error w-[15%] rounded-full"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-8 py-6 font-bold text-on-surface">$18.50</td>
                                            <td class="px-8 py-6">
                                                <div class="flex justify-end space-x-2">
                                                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-orange-50 hover:text-primary transition-all">
                                                        <span class="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                                                    </button>
                                                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-error transition-all">
                                                        <span class="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="hover:bg-surface-bright transition-colors group">
                                            <td class="px-8 py-6">
                                                <div class="flex items-center space-x-4">
                                                    <div class="w-16 h-16 rounded-lg bg-surface-container-high flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                                        <img alt="Ultra Durable Rubber Ball" class="w-full h-full object-cover" data-alt="Vibrant orange textured rubber ball for dogs, resting on green grass, bright summer sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk0Xm9WplgTO2UgzfzXo5rwtbiNnB8jeev5n0gC53k5vXI7fek3tLlB2UoYl-1p_3seeltQz-hy_Z5SE1sjBFuhlHiub_aG13lBTQy92vh2lrlDdWmuFjOwad81NwX7jUNIH7VcbgG99UV8QpPZU_H3eq63dCCJQ24-NxNz8s9V1bYh-2hYKsoU7KiSsUwD0LJLs-CeT4EzmuBwQtodRCVW5JnsHJaLsEPqumJJJ2RXQRT4lVHlrRzTnc76z7e8qwS9CXemjU3yK2Z" />
                                                    </div>
                                                    <div>
                                                        <p class="font-bold text-lg text-on-surface">Ultra Durable Rubber Ball</p>
                                                        <p class="text-sm text-on-surface-variant">Category: Chew Toys</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-8 py-6">
                                                <div class="flex flex-col gap-1">
                                                    <div class="flex items-center space-x-2">
                                                        <span class="w-2 h-2 rounded-full bg-tertiary"></span>
                                                        <span class="font-bold">126 in stock</span>
                                                    </div>
                                                    <div class="w-32 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                                                        <div class="h-full bg-tertiary w-[90%] rounded-full"></div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-8 py-6 font-bold text-on-surface">$12.99</td>
                                            <td class="px-8 py-6">
                                                <div class="flex justify-end space-x-2">
                                                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-orange-50 hover:text-primary transition-all">
                                                        <span class="material-symbols-outlined text-xl" data-icon="edit">edit</span>
                                                    </button>
                                                    <button class="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-red-50 hover:text-error transition-all">
                                                        <span class="material-symbols-outlined text-xl" data-icon="delete">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="px-8 py-4 bg-surface-container-lowest flex items-center justify-between border-t border-surface-variant/10">
                                <span class="text-sm text-on-surface-variant font-medium">Showing 1 to 3 of 128 toys</span>
                                <div class="flex space-x-2">
                                    <button class="px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">Previous</button>
                                    <button class="px-4 py-2 rounded-full text-sm font-bold bg-primary text-white shadow-md transition-all">1</button>
                                    <button class="px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">2</button>
                                    <button class="px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container-low transition-all">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}