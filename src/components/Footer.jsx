export default function Footer() {
    return (
        <footer className="bg-surface-container-low dark:bg-slate-950 w-full mt-20 rounded-t-[3rem] py-12 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto px-8 py-16">
                <div className="flex flex-col gap-6">
                    <div>
                        <p className="font-headline font-bold text-xl md:text-2xl text-orange-600 dark:text-orange-400 mb-4">Pet Atelier</p>
                        <p className="font-be-vietnam-pro text-sm text-on-surface-variant dark:text-slate-400 leading-relaxed max-w-xs">The Curated Playground for your companions. We believe in providing only the best for our furry friends.</p>
                    </div>
                    <div class="flex flex-col gap-2">
                        <p class="font-bold text-on-surface dark:text-white">Visit Us</p>
                        <p class="font-be-vietnam-pro text-sm text-on-surface-variant dark:text-slate-400">123 Sparkle Way, Pet Valley, NY 10012</p>
                        <p class="font-be-vietnam-pro text-sm text-on-surface-variant dark:text-slate-400">Mon - Sat: 9am - 8pm | Sun: 10am - 5pm</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-8">
                    <div class="flex flex-col gap-3">
                        <p class="font-bold text-on-surface dark:text-white mb-2">Explore</p>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Services</a>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Catalog</a>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Contact</a>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Instagram</a>
                    </div>
                    <div class="flex flex-col gap-3">
                        <p class="font-bold text-on-surface dark:text-white mb-2">Support</p>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Privacy Policy</a>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Terms of Service</a>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Shipping Info</a>
                        <a class="font-be-vietnam-pro text-sm text-slate-500 hover:text-orange-400 underline decoration-orange-500/30 underline-offset-4 transition-all duration-200" href="#">Returns</a>
                    </div>
                </div>
            </div>
            <div class="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
                <p class="font-be-vietnam-pro text-xs md:text-sm text-on-surface-variant dark:text-slate-400 opacity-60">© 2024 Pet Atelier. The Curated Playground for your companions.</p>
            </div>
        </footer>
    )
}